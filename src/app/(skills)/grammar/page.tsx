"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Languages,
  RotateCcw,
  Volume2,
  XCircle,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  SkillFocusLayout,
  type SkillFocusLessonItem,
} from "@/components/ui/SkillFocusLayout";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";
import * as grammarModule from "@/data/grammar";
import type { GrammarTopic } from "@/data/grammar";
import { loadGrammarExtraByFilter } from "@/data/skills/grammar";
import { speakChinese } from "@/lib/speech";
import { addXP, recordMistake } from "@/lib/storage";
import type { HSKLevel, SubDifficulty } from "@/types";

type GrammarCenterTab = "theory" | "practice" | "reference";
type QuickTableTab =
  | "radicals"
  | "tone-sandhi"
  | "classifiers"
  | "complements"
  | "ba-bei";

const RADICAL_50_LIST = [
  { r: "亻", name: "Nhân đứng", meaning: "Con người", ex: "你, 他, 们, 作, 休" },
  { r: "口", name: "Khẩu", meaning: "Miệng, lời nói, ăn uống", ex: "吃, 喝, 叫, 吗, 呢" },
  { r: "氵", name: "Ba chấm thủy", meaning: "Nước, chất lỏng", ex: "汉, 河, 海, 洗, 游" },
  { r: "扌", name: "Tài gảy (Thủ)", meaning: "Động tác của tay", ex: "打, 找, 把, 拿, 提" },
  { r: "心 / 忄", name: "Tâm", meaning: "Trái tim, tình cảm, tâm lý", ex: "想, 您, 忙, 快, 情" },
  { r: "讠 / 言", name: "Ngôn", meaning: "Lời nói, ngôn ngữ", ex: "话, 说, 请, 谢, 语" },
  { r: "女", name: "Nữ", meaning: "Phụ nữ, gia đình", ex: "好, 她, 妈, 姐, 妹" },
  { r: "木", name: "Mộc", meaning: "Cây cối, gỗ", ex: "林, 本, 桌, 椅, 校" },
  { r: "日", name: "Nhật", meaning: "Mặt trời, thời gian, ngày", ex: "明, 时, 早, 晚, 昨" },
  { r: "月", name: "Nguyệt / Nhục", meaning: "Mặt trăng, tháng, cơ thể", ex: "朋, 期, 服, 脑, 胖" },
  { r: "宀", name: "Miên", meaning: "Mái nhà, nơi ở", ex: "家, 字, 安, 室, 客" },
  { r: "辶", name: "Sước", meaning: "Đi lại, di chuyển", ex: "这, 那, 远, 近, 送" },
  { r: "钅 / 金", name: "Kim", meaning: "Kim loại, tiền bạc", ex: "钱, 银, 铁, 钟, 钢" },
  { r: "贝", name: "Bối", meaning: "Tiền tài, thương mại", ex: "买, 贵, 货, 贸, 资" },
  { r: "火 / 灬", name: "Hỏa", meaning: "Lửa, nhiệt độ, nấu nướng", ex: "热, 烧, 烤, 点, 照" },
  { r: "土", name: "Thổ", meaning: "Đất đai, địa điểm", ex: "在, 地, 场, 城, 坐" },
  { r: "艹", name: "Thảo đầu", meaning: "Cỏ cây, hoa lá", ex: "茶, 花, 草, 菜, 药" },
  { r: "饣 / 食", name: "Thực", meaning: "Thức ăn, ẩm thực", ex: "饭, 饿, 馆, 饺, 饼" },
  { r: "目", name: "Mục", meaning: "Đôi mắt, nhìn", ex: "看, 眼, 睡, 睛, 盯" },
  { r: "足 / ⻊", name: "Túc", meaning: "Bàn chân, chạy nhảy", ex: "跑, 路, 跳, 跟, 踢" },
  { r: "车", name: "Xa", meaning: "Xe cộ, phương tiện", ex: "辆, 轻, 较, 转, 输" },
  { r: "门", name: "Môn", meaning: "Cánh cửa, cổng", ex: "问, 间, 闻, 闭, 闲" },
  { r: "雨", name: "Vũ", meaning: "Mưa, thời tiết", ex: "雪, 零, 雷, 需, 雾" },
  { r: "疒", name: "Nạch", meaning: "Bệnh tật, y tế", ex: "病, 疼, 痛, 瘦, 疗" },
  { r: "礻", name: "Thị", meaning: "Lễ nghi, phúc lộc", ex: "祝, 福, 礼, 社, 视" },
];

const TONE_SANDHI_ROWS = [
  {
    rule: "Hai thanh 3 đi liền (3 + 3 → 2 + 3)",
    condition: "Khi 2 âm tiết thanh 3 đứng sát nhau",
    change: "Âm tiết đầu đọc thành Thanh 2 (lên giọng)",
    example: "你好 (nǐ hǎo → ní hǎo) · 可以 (kěyǐ → kéyǐ) · 水果 (shuǐguǒ → shuíguǒ)",
  },
  {
    rule: "Ba thanh 3 đi liền (3 + 3 + 3)",
    condition: "Nhóm từ đôi + đơn hoặc đơn + đôi",
    change: "Đọc thành (2 + 2 + 3) hoặc (3 + 2 + 3) tùy nhịp ngữ pháp",
    example: "展览馆 (zhǎnlǎnguǎn → zhánlánguǎn) · 我很好 (wǒ hěn hǎo → wǒ hén hǎo)",
  },
  {
    rule: "Biến điệu của 不 (bù)",
    condition: "Khi 不 đứng trước âm tiết mang Thanh 4",
    change: "不 đọc biến điệu thành Thanh 2 (bú)",
    example: "不是 (bú shì) · 不客气 (bú kèqi) · 不去 (bú qù) · 不对 (bú duì)",
  },
  {
    rule: "Biến điệu của 一 (yī) — Trường hợp 1",
    condition: "Khi 一 đứng trước âm tiết mang Thanh 4",
    change: "一 đọc biến điệu thành Thanh 2 (yí)",
    example: "一个 (yí gè) · 一下 (yíxià) · 一样 (yíyàng) · 一定 (yídìng)",
  },
  {
    rule: "Biến điệu của 一 (yī) — Trường hợp 2",
    condition: "Khi 一 đứng trước Thanh 1, Thanh 2, Thanh 3",
    change: "一 đọc biến điệu thành Thanh 4 (yì)",
    example: "一天 (yì tiān) · 一年 (yì nián) · 一起 (yìqǐ) · 一百 (yìbǎi)",
  },
  {
    rule: "Giữ nguyên Thanh 1 của 一 (yī)",
    condition: "Khi đếm số thứ tự, ngày tháng, số điện thoại hoặc đứng cuối từ",
    change: "Giữ nguyên Thanh 1 (yī)",
    example: "第一 (dì-yī) · 一月 (yīyuè) · 唯一 (wéiyī) · 统一 (tǒngyī)",
  },
];

const CLASSIFIER_ROWS = [
  { mw: "个 (gè)", usage: "Lượng từ phổ thông nhất cho người, vật, khái niệm", ex: "一个人, 三个问题, 这个国家" },
  { mw: "位 (wèi)", usage: "Dùng kính trọng cho người (khách hàng, thầy cô)", ex: "两位老师, 这位客户, 各位同事" },
  { mw: "本 (běn)", usage: "Sách, vở, từ điển, tạp chí đóng quyển", ex: "一本书, 两本词典, 三本杂志" },
  { mw: "件 (jiàn)", usage: "Áo, hành lý, sự việc, kiện hàng thương mại", ex: "一件衬衫, 两件行李, 这件事, 五千件货" },
  { mw: "张 (zhāng)", usage: "Vật có bề mặt phẳng: giấy, bàn, vé, ảnh, giường", ex: "一张票, 两张桌子, 一张身份证" },
  { mw: "条 (tiáo)", usage: "Vật dài, uốn lượn: quần, váy, sông, đường, cá, tin nhắn", ex: "一条裤子, 一条河, 两条微信消息" },
  { mw: "份 (fèn)", usage: "Hợp đồng, báo cáo, tài liệu, suất ăn, công việc", ex: "一份合同, 两份报价单, 一份工作" },
  { mw: "家 (jiā)", usage: "Công ty, nhà máy, ngân hàng, nhà hàng, khách sạn", ex: "一家外贸公司, 两家工厂, 三家银行" },
  { mw: "台 (tái)", usage: "Máy móc, thiết bị điện tử, máy tính", ex: "一台电脑, 两台机器, 一台服务器" },
  { mw: "批 (pī)", usage: "Lô hàng hóa, đợt sản phẩm xuất nhập khẩu", ex: "一批货物, 第一批订单, 这批样品" },
];

const COMPLEMENT_ROWS = [
  {
    type: "Bổ ngữ kết quả (结果补语)",
    formula: "Động từ + 完 / 好 / 懂 / 见 / 到 / 给 / 在",
    meaningVi: "Biểu thị kết quả đạt được của hành động",
    example: "听懂了 (nghe hiểu rồi) · 写完报告 (viết xong báo cáo) · 收到货 (nhận được hàng)",
  },
  {
    type: "Bổ ngữ trạng thái / mức độ (状态补语)",
    formula: "Động từ + 得 + (很 / 非常) + Tính từ",
    meaningVi: "Đánh giá một hành động diễn ra như thế nào",
    example: "他说汉语说得很流利。(Anh ấy nói tiếng Trung rất lưu loát.)",
  },
  {
    type: "Bổ ngữ xu hướng (趋向补语)",
    formula: "Động từ + 来 / 去 hoặc 上/下/进/出/回/过/起 + 来/去",
    meaningVi: "Hướng di chuyển tiến gần (来) hoặc rời xa (去) người nói, và nghĩa bóng",
    example: "走进来 (bước vào đây) · 发过去 (gửi sang bên đó) · 坚持下去 (kiên trì tiếp tục)",
  },
  {
    type: "Bổ ngữ khả năng (可能补语)",
    formula: "Động từ + 得 / 不 + Bổ ngữ kết quả/xu hướng",
    meaningVi: "Có đủ điều kiện/năng lực để đạt kết quả hay không",
    example: "看得懂 (đọc hiểu được) · 听不清楚 (nghe không rõ) · 买不到票 (không mua được vé)",
  },
  {
    type: "Phân biệt 3 trợ từ kết cấu 的 / 地 / 得",
    formula: "Định ngữ + 的 + Danh từ | Trạng ngữ + 地 + Động từ | Động từ + 得 + Bổ ngữ",
    meaningVi: "Ba chữ đồng âm 'de' cốt lõi nhất trong ngữ pháp HSK",
    example: "优秀的员工 (nhân viên ưu tú) · 认真地检查 (kiểm tra nghiêm túc) · 做得很好 (làm rất tốt)",
  },
];

const BA_BEI_ROWS = [
  {
    structure: "Câu chữ 把 (把字句 — Chủ động xử lý)",
    formula: "Chủ ngữ + (不/没) + 把 + Tân ngữ xác định + Động từ + Thành phần khác (了/着/Bổ ngữ)",
    usageVi:
      "Nhấn mạnh chủ ngữ tác động làm thay đổi vị trí hoặc trạng thái của một sự vật xác định. Phó từ phủ định (不/没) và động từ năng nguyện (想/要/能) đặt TRƯỚC chữ 把.",
    exampleZh: "请把那份外贸合同发到我的邮箱。",
    examplePinyin: "Qǐng bǎ nà fèn wàimào hétóng fā dào wǒ de yóuxiāng.",
    exampleVi: "Làm ơn gửi bản hợp đồng ngoại thương đó vào email của tôi.",
  },
  {
    structure: "Câu bị động chữ 被 (被字句 — Bị / Được)",
    formula: "Chủ ngữ (Bị tác động) + (不/没) + 被 (+ Tác nhân) + Động từ + Thành phần khác",
    usageVi:
      "Biểu thị chủ ngữ chịu sự tác động của người/sự việc khác. Trong khẩu ngữ có thể thay 被 bằng 叫 hoặc 让 nhưng sau 叫/让 bắt buộc có tác nhân.",
    exampleZh: "那批货物已经被海关检查过了。",
    examplePinyin: "Nà pī huòwù yǐjīng bèi hǎiguān jiǎnchá guò le.",
    exampleVi: "Lô hàng hóa đó đã được hải quan kiểm tra qua rồi.",
  },
];

interface NormalizedGrammarQuestion {
  id: string;
  promptVi: string;
  promptZh?: string;
  options: string[];
  correctAnswer: string;
  explanationVi: string;
}

interface NormalizedGrammarTopic {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  titleVi: string;
  titleZh: string;
  formula: string;
  explanationVi: string;
  examples: { zh: string; pinyin: string; vi: string }[];
  warningsVi: string[];
  exercises: NormalizedGrammarQuestion[];
}

const HSK_SORT_ORDER: HSKLevel[] = [
  "HSK0",
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7",
  "HSK8",
  "HSK9",
];

export default function GrammarPage() {
  const [selectedLevel, setSelectedLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK0");
  const [selectedTopicId, setSelectedTopicId] = useState<string>("");
  const [centerTab, setCenterTab] = useState<GrammarCenterTab>("theory");
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activeTableTab, setActiveTableTab] = useState<QuickTableTab>("radicals");
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [extraTopics, setExtraTopics] = useState<GrammarTopic[]>([]);

  useEffect(() => {
    let cancelled = false;
    loadGrammarExtraByFilter(selectedLevel)
      .then((loaded) => {
        if (!cancelled) {
          setExtraTopics(loaded);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setExtraTopics([]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [selectedLevel]);

  const baseTopics = useMemo<NormalizedGrammarTopic[]>(() => {
    const raw =
      (
        grammarModule as unknown as {
          GRAMMAR_TOPICS?: Array<Record<string, unknown>>;
        }
      ).GRAMMAR_TOPICS ?? [];
    return raw.map((t, idx) => {
      const warningsRaw = t.warningsVi ?? t.commonMistakeVi;
      const warningsVi = Array.isArray(warningsRaw)
        ? (warningsRaw as string[])
        : typeof warningsRaw === "string" && warningsRaw
          ? [warningsRaw]
          : [];

      const rawExs = (t.exercises as Array<Record<string, unknown>>) ?? [];
      return {
        id: String(t.id ?? `gt-${idx}`),
        level: (t.level as HSKLevel) ?? "HSK1",
        subDifficulty: (t.subDifficulty as SubDifficulty) ?? "basic",
        titleVi: String(t.titleVi ?? t.title ?? ""),
        titleZh: String(t.titleZh ?? t.titleDe ?? ""),
        formula: String(t.formula ?? ""),
        explanationVi: String(t.explanationVi ?? ""),
        examples: (
          (t.examples as Array<{
            zh?: string;
            de?: string;
            pinyin?: string;
            vi?: string;
          }>) ?? []
        ).map((e) => ({
          zh: e.zh ?? e.de ?? "",
          pinyin: e.pinyin ?? "",
          vi: e.vi ?? "",
        })),
        warningsVi,
        exercises: rawExs.map((q, qIdx) => ({
          id: String(q.id ?? `gq-${idx}-${qIdx}`),
          promptVi: String(q.promptVi ?? q.question ?? ""),
          promptZh: q.promptZh ? String(q.promptZh) : undefined,
          options: (q.options as string[]) ?? [],
          correctAnswer: String(q.correctAnswer ?? ""),
          explanationVi: String(q.explanationVi ?? ""),
        })),
      };
    });
  }, []);

  const allTopics = useMemo<NormalizedGrammarTopic[]>(() => {
    const map = new Map<string, NormalizedGrammarTopic>();
    for (const topic of baseTopics) {
      map.set(topic.id, topic);
    }
    for (const topic of extraTopics) {
      if (!map.has(topic.id)) {
        map.set(topic.id, topic);
      }
    }
    return Array.from(map.values()).sort(
      (a, b) => HSK_SORT_ORDER.indexOf(a.level) - HSK_SORT_ORDER.indexOf(b.level)
    );
  }, [baseTopics, extraTopics]);

  const topics = useMemo(
    () =>
      selectedLevel === "ALL"
        ? allTopics
        : selectedLevel === "HSK7-9"
          ? allTopics.filter((t) => ["HSK7", "HSK8", "HSK9"].includes(t.level))
          : allTopics.filter((t) => t.level === selectedLevel),
    [allTopics, selectedLevel]
  );

  const activeTopic = useMemo(
    () => topics.find((t) => t.id === selectedTopicId) ?? topics[0],
    [topics, selectedTopicId]
  );

  const exercises = activeTopic?.exercises ?? [];
  const safeExIndex = Math.min(
    exerciseIndex,
    Math.max(0, exercises.length - 1)
  );
  const currentQuestion = exercises[safeExIndex];

  const completedExIndices = useMemo(() => {
    const set = new Set<number>();
    exercises.forEach((q, idx) => {
      if (answers[q.id] === q.correctAnswer) set.add(idx);
    });
    return set;
  }, [exercises, answers]);

  const totalExercisesInLevel = useMemo(
    () => topics.reduce((sum, t) => sum + t.exercises.length, 0),
    [topics]
  );

  const handleSelect = (
    qId: string,
    prompt: string,
    opt: string,
    correct: string,
    explanationVi: string
  ) => {
    if (answers[qId]) return;
    setAnswers((prev) => ({ ...prev, [qId]: opt }));
    if (opt === correct) {
      addXP(5);
    } else {
      recordMistake({
        source: "grammar",
        prompt,
        userAnswer: opt,
        correctAnswer: correct,
        explanationVi,
      });
    }
  };

  const sidebarLessons: SkillFocusLessonItem[] = useMemo(
    () =>
      topics.map((t) => {
        const done =
          t.exercises.length > 0 &&
          t.exercises.every((q) => answers[q.id] === q.correctAnswer);
        return {
          id: t.id,
          title: t.titleVi,
          badge: t.level,
          subtitle: t.titleZh,
          meta: `${t.exercises.length} câu`,
          completed: done,
        };
      }),
    [topics, answers]
  );

  const chosen = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isCorrect = currentQuestion
    ? chosen === currentQuestion.correctAnswer
    : false;

  return (
    <SkillFocusLayout
      backHref="/roadmap"
      hskLevel={selectedLevel}
      onHskLevelChange={(lvl) => {
        setSelectedLevel(lvl as HSKLevel | "ALL" | "HSK7-9");
        setSelectedTopicId("");
        setExerciseIndex(0);
      }}
      allowAllLevel
      currentTitle={
        centerTab === "reference"
          ? "Bảng tra cứu nhanh (Bộ thủ · Biến điệu · Lượng từ)"
          : activeTopic
            ? `${activeTopic.titleVi} · ${activeTopic.titleZh}`
            : "Ngữ pháp tiếng Trung"
      }
      modeSlot={
        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
          {(
            [
              { id: "theory" as const, label: "Công thức & Ví dụ" },
              { id: "practice" as const, label: "Luyện tập từng câu" },
              { id: "reference" as const, label: "Bộ thủ & Bảng" },
            ]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCenterTab(tab.id)}
              className={`cursor-pointer rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors sm:text-xs ${
                centerTab === tab.id
                  ? "bg-white text-brand-active shadow-2xs ring-1 ring-brand/60"
                  : "text-[#737373] hover:text-[#262626]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      }
      settingsBadge={showPinyin ? "Pinyin" : undefined}
      settingsAriaLabel="Cài đặt ngữ pháp"
      settingsContent={
        <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
          <span className="inline-flex items-center gap-1.5">
            <Languages className="h-3.5 w-3.5" /> Hiện Pinyin ví dụ
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={showPinyin}
            onClick={() => setShowPinyin((prev) => !prev)}
            className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
              showPinyin ? "bg-brand" : "bg-[#D6D3CD]"
            }`}
          >
            <span
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                showPinyin ? "left-[18px]" : "left-0.5"
              }`}
            />
          </button>
        </label>
      }
      sidebarTitle="Chuyên đề ngữ pháp"
      sidebarSummary={`${formatUnifiedHSKLabel(selectedLevel)} · ${topics.length} bài · ${totalExercisesInLevel} câu`}
      lessons={sidebarLessons}
      activeLessonId={activeTopic?.id ?? ""}
      onSelectLesson={(id) => {
        setSelectedTopicId(id);
        setExerciseIndex(0);
        if (centerTab === "reference") setCenterTab("theory");
      }}
      pagination={
        centerTab === "practice" && activeTopic
          ? {
              currentIndex: safeExIndex,
              total: exercises.length,
              onPrev: () => setExerciseIndex((i) => Math.max(0, i - 1)),
              onNext: () =>
                setExerciseIndex((i) => Math.min(exercises.length - 1, i + 1)),
              onJump: (idx) => setExerciseIndex(idx),
              itemLabel: "Câu",
              completedIndices: completedExIndices,
            }
          : undefined
      }
    >
      {/* ==================== TAB 1: CÔNG THỨC & VÍ DỤ ==================== */}
      {centerTab === "theory" &&
        (activeTopic ? (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B655E]">
                <GraduationCap className="h-4 w-4 text-brand" />
                <span>
                  {activeTopic.level} ·{" "}
                  {activeTopic.subDifficulty === "advanced"
                    ? "Nâng cao"
                    : "Cơ bản"}{" "}
                  · {activeTopic.titleZh}
                </span>
              </div>
              <h2 className="mt-1 text-xl font-bold text-[#262626]">
                {activeTopic.titleVi}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4540]">
                {activeTopic.explanationVi}
              </p>
            </div>

            {/* Formula */}
            <div className="rounded-xl border border-[#D6D3CE] bg-[#FAF9F7] px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                Công thức cấu trúc
              </div>
              <div className="mt-1 font-mono text-xs font-semibold text-[#262626] sm:text-sm">
                {activeTopic.formula}
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Ví dụ thực tế (Nhấp vào từ chữ Hán để tra nghĩa)
              </div>
              {activeTopic.examples.map((ex, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-3 rounded-xl border border-[#E5E5E0] bg-white px-4 py-3"
                >
                  <div className="space-y-1">
                    <div className="text-base font-bold text-[#262626]">
                      <InteractiveChineseText text={ex.zh} pinyin={ex.pinyin} />
                    </div>
                    {showPinyin && ex.pinyin && (
                      <p className="font-mono text-xs text-[#6B655E]">
                        {ex.pinyin}
                      </p>
                    )}
                    <p className="text-xs text-[#737373]">{ex.vi}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakChinese(ex.zh, 0.95)}
                    className="shrink-0 cursor-pointer rounded-lg border border-[#E5E5E0] p-2 text-[#6B655E] hover:border-brand hover:text-brand-active"
                    aria-label="Nghe ví dụ tiếng Trung"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Warnings */}
            {activeTopic.warningsVi.length > 0 && (
              <div className="space-y-1.5 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] px-4 py-3 text-xs text-[#92400E]">
                {activeTopic.warningsVi.map((warn, wIdx) => (
                  <div key={wIdx} className="flex items-start gap-2.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      <strong>Lưu ý lỗi sai thường gặp:</strong> {warn}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Quick CTA to start 1-by-1 practice */}
            {activeTopic.exercises.length > 0 && (
              <div className="flex items-center justify-between rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-4 py-3">
                <span className="text-xs font-medium text-[#57534E]">
                  Sẵn sàng kiểm tra {activeTopic.exercises.length} câu bài tập của chuyên đề này?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setExerciseIndex(0);
                    setCenterTab("practice");
                  }}
                  className="cursor-pointer rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-white hover:bg-brand-hover"
                >
                  Luyện tập ngay →
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Chưa có chuyên đề ngữ pháp cho cấp độ này.
          </p>
        ))}

      {/* ==================== TAB 2: LUYỆN TẬP TỪNG CÂU (1-BY-1) ==================== */}
      {centerTab === "practice" &&
        (activeTopic && currentQuestion ? (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#737373]">
              <span className="font-semibold text-[#57534E]">
                {activeTopic.titleVi} ({activeTopic.titleZh})
              </span>
              <span className="font-semibold text-brand-active">
                Đúng {completedExIndices.size}/{exercises.length} câu
              </span>
            </div>

            <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-5">
              <p className="text-base font-bold text-[#262626]">
                Câu {safeExIndex + 1}. {currentQuestion.promptVi}
              </p>

              {currentQuestion.promptZh && (
                <div className="rounded-xl border border-[#E5E5E0] bg-white px-4 py-3 text-lg font-semibold text-[#262626]">
                  <InteractiveChineseText text={currentQuestion.promptZh} />
                </div>
              )}

              <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
                {currentQuestion.options.map((opt) => {
                  const isPicked = chosen === opt;
                  const isRight = opt === currentQuestion.correctAnswer;
                  let cls =
                    "border-[#E5E5E0] bg-white text-[#262626] hover:border-brand";
                  if (chosen) {
                    if (isRight)
                      cls =
                        "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                    else if (isPicked)
                      cls = "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]";
                    else
                      cls =
                        "border-[#E5E5E0] bg-white text-[#737373] opacity-60";
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        handleSelect(
                          currentQuestion.id,
                          currentQuestion.promptZh
                            ? `${currentQuestion.promptVi} (${currentQuestion.promptZh})`
                            : currentQuestion.promptVi,
                          opt,
                          currentQuestion.correctAnswer,
                          currentQuestion.explanationVi
                        )
                      }
                      className={`cursor-pointer rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${cls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {chosen && (
                <div
                  className={`flex items-start justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs ${
                    isCorrect
                      ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                      : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    )}
                    <span>{currentQuestion.explanationVi}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => {
                        const copy = { ...prev };
                        delete copy[currentQuestion.id];
                        return copy;
                      })
                    }
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1 font-medium underline"
                  >
                    <RotateCcw className="h-3 w-3" /> Làm lại
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Chuyên đề này chưa có bài tập thực hành.
          </p>
        ))}

      {/* ==================== TAB 3 (SECONDARY): BỘ THỦ & BẢNG TRA CỨU ==================== */}
      {centerTab === "reference" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-brand" />
            <h2 className="text-sm font-bold text-[#262626]">
              Bảng tra cứu nhanh: Bộ thủ · Biến điệu · Lượng từ · Bổ ngữ · 把/被
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {(
              [
                { id: "radicals" as const, label: "50 Bộ thủ (部首)" },
                { id: "tone-sandhi" as const, label: "Biến điệu Thanh 3/一/不" },
                { id: "classifiers" as const, label: "Lượng từ (量词)" },
                { id: "complements" as const, label: "Bổ ngữ & 的/地/得" },
                { id: "ba-bei" as const, label: "Câu chữ 把 & 被" },
              ]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTableTab(tab.id)}
                className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activeTableTab === tab.id
                    ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                    : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-brand"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTableTab === "radicals" && (
            <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] bg-white">
              <table className="w-full min-w-[540px] text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]">
                    <th className="px-3 py-2 font-semibold">Bộ thủ</th>
                    <th className="px-3 py-2 font-semibold">Tên gọi</th>
                    <th className="px-3 py-2 font-semibold">Ý nghĩa gốc</th>
                    <th className="px-3 py-2 font-semibold">Chữ Hán tiêu biểu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E0] text-[#262626]">
                  {RADICAL_50_LIST.map((row) => (
                    <tr key={row.r} className="hover:bg-[#FAF9F7]">
                      <td className="px-3 py-2 text-base font-bold">{row.r}</td>
                      <td className="px-3 py-2 font-semibold text-[#6B655E]">
                        {row.name}
                      </td>
                      <td className="px-3 py-2 text-[#57534E]">{row.meaning}</td>
                      <td className="px-3 py-2 font-medium">
                        <InteractiveChineseText text={row.ex} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTableTab === "tone-sandhi" && (
            <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] bg-white">
              <table className="w-full min-w-[560px] text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]">
                    <th className="px-3 py-2 font-semibold">Quy tắc</th>
                    <th className="px-3 py-2 font-semibold">Điều kiện</th>
                    <th className="px-3 py-2 font-semibold">Cách đọc</th>
                    <th className="px-3 py-2 font-semibold">Ví dụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E0] text-[#262626]">
                  {TONE_SANDHI_ROWS.map((row) => (
                    <tr key={row.rule} className="hover:bg-[#FAF9F7]">
                      <td className="px-3 py-2 font-bold">{row.rule}</td>
                      <td className="px-3 py-2 text-[#737373]">{row.condition}</td>
                      <td className="px-3 py-2 font-semibold text-[#6B655E]">
                        {row.change}
                      </td>
                      <td className="px-3 py-2 font-mono">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTableTab === "classifiers" && (
            <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] bg-white">
              <table className="w-full min-w-[540px] text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]">
                    <th className="px-3 py-2 font-semibold">Lượng từ</th>
                    <th className="px-3 py-2 font-semibold">Phạm vi sử dụng</th>
                    <th className="px-3 py-2 font-semibold">Ví dụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E0] text-[#262626]">
                  {CLASSIFIER_ROWS.map((row) => (
                    <tr key={row.mw} className="hover:bg-[#FAF9F7]">
                      <td className="px-3 py-2 font-bold">{row.mw}</td>
                      <td className="px-3 py-2 text-[#57534E]">{row.usage}</td>
                      <td className="px-3 py-2 font-medium">
                        <InteractiveChineseText text={row.ex} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTableTab === "complements" && (
            <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] bg-white">
              <table className="w-full min-w-[560px] text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]">
                    <th className="px-3 py-2 font-semibold">Loại bổ ngữ</th>
                    <th className="px-3 py-2 font-semibold">Công thức</th>
                    <th className="px-3 py-2 font-semibold">Chức năng</th>
                    <th className="px-3 py-2 font-semibold">Ví dụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E0] text-[#262626]">
                  {COMPLEMENT_ROWS.map((row) => (
                    <tr key={row.type} className="hover:bg-[#FAF9F7]">
                      <td className="px-3 py-2 font-bold">{row.type}</td>
                      <td className="px-3 py-2 font-mono text-[#6B655E]">
                        {row.formula}
                      </td>
                      <td className="px-3 py-2 text-[#57534E]">{row.meaningVi}</td>
                      <td className="px-3 py-2">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTableTab === "ba-bei" && (
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {BA_BEI_ROWS.map((item) => (
                <div
                  key={item.structure}
                  className="space-y-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-xs"
                >
                  <h3 className="text-sm font-bold text-[#262626]">
                    {item.structure}
                  </h3>
                  <div className="rounded-lg bg-white px-3 py-2 font-mono font-semibold text-[#292524]">
                    {item.formula}
                  </div>
                  <p className="leading-relaxed text-[#57534E]">{item.usageVi}</p>
                  <div className="rounded-lg border border-[#E5E5E0] bg-white p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#262626]">
                        <InteractiveChineseText
                          text={item.exampleZh}
                          pinyin={item.examplePinyin}
                        />
                      </span>
                      <button
                        type="button"
                        onClick={() => speakChinese(item.exampleZh, 0.95)}
                        className="cursor-pointer rounded-lg border border-[#E5E5E0] p-1.5 text-[#6B655E] hover:border-brand"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-[#6B655E]">
                      {item.examplePinyin}
                    </p>
                    <p className="mt-0.5 text-[#737373]">{item.exampleVi}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </SkillFocusLayout>
  );
}
