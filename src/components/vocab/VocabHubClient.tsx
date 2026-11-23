"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  BookOpen,
  Brain,
  CheckCircle2,
  Eye,
  EyeOff,
  FolderHeart,
  Layers,
  MessageSquareQuote,
  Network,
  PenTool,
  Plus,
  Sparkles,
  Trash2,
  Volume2,
  X,
} from "lucide-react";
import type { VocabItem } from "@/types";
import * as vocabDataModule from "@/data/chinese/vocab";
import { EXPANDED_VOCAB } from "@/data/chinese/vocab-expanded";
import * as themesDataModule from "@/data/vocab-themes";
import { PHRASE_THEMES } from "@/data/phrases";
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import { getResourcesByCategory } from "@/data/resources";
import { speakChinese } from "@/lib/speech";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  createDefaultSRSData,
  deleteCustomVocabSet,
  getCustomVocab,
  getCustomVocabSets,
  getMistakes,
  getSRSOverrides,
  getUserProgress,
  resolveMistake,
  subscribeStorageUpdates,
  type CustomVocabSet,
  type MistakeItem,
} from "@/lib/storage";
import {
  CustomVocabSetModal,
  getCustomSetIconComponent,
} from "./CustomVocabSetModal";
import {
  VocabMindMap,
  type MindMapThemeItem,
  type MindMapWordItem,
} from "./VocabMindMap";
import { VocabVault } from "./VocabVault";
import { FlashcardDeck } from "@/components/wortschatz/FlashcardDeck";
import { VocabQuiz } from "@/components/wortschatz/VocabQuiz";
import { AddVocabModal } from "@/components/wortschatz/AddVocabModal";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";

type MainMode = "themes" | "mysets" | "phrases" | "dictionary" | "mistakes";
type ThemeStudyStyle = "mindmap" | "flashcards";

const FALLBACK_THEMES: MindMapThemeItem[] = [
  {
    id: "greeting",
    titleVi: "Chào hỏi & Giao tiếp",
    titleZh: "日常问候与交际",
    titlePinyin: "Rìcháng wènhòu yǔ jiāojì",
    levelRange: "HSK 0 – HSK 3",
    descriptionVi: "Chào hỏi lịch sự, làm quen đối tác và cảm ơn trong giao tiếp hằng ngày.",
    branches: [
      {
        id: "gr-basic",
        labelVi: "Chào hỏi cơ bản",
        labelZh: "问候",
        words: [
          {
            id: "fb-w1",
            hanzi: "你好",
            pinyin: "nǐ hǎo",
            radical: "亻 (Nhân đứng)",
            strokeCount: 13,
            partOfSpeech: "Cụm từ",
            meaningVi: "Xin chào",
            level: "HSK0",
            exampleZh: "你好，很高兴认识你！",
            examplePinyin: "Nǐ hǎo, hěn gāoxìng rènshi nǐ!",
            exampleVi: "Xin chào, rất vui được làm quen với bạn!",
          },
          {
            id: "fb-w2",
            hanzi: "谢谢",
            pinyin: "xièxie",
            radical: "讠 (Ngôn)",
            strokeCount: 24,
            partOfSpeech: "Động từ",
            meaningVi: "Cảm ơn",
            level: "HSK1",
            exampleZh: "非常感谢您的支持，谢谢！",
            examplePinyin: "Fēicháng gǎnxiè nín de zhīchí, xièxie!",
            exampleVi: "Vô cùng cảm ơn sự ủng hộ của Ngài!",
          },
          {
            id: "fb-w3",
            hanzi: "合作",
            pinyin: "hézuò",
            radical: "口 (Khẩu)",
            strokeCount: 12,
            partOfSpeech: "Động từ / Danh từ",
            meaningVi: "Hợp tác",
            level: "HSK4",
            exampleZh: "祝我们合作愉快！",
            examplePinyin: "Zhù wǒmen hézuò yúkuài!",
            exampleVi: "Chúc chúng ta hợp tác vui vẻ!",
          },
          {
            id: "fb-w4",
            hanzi: "订单",
            pinyin: "dìngdān",
            radical: "讠 (Ngôn)",
            strokeCount: 12,
            partOfSpeech: "Danh từ",
            meaningVi: "Đơn đặt hàng",
            level: "HSK4",
            exampleZh: "客户今天确认了新的订单。",
            examplePinyin: "Kèhù jīntiān quèrèn le xīn de dìngdān.",
            exampleVi: "Khách hàng hôm nay đã xác nhận đơn hàng mới.",
          },
        ],
      },
    ],
  },
];

function getThemesSafely(): MindMapThemeItem[] {
  const mod = themesDataModule as unknown as {
    VOCAB_THEMES?: MindMapThemeItem[];
  };
  if (Array.isArray(mod.VOCAB_THEMES) && mod.VOCAB_THEMES.length > 0) {
    return mod.VOCAB_THEMES;
  }
  return FALLBACK_THEMES;
}

function getAllThemeWordsSafely(
  themes: MindMapThemeItem[]
): (MindMapWordItem & { themeTitleVi: string })[] {
  const mod = themesDataModule as unknown as {
    ALL_THEME_WORDS?: (MindMapWordItem & { themeTitleVi?: string })[];
  };
  if (Array.isArray(mod.ALL_THEME_WORDS) && mod.ALL_THEME_WORDS.length > 0) {
    return mod.ALL_THEME_WORDS.map((w) => ({
      ...w,
      themeTitleVi: w.themeTitleVi ?? "Chủ đề Mind Map",
    }));
  }
  return themes.flatMap((t) =>
    t.branches.flatMap((b) =>
      b.words.map((w) => ({
        ...w,
        themeTitleVi: t.titleVi,
      }))
    )
  );
}

function getCuratedVocabSafely(): VocabItem[] {
  const mod = vocabDataModule as unknown as {
    CURATED_VOCAB?: VocabItem[];
  };
  if (Array.isArray(mod.CURATED_VOCAB) && mod.CURATED_VOCAB.length > 0) {
    return mod.CURATED_VOCAB;
  }
  return [];
}

export function VocabHubClient() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const themes = useMemo(() => getThemesSafely(), []);
  const [mainMode, setMainMode] = useState<MainMode>(() => {
    if (tabParam === "mistakes") return "mistakes";
    if (tabParam === "mysets") return "mysets";
    if (tabParam === "phrases") return "phrases";
    if (tabParam === "dictionary" || tabParam === "quiz") return "dictionary";
    return "themes";
  });
  const [selectedThemeId, setSelectedThemeId] = useState<string>(
    themes[0]?.id ?? "greeting"
  );
  const [themeStyle, setThemeStyle] = useState<ThemeStudyStyle>(() =>
    tabParam === "srs" ? "flashcards" : "mindmap"
  );
  const [customVocab, setCustomVocab] = useState<VocabItem[]>([]);
  const [customSets, setCustomSets] = useState<CustomVocabSet[]>([]);
  const [mistakes, setMistakes] = useState<MistakeItem[]>([]);
  const [isCustomSetModalOpen, setIsCustomSetModalOpen] = useState(false);
  const [activeCustomSetFlashcards, setActiveCustomSetFlashcards] =
    useState<CustomVocabSet | null>(null);
  const [selectedPhraseThemeId, setSelectedPhraseThemeId] = useState<string>(
    PHRASE_THEMES[0]?.id ?? "chao-hoi-lam-quen"
  );
  const [phraseLevelFilter, setPhraseLevelFilter] = useState<
    "ALL" | "HSK0-6" | "HSK7-9"
  >("ALL");
  const [phraseRate, setPhraseRate] = useState<0.85 | 1.0>(1.0);
  const [showPhrasePinyin, setShowPhrasePinyin] = useState(true);
  const [dictSubTab, setDictSubTab] = useState<"vault" | "quiz">("vault");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [srsOverrides, setSrsOverrides] = useState<
    Record<string, VocabItem["srsData"]>
  >({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [reviewOverrideItems, setReviewOverrideItems] = useState<
    VocabItem[] | null
  >(null);

  // Active word for "Luyện viết chấm nét (米字格) & Đặt 2 câu hoàn chỉnh"
  const [activeWritingWord, setActiveWritingWord] = useState<VocabItem | null>(
    null
  );
  const [modalWritingWord, setModalWritingWord] = useState<VocabItem | null>(
    null
  );

  const loadData = useCallback(() => {
    setCustomVocab(getCustomVocab());
    setCustomSets(getCustomVocabSets());
    setSavedIds(getUserProgress().savedVocabIds);
    setSrsOverrides(getSRSOverrides());
    setMistakes(getMistakes());
  }, []);

  useEffect(() => {
    loadData();
    return subscribeStorageUpdates(loadData);
  }, [loadData]);

  useEffect(() => {
    if (!tabParam) return;
    if (tabParam === "srs") {
      setReviewOverrideItems(null);
      setMainMode("themes");
      setThemeStyle("flashcards");
    } else if (tabParam === "mindmap") {
      setReviewOverrideItems(null);
      setMainMode("themes");
      setThemeStyle("mindmap");
    } else if (tabParam === "mistakes") {
      setReviewOverrideItems(null);
      setMainMode("mistakes");
    } else if (tabParam === "mysets") {
      setReviewOverrideItems(null);
      setMainMode("mysets");
    } else if (tabParam === "phrases") {
      setReviewOverrideItems(null);
      setMainMode("phrases");
    } else if (tabParam === "dictionary") {
      setReviewOverrideItems(null);
      setMainMode("dictionary");
      setDictSubTab("vault");
    } else if (tabParam === "quiz") {
      setReviewOverrideItems(null);
      setMainMode("dictionary");
      setDictSubTab("quiz");
    }
  }, [tabParam]);

  const themeVocabItems: VocabItem[] = useMemo(() => {
    const rawWords = getAllThemeWordsSafely(themes);
    return rawWords.map((w) => ({
      id: w.id,
      hanzi: w.hanzi,
      pinyin: w.pinyin,
      meaningVi: w.meaningVi,
      radical: w.radical || "一 (Bộ thủ)",
      strokeCount: w.strokeCount || w.hanzi.length * 6,
      partOfSpeech: w.partOfSpeech || "Từ vựng",
      level: w.level,
      topic: w.themeTitleVi,
      exampleZh: w.exampleZh,
      examplePinyin: w.examplePinyin ?? "",
      exampleVi: w.exampleVi,
      isCustom: false,
      srsData: srsOverrides[w.id] ?? createDefaultSRSData(),
    }));
  }, [themes, srsOverrides]);

  const vocabResources = useMemo(
    () => getResourcesByCategory(["vocab", "visual"]),
    []
  );

  const unifiedVocab: VocabItem[] = useMemo(() => {
    const map = new Map<string, VocabItem>();
    const seenHanzi = new Set<string>();
    const curated = getCuratedVocabSafely();
    for (const item of [...curated, ...themeVocabItems, ...EXPANDED_VOCAB]) {
      if (seenHanzi.has(item.hanzi)) continue;
      seenHanzi.add(item.hanzi);
      map.set(item.id, {
        ...item,
        srsData: srsOverrides[item.id] ?? item.srsData,
      });
    }
    for (const c of customVocab) {
      map.set(c.id, {
        ...c,
        isCustom: true,
        srsData: srsOverrides[c.id] ?? c.srsData,
      });
    }
    return Array.from(map.values());
  }, [themeVocabItems, customVocab, srsOverrides]);

  const activeTheme = useMemo(
    () => themes.find((t) => t.id === selectedThemeId) ?? themes[0],
    [themes, selectedThemeId]
  );

  const activeThemeDeck: VocabItem[] = useMemo(() => {
    if (!activeTheme) return unifiedVocab;
    const ids = new Set(
      activeTheme.branches.flatMap((b) => b.words.map((w) => w.id))
    );
    const filtered = unifiedVocab.filter((v) => ids.has(v.id));
    return filtered.length > 0 ? filtered : unifiedVocab;
  }, [activeTheme, unifiedVocab]);

  const handleReviewSaved = (items: VocabItem[]) => {
    setReviewOverrideItems(items);
    setMainMode("themes");
    setThemeStyle("flashcards");
  };

  const handleOpenWritingPracticeModal = (item: VocabItem) => {
    setActiveWritingWord(item);
    setModalWritingWord(item);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
            词汇与汉字 · Chuẩn HSK 0 – HSK 9
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
            Trung tâm Từ vựng &amp; Viết chữ Hán
          </h1>
        </div>

        {/* 4-Mode layoutId Switcher */}
        <div className="inline-flex flex-wrap self-start rounded-xl border border-[#E5E5E0] bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:self-auto">
          {(
            [
              { id: "themes", label: "Chủ đề & Mind Map", icon: Network },
              { id: "mysets", label: "Bộ từ của tôi", icon: FolderHeart },
              {
                id: "phrases",
                label: "Mẫu câu giao tiếp",
                icon: MessageSquareQuote,
              },
              {
                id: "dictionary",
                label: "Từ điển & Trắc nghiệm",
                icon: BookOpen,
              },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = mainMode === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setReviewOverrideItems(null);
                  setMainMode(tab.id);
                }}
                className={`relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm cursor-pointer ${
                  active ? "text-white" : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="vocab-main-tab"
                    transition={TACTILE_SPRING}
                    className="absolute inset-0 rounded-lg bg-[#292524]"
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Google Drive Resources Banner */}
      <ResourceBanner
        resources={vocabResources}
        heading="Tài liệu Google Drive: Từ vựng HSK 1–6, Công xưởng Giày da & Học qua hình ảnh"
        compact
      />

      {/* Mode Content */}
      <AnimatePresence mode="wait">
        {mainMode === "themes" && activeTheme && (
          <motion.div
            key="mode-themes"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="space-y-5"
          >
            {/* Theme Selector Pills + MindMap / Flashcard Toggle */}
            <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
              <div className="flex flex-wrap gap-2">
                {themes.map((t) => {
                  const active =
                    t.id === selectedThemeId && !reviewOverrideItems;
                  return (
                    <motion.button
                      key={t.id}
                      type="button"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      transition={TACTILE_SPRING}
                      onClick={() => {
                        setReviewOverrideItems(null);
                        setSelectedThemeId(t.id);
                      }}
                      className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm cursor-pointer ${
                        active
                          ? "border-[#292524] bg-[#292524] text-white shadow-xs"
                          : "border-[#E5E5E0] bg-white text-[#4A4540] hover:border-[#6B655E]"
                      }`}
                    >
                      {t.titleVi}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mind Map vs Flashcards Toggle */}
              <div className="inline-flex shrink-0 self-start rounded-xl border border-[#E5E5E0] bg-white p-1">
                {(
                  [
                    { id: "mindmap", label: "Sơ đồ tư duy", icon: Network },
                    {
                      id: "flashcards",
                      label: "Flashcard 3D SRS",
                      icon: Layers,
                    },
                  ] as const
                ).map((s) => {
                  const Icon = s.icon;
                  const active = themeStyle === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setThemeStyle(s.id)}
                      className={`relative inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        active
                          ? "text-[#262626]"
                          : "text-[#737373] hover:text-[#262626]"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="theme-study-style"
                          transition={TACTILE_SPRING}
                          className="absolute inset-0 rounded-lg border border-[#E5E5E0] bg-[#F2F2F0]"
                        />
                      )}
                      <Icon className="relative z-10 h-3.5 w-3.5" />
                      <span className="relative z-10">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {reviewOverrideItems && (
              <div className="flex items-center justify-between rounded-xl border border-[#D6D3CE] bg-[#FAF9F7] px-4 py-2.5 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-2 font-medium text-[#262626]">
                  <Sparkles className="h-4 w-4 text-[#6B655E]" />
                  Đang ôn tập {reviewOverrideItems.length} từ chữ Hán bạn đã lưu
                </span>
                <button
                  type="button"
                  onClick={() => setReviewOverrideItems(null)}
                  className="text-xs font-medium text-[#6B655E] hover:underline cursor-pointer"
                >
                  Quay lại chủ đề
                </button>
              </div>
            )}

            {themeStyle === "mindmap" && !reviewOverrideItems ? (
              <VocabMindMap
                key={activeTheme.id}
                theme={activeTheme}
                savedIds={savedIds}
                onSavedChange={loadData}
                onPracticeWord={handleOpenWritingPracticeModal}
              />
            ) : (
              <FlashcardDeck
                items={reviewOverrideItems ?? activeThemeDeck}
                onRated={loadData}
                onPracticeWord={handleOpenWritingPracticeModal}
              />
            )}
          </motion.div>
        )}

        {mainMode === "mysets" && (
          <motion.div
            key="mode-mysets"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="space-y-5"
          >
            {activeCustomSetFlashcards ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-[#E5E5E0] bg-white px-4 py-3">
                  <span className="text-sm font-semibold text-[#262626]">
                    Flashcard 3D SRS · {activeCustomSetFlashcards.name} (
                    {activeCustomSetFlashcards.items.length} từ)
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCustomSetFlashcards(null)}
                    className="text-xs font-medium text-[#6B655E] hover:underline cursor-pointer"
                  >
                    Quay lại Bộ từ của tôi
                  </button>
                </div>
                <FlashcardDeck
                  items={activeCustomSetFlashcards.items}
                  onRated={loadData}
                  onPracticeWord={handleOpenWritingPracticeModal}
                />
              </div>
            ) : (
              <>
                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-base font-bold text-[#262626]">
                      Bộ từ vựng cá nhân của bạn
                    </h2>
                    <p className="text-xs text-[#6B655E]">
                      Tạo bộ từ riêng bằng cách dán hàng loạt từ Excel/văn bản, sau đó học Flashcard 3D SRS hoặc luyện viết chấm nét.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCustomSetModalOpen(true)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#262626] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3a3a3a] cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    Tạo bộ từ (Dán hàng loạt)
                  </button>
                </div>

                {customSets.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-[#E5E5E0] bg-white/70 p-10 text-center">
                    <FolderHeart className="mx-auto h-9 w-9 text-[#6B655E]/60" />
                    <p className="mt-3 text-sm font-semibold text-[#262626]">
                      Chưa có bộ từ cá nhân nào
                    </p>
                    <p className="mt-1 text-xs text-[#6B655E]">
                      Bấm &ldquo;+ Tạo bộ từ (Dán hàng loạt)&rdquo; để tạo bộ từ đầu tiên của bạn.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {customSets.map((set) => {
                      const SetIcon = getCustomSetIconComponent(set.icon);
                      return (
                        <div
                          key={set.id}
                          className="flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] text-[#262626]">
                                <SetIcon className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="text-sm font-bold text-[#262626]">
                                  {set.name}
                                </h3>
                                <p className="text-xs text-[#6B655E]">
                                  {set.items.length} từ · {set.level === "HSK7" ? "HSK 7–9" : set.level}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              title="Xóa bộ từ"
                              onClick={() => {
                                deleteCustomVocabSet(set.id);
                                loadData();
                              }}
                              className="rounded-lg border border-[#E5E5E0] p-1.5 text-[#6B655E] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveCustomSetFlashcards(set)}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-[#262626] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#3a3a3a] cursor-pointer"
                            >
                              <Layers className="h-3.5 w-3.5" />
                              Flashcard 3D SRS
                            </button>
                            {set.items[0] && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleOpenWritingPracticeModal(set.items[0])
                                }
                                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] px-3 py-2 text-xs font-semibold text-[#262626] transition hover:border-[#6B655E] cursor-pointer"
                              >
                                <PenTool className="h-3.5 w-3.5" />
                                Luyện viết chấm nét 米字格 &amp; Đặt 2 câu
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}

        {mainMode === "phrases" && (
          <motion.div
            key="mode-phrases"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="space-y-5"
          >
            {/* Controls bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E5E5E0] bg-white p-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    { id: "ALL", label: "Tất cả cấp độ" },
                    { id: "HSK0-6", label: "HSK 0–6" },
                    { id: "HSK7-9", label: "HSK 7–9" },
                  ] as const
                ).map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setPhraseLevelFilter(lvl.id)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                      phraseLevelFilter === lvl.id
                        ? "border-[#262626] bg-[#262626] text-white"
                        : "border-[#E5E5E0] bg-[#F2F2F0]/60 text-[#6B655E] hover:text-[#262626]"
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setPhraseRate((r) => (r === 1.0 ? 0.85 : 1.0))
                  }
                  className="rounded-lg border border-[#E5E5E0] bg-[#F2F2F0]/60 px-3 py-1.5 text-xs font-semibold text-[#262626] transition hover:border-[#6B655E] cursor-pointer"
                >
                  Tốc độ: {phraseRate === 0.85 ? "0.85x" : "1.0x"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowPhrasePinyin((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-[#F2F2F0]/60 px-3 py-1.5 text-xs font-medium text-[#262626] transition hover:border-[#6B655E] cursor-pointer"
                >
                  {showPhrasePinyin ? (
                    <Eye className="h-3.5 w-3.5" />
                  ) : (
                    <EyeOff className="h-3.5 w-3.5" />
                  )}
                  Pinyin
                </button>
              </div>
            </div>

            {/* 12 Phrase Themes selector */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {PHRASE_THEMES.map((theme) => {
                const active = theme.id === selectedPhraseThemeId;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => setSelectedPhraseThemeId(theme.id)}
                    className={`shrink-0 rounded-xl border px-3.5 py-2 text-left transition cursor-pointer ${
                      active
                        ? "border-[#262626] bg-[#262626] text-white"
                        : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
                    }`}
                  >
                    <div className="text-xs font-bold">{theme.titleVi}</div>
                    <div
                      className={`text-[11px] ${
                        active ? "text-white/80" : "text-[#6B655E]"
                      }`}
                    >
                      {theme.titleZh}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Phrase Theme List */}
            {(() => {
              const activePhraseTheme =
                PHRASE_THEMES.find((t) => t.id === selectedPhraseThemeId) ??
                PHRASE_THEMES[0];
              if (!activePhraseTheme) return null;

              const filteredPhrases = activePhraseTheme.phrases.filter((p) => {
                if (phraseLevelFilter === "ALL") return true;
                if (phraseLevelFilter === "HSK7-9") return p.level === "HSK7";
                return p.level !== "HSK7";
              });

              return (
                <div className="space-y-3">
                  <div className="rounded-2xl border border-[#E5E5E0] bg-white p-4">
                    <h3 className="text-base font-bold text-[#262626]">
                      {activePhraseTheme.titleVi} ·{" "}
                      <span className="font-normal text-[#6B655E]">
                        {activePhraseTheme.titleZh}
                      </span>
                    </h3>
                    <p className="mt-1 text-xs text-[#6B655E]">
                      {activePhraseTheme.descriptionVi}
                    </p>
                  </div>

                  {filteredPhrases.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#E5E5E0] bg-white p-8 text-center text-xs text-[#6B655E]">
                      Không có mẫu câu nào ở bộ lọc cấp độ này.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {filteredPhrases.map((phrase) => (
                        <div
                          key={phrase.id}
                          className="rounded-2xl border border-[#E5E5E0] bg-white p-4 transition hover:border-[#6B655E]/60"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <div className="text-lg font-semibold text-[#262626]">
                                <InteractiveChineseText text={phrase.zh} />
                              </div>
                              {showPhrasePinyin && (
                                <p className="font-mono text-xs text-[#6B655E]">
                                  {phrase.pinyin}
                                </p>
                              )}
                              <p className="text-sm font-medium text-[#262626]">
                                {phrase.vi}
                              </p>
                              <p className="text-xs text-[#6B655E]">
                                {phrase.contextVi}
                              </p>
                            </div>

                            <div className="flex shrink-0 flex-col items-end gap-2">
                              <span className="rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-2 py-0.5 text-[10px] font-semibold text-[#6B655E]">
                                {phrase.level === "HSK7"
                                  ? "HSK 7–9"
                                  : phrase.level}
                              </span>
                              <button
                                type="button"
                                title="Nghe phát âm"
                                onClick={() =>
                                  speakChinese(phrase.zh, phraseRate)
                                }
                                className="rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] p-2 text-[#262626] transition hover:bg-[#262626] hover:text-white cursor-pointer"
                              >
                                <Volume2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        )}

        {mainMode === "dictionary" && (
          <motion.div
            key="mode-dictionary"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="space-y-5"
          >
            <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-white p-1">
              <button
                type="button"
                onClick={() => setDictSubTab("vault")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  dictSubTab === "vault"
                    ? "bg-[#262626] text-white"
                    : "text-[#6B655E] hover:text-[#262626]"
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                Từ điển &amp; Sổ từ
              </button>
              <button
                type="button"
                onClick={() => setDictSubTab("quiz")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  dictSubTab === "quiz"
                    ? "bg-[#262626] text-white"
                    : "text-[#6B655E] hover:text-[#262626]"
                }`}
              >
                <Brain className="h-3.5 w-3.5" />
                Trắc nghiệm từ vựng
              </button>
            </div>

            {dictSubTab === "vault" ? (
              <VocabVault
                allItems={unifiedVocab}
                savedIds={savedIds}
                onSavedChange={loadData}
                onOpenAddModal={() => setIsAddModalOpen(true)}
                onReviewSaved={handleReviewSaved}
                onPracticeWord={handleOpenWritingPracticeModal}
              />
            ) : (
              <VocabQuiz items={unifiedVocab} />
            )}
          </motion.div>
        )}

        {mainMode === "mistakes" && (
          <motion.div
            key="mode-mistakes"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="space-y-4"
          >
            <div className="flex flex-col justify-between gap-3 rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="flex items-center gap-2 text-base font-bold text-[#262626]">
                  <AlertCircle className="h-4 w-4 text-brand" />
                  <span>Lỗi cần ôn tập ({mistakes.length})</span>
                </h2>
                <p className="mt-0.5 text-xs text-[#6B655E]">
                  Xem lại các câu trả lời sai gần đây để ghi nhớ chắc chắn hơn, hoặc chuyển sang ôn thẻ Flashcard 3D SRS.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMainMode("themes");
                  setThemeStyle("flashcards");
                }}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#262626] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3a3a3a] cursor-pointer"
              >
                <Layers className="h-4 w-4" />
                Ôn Flashcard 3D SRS
              </button>
            </div>

            {mistakes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#E5E5E0] bg-white/80 p-10 text-center">
                <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-600/80" />
                <p className="mt-3 text-sm font-semibold text-[#262626]">
                  Bạn không có lỗi sai nào cần ôn!
                </p>
                <p className="mt-1 text-xs text-[#6B655E]">
                  Mỗi khi làm sai trong bài học, bài tập hoặc trắc nghiệm, lỗi sẽ được lưu tự động tại đây.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {mistakes.map((m) => (
                  <div
                    key={m.id}
                    className="rounded-2xl border border-[#E5E5E0] bg-white p-4 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0">
                        <span className="inline-block rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#6B655E]">
                          {m.source}
                        </span>
                        <p className="text-sm font-semibold text-[#262626]">
                          {m.prompt}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          resolveMistake(m.id);
                          loadData();
                        }}
                        className="inline-flex shrink-0 items-center gap-1 rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] px-3 py-1.5 text-xs font-semibold text-[#262626] transition hover:bg-emerald-600 hover:border-emerald-600 hover:text-white cursor-pointer"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Đã hiểu
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="rounded-xl bg-red-50/70 border border-red-100 px-3 py-2 text-red-800">
                        <span className="font-semibold">Bạn chọn: </span>
                        {m.userAnswer}
                      </div>
                      <div className="rounded-xl bg-emerald-50/70 border border-emerald-100 px-3 py-2 text-emerald-800">
                        <span className="font-semibold">Đáp án đúng: </span>
                        {m.correctAnswer}
                      </div>
                    </div>
                    {m.explanationVi && (
                      <p className="text-xs text-[#6B655E] leading-relaxed">
                        {m.explanationVi}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for instant "Luyện viết chấm nét (米字格) & Đặt 2 câu hoàn chỉnh" from MindMap / Flashcard / Vault */}
      <AnimatePresence>
        {modalWritingWord && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#292524]/45 p-4 backdrop-blur-xs"
            onClick={() => setModalWritingWord(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={TACTILE_SPRING}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0] p-5 sm:p-6 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                    Thực hành chuyên sâu Chữ Hán &amp; Đặt câu
                  </span>
                  <h3 className="text-xl font-bold text-[#262626]">
                    {modalWritingWord.hanzi} [{modalWritingWord.pinyin}] —{" "}
                    {modalWritingWord.meaningVi}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalWritingWord(null)}
                  className="rounded-xl bg-white p-2 text-[#737373] transition-colors hover:bg-[#E5E5E0] hover:text-[#262626] cursor-pointer"
                  aria-label="Đóng"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <HanziStrokeCanvas
                hanzi={modalWritingWord.hanzi}
                pinyin={modalWritingWord.pinyin}
                meaningVi={modalWritingWord.meaningVi}
              />

              <TwoSentenceBuilder
                targetWord={modalWritingWord.hanzi}
                vocabId={modalWritingWord.id}
                pinyin={modalWritingWord.pinyin}
                meaningVi={modalWritingWord.meaningVi}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AddVocabModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdded={() => {
          loadData();
          setIsAddModalOpen(false);
        }}
      />

      <CustomVocabSetModal
        isOpen={isCustomSetModalOpen}
        onClose={() => setIsCustomSetModalOpen(false)}
        onCreated={() => loadData()}
      />
    </div>
  );
}
