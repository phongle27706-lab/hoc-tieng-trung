"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  createChineseRecognizer,
  isSpeechRecognitionSupported,
  speakBilingualTurn,
  stopSpeaking,
  type SpeechRecognitionInstance,
} from "@/lib/speech";
import { recordVoiceCallPractice } from "@/lib/storage";
import {
  evaluateChinesePronunciation,
  VOICE_CALL_PROMPTS,
  type PronunciationEvaluation,
  type VoiceCallPrompt,
} from "@/lib/voice-call";
import type { AIPersonaMode, HSKLevel } from "@/types";

export type LiveCallState = "idle" | "listening" | "thinking" | "speaking";

export interface UseLiveCallOptions {
  persona: AIPersonaMode;
  level: "HSK1" | "HSK3" | "HSK5";
  avatarGender: "male" | "female";
  playViVoice: boolean;
  speechRate: number;
  autoNext: boolean;
}

const POST_SPEECH_MIC_DELAY_MS = 300;
const SILENCE_TIMEOUT_MS = 1800;
const NO_SPEECH_RETRY_DELAY_MS = 700;
const MAX_NO_SPEECH_RETRIES = 2;

export function useLiveCall(options: UseLiveCallOptions) {
  const { persona, level, avatarGender, playViVoice, speechRate, autoNext } = options;

  const [callState, setCallState] = useState<LiveCallState>("idle");
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [evaluation, setEvaluation] = useState<PronunciationEvaluation | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [noSpeechHint, setNoSpeechHint] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speakingPhase, setSpeakingPhase] = useState<"vi" | "zh" | null>(null);
  const [practicedCount, setPracticedCount] = useState(0);
  const [totalAccuracySum, setTotalAccuracySum] = useState(0);

  const levelPrompts = useMemo<VoiceCallPrompt[]>(() => {
    const allowed: HSKLevel[] =
      level === "HSK1"
        ? ["HSK0", "HSK1", "HSK2"]
        : level === "HSK3"
        ? ["HSK2", "HSK3", "HSK4"]
        : ["HSK4", "HSK5", "HSK6"];
    const matched = VOICE_CALL_PROMPTS.filter((p) => allowed.includes(p.level));
    return matched.length > 0 ? matched : VOICE_CALL_PROMPTS;
  }, [level]);

  const currentPrompt: VoiceCallPrompt | undefined =
    levelPrompts[promptIndex % Math.max(1, levelPrompts.length)];

  const avgAccuracy =
    practicedCount > 0 ? Math.round(totalAccuracySum / practicedCount) : 0;

  const personaRef = useRef(persona);
  const avatarGenderRef = useRef(avatarGender);
  const playViVoiceRef = useRef(playViVoice);
  const speechRateRef = useRef(speechRate);
  const autoNextRef = useRef(autoNext);
  const levelPromptsRef = useRef(levelPrompts);
  const promptIndexRef = useRef(promptIndex);
  const isCallActiveRef = useRef(false);
  const isMutedRef = useRef(false);

  const turnIdRef = useRef(0);
  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);
  const transcriptRef = useRef("");
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const noSpeechRetriesRef = useRef(0);
  const callStateRef = useRef<LiveCallState>("idle");

  useEffect(() => {
    callStateRef.current = callState;
  }, [callState]);

  useEffect(() => {
    personaRef.current = persona;
  }, [persona]);

  useEffect(() => {
    avatarGenderRef.current = avatarGender;
  }, [avatarGender]);

  useEffect(() => {
    playViVoiceRef.current = playViVoice;
  }, [playViVoice]);

  useEffect(() => {
    speechRateRef.current = speechRate;
  }, [speechRate]);

  useEffect(() => {
    autoNextRef.current = autoNext;
  }, [autoNext]);

  useEffect(() => {
    levelPromptsRef.current = levelPrompts;
  }, [levelPrompts]);

  useEffect(() => {
    promptIndexRef.current = promptIndex;
  }, [promptIndex]);

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

  const openMicForPromptRef = useRef<(prompt: VoiceCallPrompt) => void>(() => {});
  const speakPromptAndListenRef = useRef<(prompt: VoiceCallPrompt) => void>(() => {});

  const evaluateAndRespond = useCallback(
    (spokenText: string, prompt: VoiceCallPrompt) => {
      if (!isCallActiveRef.current) return;

      const myTurn = ++turnIdRef.current;
      abortRecognizer();
      stopSpeaking();
      setNoSpeechHint(null);
      setCallState("thinking");

      const result = evaluateChinesePronunciation(
        prompt.targetZh,
        spokenText,
        personaRef.current,
        prompt.targetPinyin
      );
      setEvaluation(result);
      setPracticedCount((c) => c + 1);
      setTotalAccuracySum((s) => s + result.accuracy);
      recordVoiceCallPractice(result.accuracy);

      setCallState("speaking");

      speakBilingualTurn(result.feedbackVi, result.encouragementZh, {
        playVi: playViVoiceRef.current,
        rate: speechRateRef.current,
        gender: avatarGenderRef.current,
        onPhaseChange: (phase) => {
          if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;

          if (phase !== "done") {
            setSpeakingPhase(phase);
            return;
          }

          setSpeakingPhase(null);

          if (result.passed && autoNextRef.current) {
            scheduleTimer(() => {
              if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;
              const list = levelPromptsRef.current;
              if (list.length === 0) return;
              const nextIdx = (promptIndexRef.current + 1) % list.length;
              promptIndexRef.current = nextIdx;
              setPromptIndex(nextIdx);
              setLiveTranscript("");
              setEvaluation(null);
              speakPromptAndListenRef.current(list[nextIdx]);
            }, 650);
          } else {
            scheduleTimer(() => {
              if (turnIdRef.current !== myTurn || !isCallActiveRef.current) return;
              if (!isMutedRef.current) {
                openMicForPromptRef.current(prompt);
              } else {
                setCallState("idle");
              }
            }, POST_SPEECH_MIC_DELAY_MS);
          }
        },
      });
    },
    [abortRecognizer, scheduleTimer]
  );

  const openMicForPrompt = useCallback(
    (prompt: VoiceCallPrompt) => {
      if (!isCallActiveRef.current || isMutedRef.current) {
        setCallState("idle");
        return;
      }

      if (!isSpeechRecognitionSupported()) {
        setCallState("idle");
        setErrorMsg(
          "Trình duyệt không hỗ trợ thu âm trực tiếp. Hãy dùng nút 'Giả lập câu đọc' bên dưới."
        );
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
              evaluateAndRespond(text.trim(), prompt);
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
              setErrorMsg(
                "Chưa được cấp quyền Microphone. Hãy cấp quyền hoặc bấm 'Giả lập câu đọc'."
              );
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
                setNoSpeechHint("BaoBao chưa nghe rõ, đang tự mở lại mic...");
                scheduleTimer(() => {
                  if (
                    turnIdRef.current === myTurn &&
                    isCallActiveRef.current &&
                    !isMutedRef.current
                  ) {
                    openMicForPromptRef.current(prompt);
                  }
                }, NO_SPEECH_RETRY_DELAY_MS);
              } else {
                setCallState("idle");
                setNoSpeechHint("Không phát hiện giọng nói. Bấm 'Thu âm lại' khi bạn sẵn sàng.");
              }
              return;
            }

            handled = true;
            setCallState("idle");
            setErrorMsg(`Lỗi nhận diện giọng nói (${err}). Bấm 'Thu âm lại' để tiếp tục.`);
          },
          onEnd: () => {
            if (turnIdRef.current !== myTurn || handled) return;
            clearSilenceTimer();
            const captured = transcriptRef.current.trim();
            if (captured.length > 0) {
              handled = true;
              evaluateAndRespond(captured, prompt);
            } else if (!hadError) {
              if (
                isCallActiveRef.current &&
                !isMutedRef.current &&
                noSpeechRetriesRef.current < MAX_NO_SPEECH_RETRIES
              ) {
                noSpeechRetriesRef.current += 1;
                setNoSpeechHint("Đang chờ bạn đọc câu mẫu...");
                scheduleTimer(() => {
                  if (
                    turnIdRef.current === myTurn &&
                    isCallActiveRef.current &&
                    !isMutedRef.current
                  ) {
                    openMicForPromptRef.current(prompt);
                  }
                }, NO_SPEECH_RETRY_DELAY_MS);
              } else {
                setCallState("idle");
              }
            }
          },
        },
        { continuous: false, interimResults: true, lang: "zh-CN" }
      );

      if (!recognizer) {
        setCallState("idle");
        setErrorMsg("Không thể khởi tạo bộ nhận diện giọng nói trên trình duyệt này.");
        return;
      }

      recognizerRef.current = recognizer;
      try {
        recognizer.start();
      } catch {
        setCallState("idle");
        setErrorMsg("Microphone đang bận. Hãy bấm 'Thu âm lại' sau 1 giây.");
      }
    },
    [abortRecognizer, clearSilenceTimer, evaluateAndRespond, scheduleTimer]
  );

  const speakPromptAndListen = useCallback(
    (prompt: VoiceCallPrompt) => {
      if (!isCallActiveRef.current) return;

      const myTurn = ++turnIdRef.current;
      abortRecognizer();
      stopSpeaking();
      noSpeechRetriesRef.current = 0;

      setErrorMsg(null);
      setNoSpeechHint(null);
      setCallState("speaking");

      speakBilingualTurn(prompt.introVi, prompt.targetZh, {
        playVi: playViVoiceRef.current,
        rate: speechRateRef.current,
        gender: avatarGenderRef.current,
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
              openMicForPromptRef.current(prompt);
            } else {
              setCallState("idle");
            }
          }, POST_SPEECH_MIC_DELAY_MS);
        },
      });
    },
    [abortRecognizer, scheduleTimer]
  );

  useEffect(() => {
    openMicForPromptRef.current = openMicForPrompt;
  }, [openMicForPrompt]);

  useEffect(() => {
    speakPromptAndListenRef.current = speakPromptAndListen;
  }, [speakPromptAndListen]);

  useEffect(() => {
    setSpeechSupported(isSpeechRecognitionSupported());
    return () => {
      isCallActiveRef.current = false;
      turnIdRef.current += 1;
      clearAllTimers();
      abortRecognizer();
      stopSpeaking();
    };
  }, [abortRecognizer, clearAllTimers]);

  const startCall = useCallback(() => {
    const list = levelPromptsRef.current;
    const prompt = list[promptIndexRef.current % Math.max(1, list.length)];
    if (!prompt) return;

    clearAllTimers();
    abortRecognizer();
    stopSpeaking();

    isCallActiveRef.current = true;
    isMutedRef.current = false;
    noSpeechRetriesRef.current = 0;

    setIsCallActive(true);
    setIsMuted(false);
    setLiveTranscript("");
    setEvaluation(null);
    setErrorMsg(null);
    setNoSpeechHint(null);

    speakPromptAndListen(prompt);
  }, [abortRecognizer, clearAllTimers, speakPromptAndListen]);

  const endCall = useCallback(() => {
    isCallActiveRef.current = false;
    turnIdRef.current += 1;
    clearAllTimers();
    abortRecognizer();
    stopSpeaking();

    setIsCallActive(false);
    setCallState("idle");
    setSpeakingPhase(null);
    setNoSpeechHint(null);
  }, [abortRecognizer, clearAllTimers]);

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
      const list = levelPromptsRef.current;
      const prompt = list[promptIndexRef.current % Math.max(1, list.length)];
      if (prompt) {
        noSpeechRetriesRef.current = 0;
        openMicForPrompt(prompt);
      }
    }
  }, [abortRecognizer, openMicForPrompt]);

  const retryListening = useCallback(() => {
    const list = levelPromptsRef.current;
    const prompt = list[promptIndexRef.current % Math.max(1, list.length)];
    if (!prompt) return;

    if (!isCallActiveRef.current) {
      isCallActiveRef.current = true;
      setIsCallActive(true);
    }
    if (isMutedRef.current) {
      isMutedRef.current = false;
      setIsMuted(false);
    }

    noSpeechRetriesRef.current = 0;
    setEvaluation(null);
    openMicForPrompt(prompt);
  }, [openMicForPrompt]);

  const replayModel = useCallback(() => {
    const list = levelPromptsRef.current;
    const prompt = list[promptIndexRef.current % Math.max(1, list.length)];
    if (!prompt) return;

    if (!isCallActiveRef.current) {
      isCallActiveRef.current = true;
      setIsCallActive(true);
    }
    speakPromptAndListen(prompt);
  }, [speakPromptAndListen]);

  const nextPrompt = useCallback(() => {
    const list = levelPromptsRef.current;
    if (list.length === 0) return;

    const nextIdx = (promptIndexRef.current + 1) % list.length;
    promptIndexRef.current = nextIdx;
    setPromptIndex(nextIdx);
    setLiveTranscript("");
    setEvaluation(null);
    setErrorMsg(null);
    setNoSpeechHint(null);

    if (isCallActiveRef.current) {
      speakPromptAndListen(list[nextIdx]);
    }
  }, [speakPromptAndListen]);

  const selectLevel = useCallback(
    (newLevel: "HSK1" | "HSK3" | "HSK5") => {
      const allowed: HSKLevel[] =
        newLevel === "HSK1"
          ? ["HSK0", "HSK1", "HSK2"]
          : newLevel === "HSK3"
          ? ["HSK2", "HSK3", "HSK4"]
          : ["HSK4", "HSK5", "HSK6"];
      const nextList = VOICE_CALL_PROMPTS.filter((p) => allowed.includes(p.level));
      levelPromptsRef.current = nextList;
      promptIndexRef.current = 0;
      setPromptIndex(0);
      setLiveTranscript("");
      setEvaluation(null);
      setErrorMsg(null);
      setNoSpeechHint(null);

      if (isCallActiveRef.current && nextList[0]) {
        speakPromptAndListen(nextList[0]);
      }
    },
    [speakPromptAndListen]
  );

  const simulateAttempt = useCallback(
    (quality: "good" | "partial") => {
      const list = levelPromptsRef.current;
      const prompt = list[promptIndexRef.current % Math.max(1, list.length)];
      if (!prompt) return;

      if (!isCallActiveRef.current) {
        isCallActiveRef.current = true;
        setIsCallActive(true);
      }

      let sample = prompt.targetZh;
      if (quality === "partial") {
        sample = prompt.targetZh.slice(0, Math.max(2, Math.floor(prompt.targetZh.length * 0.6)));
      }

      setLiveTranscript(sample);
      evaluateAndRespond(sample, prompt);
    },
    [evaluateAndRespond]
  );

  return {
    callState,
    isCallActive,
    isMuted,
    currentPrompt,
    promptIndex,
    totalPromptsInLevel: levelPrompts.length,
    liveTranscript,
    evaluation,
    errorMsg,
    noSpeechHint,
    speechSupported,
    speakingPhase,
    practicedCount,
    avgAccuracy,
    startCall,
    endCall,
    toggleMute,
    retryListening,
    replayModel,
    nextPrompt,
    selectLevel,
    simulateAttempt,
  };
}
