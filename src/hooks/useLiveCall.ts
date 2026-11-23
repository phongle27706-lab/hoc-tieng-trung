"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  createChineseRecognizer,
  isSpeechRecognitionSupported,
  isVietnameseText,
  speakBilingualText,
  stopSpeaking,
  type SpeechRecognitionInstance,
} from "@/lib/speech";
import { getAITutorSettings, recordVoiceCallPractice } from "@/lib/storage";
import type { AIPersonaMode } from "@/types";

export type LiveCallState = "idle" | "listening" | "thinking" | "speaking";
export type ListenLang = "zh-CN" | "vi-VN";

export interface LiveCallTurn {
  id: string;
  role: "user" | "assistant";
  contentZh: string;
  contentPinyin?: string;
  contentVi: string;
  correctionHint?: string;
  spokenText: string;
  lang: ListenLang;
}

export interface UseLiveCallOptions {
  persona: AIPersonaMode;
  level: "HSK1" | "HSK3" | "HSK5";
  playViVoice: boolean;
  speechRate: number;
  zhVoiceName?: string;
  viVoiceName?: string;
}

const POST_SPEECH_MIC_DELAY_MS = 320;
const SILENCE_TIMEOUT_MS = 1650;
const NO_SPEECH_RETRY_DELAY_MS = 650;
const MAX_NO_SPEECH_RETRIES = 3;

function buildGreeting(persona: AIPersonaMode): {
  contentZh: string;
  contentPinyin: string;
  contentVi: string;
  spokenText: string;
} {
  switch (persona) {
    case "vui-ve":
      return {
        contentZh: "你好呀！我是宝宝，今天你想聊点什么呢？",
        contentPinyin: "Nǐ hǎo ya! Wǒ shì Bǎobǎo, jīntiān nǐ xiǎng liáo diǎn shénme ne?",
        contentVi: "Chào bạn nha! Mình là BaoBao, hôm nay bạn muốn trò chuyện chủ đề gì nè?",
        spokenText: "你好呀！Chào bạn nha, hôm nay bạn muốn nói chuyện gì với BaoBao nè?",
      };
    case "cuoi-nhao":
      return {
        contentZh: "嗨呀！终于来找我聊天啦？今天想聊啥呢？",
        contentPinyin: "Hāi ya! Zhōngyú lái zhǎo wǒ liáotiān la? Jīntiān xiǎng liáo shá ne?",
        contentVi: "Ồ, cuối cùng cũng chịu gọi cho BaoBao rồi hả? Hôm nay định nói chuyện gì nào?",
        spokenText: "嗨呀！Cuối cùng cũng gọi cho BaoBao rồi hả? Hôm nay định tán gẫu gì nào?",
      };
    case "khinh-bi":
      return {
        contentZh: "哼，来了呀？说吧，今天想练什么呢？",
        contentPinyin: "Hēng, lái le ya? Shuō ba, jīntiān xiǎng liàn shénme ne?",
        contentVi: "Hừ, tới rồi à? Nói đi, hôm nay muốn luyện gì nào?",
        spokenText: "哼，来了呀？Nói đi, hôm nay muốn luyện tiếng Trung chủ đề gì nào?",
      };
    default:
      return {
        contentZh: "你好呀！我是宝宝，随便用中文或越南语聊吧，你今天过得怎么样？",
        contentPinyin: "Nǐ hǎo ya! Wǒ shì Bǎobǎo, suíbiàn yòng Zhōngwén huò Yuènányǔ liáo ba, nǐ jīntiān guò de zěnmeyàng?",
        contentVi: "Chào bạn! Mình là BaoBao, bạn cứ nói tiếng Trung hoặc tiếng Việt thoải mái nhé. Hôm nay của bạn thế nào?",
        spokenText: "你好呀！Chào bạn, cứ nói tiếng Trung hoặc tiếng Việt thoải mái nhé. Hôm nay của bạn thế nào?",
      };
  }
}

export function useLiveCall(options: UseLiveCallOptions) {
  const { persona, level, playViVoice, speechRate, zhVoiceName, viVoiceName } = options;

  const [callState, setCallState] = useState<LiveCallState>("idle");
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [listenLang, setListenLangState] = useState<ListenLang>("zh-CN");
  const [liveTranscript, setLiveTranscript] = useState("");
  const [turns, setTurns] = useState<LiveCallTurn[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [noSpeechHint, setNoSpeechHint] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speakingPhase, setSpeakingPhase] = useState<"vi" | "zh" | null>(null);
  const [bargeInEnabled, setBargeInEnabled] = useState(true);

  const personaRef = useRef(persona);
  const levelRef = useRef(level);
  const playViVoiceRef = useRef(playViVoice);
  const speechRateRef = useRef(speechRate);
  const zhVoiceNameRef = useRef(zhVoiceName);
  const viVoiceNameRef = useRef(viVoiceName);
  const listenLangRef = useRef<ListenLang>(listenLang);
  const turnsRef = useRef<LiveCallTurn[]>(turns);

  const isCallActiveRef = useRef(false);
  const isMutedRef = useRef(false);
  const bargeInEnabledRef = useRef(true);
  const callStateRef = useRef<LiveCallState>("idle");

  const turnIdRef = useRef(0);
  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);
  const transcriptRef = useRef("");
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const noSpeechRetriesRef = useRef(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    callStateRef.current = callState;
  }, [callState]);
  useEffect(() => {
    personaRef.current = persona;
  }, [persona]);
  useEffect(() => {
    levelRef.current = level;
  }, [level]);
  useEffect(() => {
    playViVoiceRef.current = playViVoice;
  }, [playViVoice]);
  useEffect(() => {
    speechRateRef.current = speechRate;
  }, [speechRate]);
  useEffect(() => {
    zhVoiceNameRef.current = zhVoiceName;
  }, [zhVoiceName]);
  useEffect(() => {
    viVoiceNameRef.current = viVoiceName;
  }, [viVoiceName]);
  useEffect(() => {
    listenLangRef.current = listenLang;
  }, [listenLang]);
  useEffect(() => {
    turnsRef.current = turns;
  }, [turns]);
  useEffect(() => {
    bargeInEnabledRef.current = bargeInEnabled;
  }, [bargeInEnabled]);

  const clearSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current !== null) {
      clearTimeout(silenceTimerRef.current);
      timersRef.current.delete(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    clearSilenceTimer();
    for (const t of timersRef.current) {
      clearTimeout(t);
    }
    timersRef.current.clear();
  }, [clearSilenceTimer]);

  const scheduleTimer = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      timersRef.current.delete(id);
      fn();
    }, ms);
    timersRef.current.add(id);
    return id;
  }, []);

  const abortRecognizer = useCallback(() => {
    clearSilenceTimer();
    const rec = recognizerRef.current;
    if (rec) {
      recognizerRef.current = null;
      rec.onresult = null;
      rec.onerror = null;
      rec.onend = null;
      try {
        rec.abort();
      } catch {
        // Ignore already-stopped recognizer errors
      }
    }
  }, [clearSilenceTimer]);

  const openMicRef = useRef<() => void>(() => {});

  const speakAndThenListen = useCallback(
    (textToSpeak: string, myTurn: number) => {
      if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;
      setCallState("speaking");

      speakBilingualText(textToSpeak, {
        rate: speechRateRef.current,
        zhVoiceName: zhVoiceNameRef.current || undefined,
        viVoiceName: viVoiceNameRef.current || undefined,
        onPhaseChange: (phase) => {
          if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;
          if (phase !== "done") {
            setSpeakingPhase(phase);
            return;
          }
          setSpeakingPhase(null);
          scheduleTimer(() => {
            if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;
            if (!isMutedRef.current) {
              openMicRef.current();
            } else {
              setCallState("idle");
            }
          }, POST_SPEECH_MIC_DELAY_MS);
        },
      });
    },
    [scheduleTimer]
  );

  const sendUserSpeech = useCallback(
    async (spokenText: string) => {
      const cleaned = spokenText.trim();
      if (!cleaned || !isCallActiveRef.current) return;

      const myTurn = ++turnIdRef.current;
      abortRecognizer();
      stopSpeaking();
      abortControllerRef.current?.abort();
      setNoSpeechHint(null);
      setErrorMsg(null);
      setCallState("thinking");

      const spokeVietnamese =
        listenLangRef.current === "vi-VN" || isVietnameseText(cleaned);

      const userTurn: LiveCallTurn = {
        id: `u-${Date.now()}`,
        role: "user",
        contentZh: cleaned,
        contentVi: cleaned,
        spokenText: cleaned,
        lang: spokeVietnamese ? "vi-VN" : "zh-CN",
      };

      const nextHistory = [...turnsRef.current, userTurn];
      turnsRef.current = nextHistory;
      setTurns(nextHistory);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const savedSettings = getAITutorSettings();
        const res = await fetch("/api/ai-tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            message: cleaned,
            history: nextHistory.slice(-8).map((t) => ({
              role: t.role,
              contentZh: t.contentZh,
              contentVi: t.contentVi,
            })),
            persona: personaRef.current,
            levelLimit: levelRef.current,
            roleplayRole: "friend",
            apiKey: savedSettings.apiKey || undefined,
            provider: savedSettings.provider,
          }),
        });

        if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;

        let contentZh = "嗯嗯，我听懂啦！你还可以再说说吗？";
        let contentPinyin = "Ńg ńg, wǒ tīngdǒng la! Nǐ hái kěyǐ zài shuōshuo ma?";
        let contentVi = "Ừm ừm, mình hiểu rồi nè! Bạn kể thêm đi?";
        let correctionHint: string | undefined;

        if (res.ok) {
          const data = (await res.json()) as {
            contentZh?: string;
            contentPinyin?: string;
            contentVi?: string;
            correctionHint?: string;
          };
          if (data.contentZh) contentZh = data.contentZh;
          if (data.contentPinyin) contentPinyin = data.contentPinyin;
          if (data.contentVi) contentVi = data.contentVi;
          if (data.correctionHint) correctionHint = data.correctionHint;
        }

        // Build natural bilingual speech text:
        // - If user spoke Vietnamese: speak BaoBao's Vietnamese reply (which includes the suggested Chinese sentence,
        //   or append contentZh if contentVi doesn't already contain Hanzi) so BaoBao is NEVER silent in VI/bilingual!
        // - If user spoke Chinese: speak contentZh naturally (plus brief Vietnamese hint if playViVoice is on & hint exists).
        let speechText = contentZh;
        if (spokeVietnamese) {
          const viHasHanzi = /\p{Script=Han}/u.test(contentVi);
          speechText = viHasHanzi ? contentVi : `${contentVi} ${contentZh}`;
        } else if (playViVoiceRef.current && correctionHint) {
          speechText = `${contentZh} ${correctionHint}`;
        }

        const aiTurn: LiveCallTurn = {
          id: `a-${Date.now()}`,
          role: "assistant",
          contentZh,
          contentPinyin,
          contentVi,
          correctionHint,
          spokenText: speechText,
          lang: spokeVietnamese ? "vi-VN" : "zh-CN",
        };

        const updatedTurns = [...turnsRef.current, aiTurn];
        turnsRef.current = updatedTurns;
        setTurns(updatedTurns);
        setLiveTranscript("");
        recordVoiceCallPractice(90);

        speakAndThenListen(speechText, myTurn);
      } catch (err) {
        if ((err as { name?: string })?.name === "AbortError") return;
        if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;

        const fallbackText = spokeVietnamese
          ? "Mạng hơi chập chờn một chút, bạn nói lại cho BaoBao nghe nhé?"
          : "抱歉呀，刚才信号有点卡，你能再说一遍吗？";
        speakAndThenListen(fallbackText, myTurn);
      }
    },
    [abortRecognizer, speakAndThenListen]
  );

  const openMic = useCallback(() => {
    if (!isCallActiveRef.current || isMutedRef.current) {
      setCallState("idle");
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setCallState("idle");
      setErrorMsg("Trình duyệt không hỗ trợ nhận diện giọng nói (Web Speech API).");
      return;
    }

    const myTurn = ++turnIdRef.current;
    stopSpeaking();
    abortRecognizer();

    transcriptRef.current = "";
    setLiveTranscript("");
    setErrorMsg(null);
    setSpeakingPhase(null);
    setCallState("listening");

    let handled = false;
    let hadError: string | null = null;

    const resetSilenceDebounce = () => {
      clearSilenceTimer();
      silenceTimerRef.current = scheduleTimer(() => {
        if (turnIdRef.current !== myTurn || handled) return;
        if (transcriptRef.current.trim().length > 0) {
          try {
            recognizerRef.current?.stop();
          } catch {
            // Ignore
          }
        }
      }, SILENCE_TIMEOUT_MS);
    };

    const recognizer = createChineseRecognizer(
      {
        onResult: (text, isFinal) => {
          if (turnIdRef.current !== myTurn || handled) return;
          transcriptRef.current = text;
          setLiveTranscript(text);
          noSpeechRetriesRef.current = 0;
          setNoSpeechHint(null);

          if (isFinal && text.trim().length > 0) {
            handled = true;
            clearSilenceTimer();
            void sendUserSpeech(text.trim());
          } else if (text.trim().length > 0) {
            resetSilenceDebounce();
          }
        },
        onError: (err) => {
          if (turnIdRef.current !== myTurn || handled) return;
          hadError = err;
          clearSilenceTimer();

          if (err === "not-allowed" || err === "service-not-allowed") {
            handled = true;
            setCallState("idle");
            setErrorMsg("Chưa được cấp quyền Microphone. Vui lòng bật Mic trên trình duyệt.");
            return;
          }

          if (err === "aborted") {
            handled = true;
            return;
          }

          if (err === "no-speech") {
            handled = true;
            if (
              isCallActiveRef.current &&
              !isMutedRef.current &&
              noSpeechRetriesRef.current < MAX_NO_SPEECH_RETRIES
            ) {
              noSpeechRetriesRef.current += 1;
              setNoSpeechHint("BaoBao vẫn đang lắng nghe bạn...");
              scheduleTimer(() => {
                if (
                  turnIdRef.current === myTurn &&
                  isCallActiveRef.current &&
                  !isMutedRef.current
                ) {
                  openMicRef.current();
                }
              }, NO_SPEECH_RETRY_DELAY_MS);
            } else {
              setCallState("idle");
              setNoSpeechHint("Chưa nghe thấy giọng nói. Nhấn Mic để tiếp tục nói.");
            }
            return;
          }

          handled = true;
          setCallState("idle");
          setErrorMsg(`Lỗi nhận diện giọng nói (${err}). Nhấn Mic để thử lại.`);
        },
        onEnd: () => {
          if (turnIdRef.current !== myTurn || handled) return;
          clearSilenceTimer();
          const captured = transcriptRef.current.trim();
          if (captured.length > 0) {
            handled = true;
            void sendUserSpeech(captured);
          } else if (!hadError) {
            if (
              isCallActiveRef.current &&
              !isMutedRef.current &&
              noSpeechRetriesRef.current < MAX_NO_SPEECH_RETRIES
            ) {
              noSpeechRetriesRef.current += 1;
              scheduleTimer(() => {
                if (
                  turnIdRef.current === myTurn &&
                  isCallActiveRef.current &&
                  !isMutedRef.current
                ) {
                  openMicRef.current();
                }
              }, NO_SPEECH_RETRY_DELAY_MS);
            } else {
              setCallState("idle");
            }
          }
        },
      },
      { continuous: false, interimResults: true, lang: listenLangRef.current }
    );

    if (!recognizer) {
      setCallState("idle");
      setErrorMsg("Không thể khởi tạo nhận diện giọng nói trên trình duyệt này.");
      return;
    }

    recognizerRef.current = recognizer;
    try {
      recognizer.start();
    } catch {
      setCallState("idle");
      setErrorMsg("Microphone đang bận. Nhấn Mic để thử lại.");
    }
  }, [abortRecognizer, clearSilenceTimer, scheduleTimer, sendUserSpeech]);

  useEffect(() => {
    openMicRef.current = openMic;
  }, [openMic]);

  // ── Barge-in VAD (AUDIO ONLY — never requests camera/video) ──
  const vadRef = useRef<{
    stream: MediaStream;
    ctx: AudioContext;
    analyser: AnalyserNode;
    raf: number;
  } | null>(null);
  const micLevelRef = useRef(0);

  const stopVad = useCallback(() => {
    const v = vadRef.current;
    if (!v) return;
    vadRef.current = null;
    cancelAnimationFrame(v.raf);
    v.stream.getTracks().forEach((tr) => tr.stop());
    v.ctx.close().catch(() => {});
    micLevelRef.current = 0;
  }, []);

  const startVad = useCallback(async () => {
    if (
      vadRef.current ||
      typeof navigator === "undefined" ||
      !navigator.mediaDevices?.getUserMedia
    ) {
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      if (!isCallActiveRef.current) {
        stream.getTracks().forEach((tr) => tr.stop());
        return;
      }
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      ctx.createMediaStreamSource(stream).connect(analyser);
      const buf = new Uint8Array(analyser.fftSize);
      let loudSince = 0;

      const tick = () => {
        const v = vadRef.current;
        if (!v) return;
        analyser.getByteTimeDomainData(buf);
        let sum = 0;
        for (let i = 0; i < buf.length; i++) {
          const x = (buf[i] - 128) / 128;
          sum += x * x;
        }
        const rms = Math.sqrt(sum / buf.length);
        micLevelRef.current = rms;
        const now = performance.now();

        if (
          bargeInEnabledRef.current &&
          callStateRef.current === "speaking" &&
          !isMutedRef.current &&
          rms > 0.085
        ) {
          if (!loudSince) loudSince = now;
          if (now - loudSince > 240) {
            loudSince = 0;
            stopSpeaking();
            setSpeakingPhase(null);
            noSpeechRetriesRef.current = 0;
            openMicRef.current();
          }
        } else {
          loudSince = 0;
        }
        v.raf = requestAnimationFrame(tick);
      };
      vadRef.current = { stream, ctx, analyser, raf: requestAnimationFrame(tick) };
    } catch {
      // Mic permission denied for VAD: hands-free SpeechRecognition still works
    }
  }, []);

  const getMicLevel = useCallback(() => micLevelRef.current, []);

  useEffect(() => {
    setSpeechSupported(isSpeechRecognitionSupported());
    return () => {
      isCallActiveRef.current = false;
      turnIdRef.current += 1;
      abortControllerRef.current?.abort();
      clearAllTimers();
      abortRecognizer();
      stopSpeaking();
      stopVad();
    };
  }, [abortRecognizer, clearAllTimers, stopVad]);

  const startCall = useCallback(() => {
    clearAllTimers();
    abortRecognizer();
    stopSpeaking();
    abortControllerRef.current?.abort();

    isCallActiveRef.current = true;
    isMutedRef.current = false;
    noSpeechRetriesRef.current = 0;

    setIsCallActive(true);
    setIsMuted(false);
    setLiveTranscript("");
    setErrorMsg(null);
    setNoSpeechHint(null);

    const greeting = buildGreeting(personaRef.current);
    const greetTurn: LiveCallTurn = {
      id: `g-${Date.now()}`,
      role: "assistant",
      contentZh: greeting.contentZh,
      contentPinyin: greeting.contentPinyin,
      contentVi: greeting.contentVi,
      spokenText: greeting.spokenText,
      lang: listenLangRef.current,
    };
    turnsRef.current = [greetTurn];
    setTurns([greetTurn]);

    const myTurn = ++turnIdRef.current;
    speakAndThenListen(greeting.spokenText, myTurn);
    void startVad();
  }, [abortRecognizer, clearAllTimers, speakAndThenListen, startVad]);

  const endCall = useCallback(() => {
    isCallActiveRef.current = false;
    turnIdRef.current += 1;
    abortControllerRef.current?.abort();
    clearAllTimers();
    abortRecognizer();
    stopSpeaking();
    stopVad();

    setIsCallActive(false);
    setCallState("idle");
    setSpeakingPhase(null);
    setNoSpeechHint(null);
    setLiveTranscript("");
  }, [abortRecognizer, clearAllTimers, stopVad]);

  const toggleMute = useCallback(() => {
    const nextMuted = !isMutedRef.current;
    isMutedRef.current = nextMuted;
    setIsMuted(nextMuted);

    if (nextMuted) {
      turnIdRef.current += 1;
      abortRecognizer();
      if (callStateRef.current === "listening") {
        setCallState("idle");
      }
    } else if (isCallActiveRef.current && callStateRef.current === "idle") {
      noSpeechRetriesRef.current = 0;
      openMic();
    }
  }, [abortRecognizer, openMic]);

  const setListenLang = useCallback(
    (lang: ListenLang) => {
      listenLangRef.current = lang;
      setListenLangState(lang);
      if (isCallActiveRef.current && callStateRef.current === "listening" && !isMutedRef.current) {
        noSpeechRetriesRef.current = 0;
        openMic();
      }
    },
    [openMic]
  );

  const retryListening = useCallback(() => {
    if (!isCallActiveRef.current) {
      isCallActiveRef.current = true;
      setIsCallActive(true);
      void startVad();
    }
    if (isMutedRef.current) {
      isMutedRef.current = false;
      setIsMuted(false);
    }
    noSpeechRetriesRef.current = 0;
    openMic();
  }, [openMic, startVad]);

  const replayLastReply = useCallback(() => {
    const lastAi = [...turnsRef.current].reverse().find((t) => t.role === "assistant");
    if (!lastAi) return;
    if (!isCallActiveRef.current) {
      isCallActiveRef.current = true;
      setIsCallActive(true);
    }
    const myTurn = ++turnIdRef.current;
    abortRecognizer();
    speakAndThenListen(lastAi.spokenText, myTurn);
  }, [abortRecognizer, speakAndThenListen]);

  const sendSampleUtterance = useCallback(
    (sampleText: string) => {
      if (!isCallActiveRef.current) {
        isCallActiveRef.current = true;
        setIsCallActive(true);
        void startVad();
      }
      setLiveTranscript(sampleText);
      void sendUserSpeech(sampleText);
    },
    [sendUserSpeech, startVad]
  );

  const lastAssistantTurn = [...turns].reverse().find((t) => t.role === "assistant") ?? null;
  const lastUserTurn = [...turns].reverse().find((t) => t.role === "user") ?? null;

  return {
    callState,
    isCallActive,
    isMuted,
    listenLang,
    setListenLang,
    liveTranscript,
    turns,
    lastAssistantTurn,
    lastUserTurn,
    errorMsg,
    noSpeechHint,
    speechSupported,
    speakingPhase,
    startCall,
    endCall,
    toggleMute,
    retryListening,
    replayLastReply,
    sendSampleUtterance,
    getMicLevel,
    bargeInEnabled,
    setBargeInEnabled,
  };
}
