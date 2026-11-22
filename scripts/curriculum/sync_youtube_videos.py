#!/usr/bin/env python3
"""
Sync YouTube lecture videos for all HSK 0 -> HSK 9 roadmap lessons.
1. Searches YouTube (https://www.youtube.com/results?search_query=...) for each lesson.
2. Verifies candidate videos via YouTube oEmbed API (HTTP 200 OK) to get exact title & author_name.
3. Updates youtubeUrl, recommendedChannelName, and defaultSearchQuery in src/data/roadmap/hsk*.ts.
"""

from __future__ import annotations

import concurrent.futures
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Dict, List, Optional, Tuple

ROOT = Path(__file__).resolve().parents[2]
ROADMAP_DIR = ROOT / "src" / "data" / "roadmap"

TARGET_FILES = [
    "hsk0-standard.ts",
    "hsk1-part1.ts",
    "hsk1-part2.ts",
    "hsk2-part1.ts",
    "hsk2-part2.ts",
    "hsk3-part1.ts",
    "hsk3-part2.ts",
    "hsk4-part1.ts",
    "hsk4-part2.ts",
    "hsk5-standard.ts",
    "hsk6-standard.ts",
    "hsk7-standard.ts",
    "hsk8-standard.ts",
    "hsk9-standard.ts",
]

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
}

VIDEO_ID_RE = re.compile(r'"videoId":"([a-zA-Z0-9_-]{11})"')


def http_get(url: str, timeout: int = 12) -> Tuple[int, str]:
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status, resp.read().decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception:
        return 0, ""


def search_youtube_ids(query: str, max_ids: int = 10) -> List[str]:
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote_plus(query)
    status, html = http_get(url, timeout=15)
    if status != 200 or not html:
        return []
    seen = set()
    ids: List[str] = []
    for match in VIDEO_ID_RE.finditer(html):
        vid = match.group(1)
        if vid not in seen:
            seen.add(vid)
            ids.append(vid)
            if len(ids) >= max_ids:
                break
    return ids


def verify_oembed(video_id: str) -> Optional[Dict[str, str]]:
    url = (
        "https://www.youtube.com/oembed?url="
        + urllib.parse.quote_plus(f"https://www.youtube.com/watch?v={video_id}")
        + "&format=json"
    )
    status, body = http_get(url, timeout=10)
    if status != 200 or not body:
        return None
    try:
        data = json.loads(body)
        title = str(data.get("title", "")).strip()
        author = str(data.get("author_name", "")).strip()
        if title and author:
            return {
                "video_id": video_id,
                "url": f"https://www.youtube.com/watch?v={video_id}",
                "title": title,
                "author_name": author,
            }
    except Exception:
        return None
    return None


def clean_zh_title(title_zh: str) -> str:
    # Strip leading "第一课：" or "第1课:" etc.
    cleaned = re.sub(r"^第[^：:]+[：:]\s*", "", title_zh).strip()
    return cleaned or title_zh.strip()


def clean_vi_title(title_vi: str) -> str:
    cleaned = re.sub(r"^Bài\s+\d+\s*[:：]\s*", "", title_vi, flags=re.IGNORECASE).strip()
    # Remove parentheticals to keep search concise
    cleaned = re.sub(r"\([^)]*\)", "", cleaned).strip()
    return cleaned


def build_queries(hsk_level: str, lesson_num: int, title_vi: str, title_zh: str) -> Tuple[str, List[str]]:
    level_num = hsk_level.replace("HSK", "").strip()
    zh = clean_zh_title(title_zh)
    vi = clean_vi_title(title_vi)
    default_query = f"Giáo trình chuẩn HSK {level_num} Bài {lesson_num} {zh}".strip()

    if hsk_level == "HSK0":
        queries = [
            f"phát âm tiếng Trung {vi}",
            f"học phát âm tiếng Trung cơ bản bài {lesson_num} {vi}",
            f"phát âm tiếng Trung cơ bản thanh mẫu vận mẫu thanh điệu bài {lesson_num}",
        ]
    elif hsk_level in {"HSK1", "HSK2", "HSK3", "HSK4"}:
        queries = [
            f"Giáo trình chuẩn HSK {level_num} Bài {lesson_num}",
            f"Giáo trình chuẩn HSK {level_num} Bài {lesson_num} {zh}",
            f"HSK {level_num} Bài {lesson_num} {vi} tiếng Trung",
        ]
    elif hsk_level in {"HSK5", "HSK6"}:
        queries = [
            f"Giáo trình chuẩn HSK {level_num} Bài {lesson_num}",
            f"HSK {level_num} Bài {lesson_num} {zh}",
            f"HSK {level_num} {vi} tiếng Trung",
        ]
    else:
        # HSK7, HSK8, HSK9: specialized / factory / business / academic
        vi_lower = vi.lower()
        if any(k in vi_lower for k in ["xưởng", "sản xuất", "nhà máy", "công nghiệp", "kỹ thuật", "qa", "qc"]):
            queries = [
                f"tiếng Trung công xưởng {vi}",
                f"tiếng Trung nhà máy sản xuất {vi}",
                f"tiếng Trung công xưởng bài {lesson_num}",
            ]
        elif any(k in vi_lower for k in ["thương mại", "kinh doanh", "đàm phán", "hợp đồng", "xuất nhập khẩu", "logistics", "văn phòng"]):
            queries = [
                f"tiếng Trung thương mại {vi}",
                f"tiếng Trung kinh doanh {vi}",
                f"tiếng Trung thương mại bài {lesson_num}",
            ]
        else:
            queries = [
                f"tiếng Trung thương mại {vi}",
                f"tiếng Trung công xưởng {vi}",
                f"HSK {level_num} {vi} tiếng Trung",
                f"luyện nghe tiếng Trung cao cấp {vi}",
            ]

    return default_query, queries


def score_candidate(title: str, hsk_level: str, lesson_num: int, zh: str) -> int:
    t = title.lower()
    score = 0
    level_num = hsk_level.replace("HSK", "").strip()
    if f"hsk {level_num}" in t or f"hsk{level_num}" in t:
        score += 30
    if f"bài {lesson_num}" in t or f"bai {lesson_num}" in t or f"lesson {lesson_num}" in t:
        score += 30
    if "giáo trình chuẩn" in t or "giao trinh chuan" in t:
        score += 20
    if zh and zh.lower() in t:
        score += 25
    if any(w in t for w in ["tiếng trung", "tieng trung", "học tiếng trung"]):
        score += 10
    return score


def find_best_video(
    hsk_level: str,
    lesson_num: int,
    title_vi: str,
    title_zh: str,
    used_ids: set,
) -> Tuple[str, Optional[Dict[str, str]]]:
    default_query, queries = build_queries(hsk_level, lesson_num, title_vi, title_zh)
    zh = clean_zh_title(title_zh)

    best_unused: Optional[Tuple[int, Dict[str, str]]] = None
    best_any: Optional[Tuple[int, Dict[str, str]]] = None

    for q in queries:
        ids = search_youtube_ids(q, max_ids=8)
        for vid in ids[:5]:
            info = verify_oembed(vid)
            if not info:
                continue
            sc = score_candidate(info["title"], hsk_level, lesson_num, zh)
            if best_any is None or sc > best_any[0]:
                best_any = (sc, info)
            if vid not in used_ids:
                if best_unused is None or sc > best_unused[0]:
                    best_unused = (sc, info)
            # Good enough match found early
            if best_unused and best_unused[0] >= 50:
                return default_query, best_unused[1]
        if best_unused and best_unused[0] >= 20:
            return default_query, best_unused[1]

    if best_unused:
        return default_query, best_unused[1]
    if best_any:
        return default_query, best_any[1]
    return default_query, None


def ts_escape(val: str) -> str:
    return val.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ").strip()


SESSION_HEADER_RE = re.compile(
    r'id:\s*"([^"]+)"[\s\S]*?'
    r'hskLevel:\s*"(HSK\d)"[\s\S]*?'
    r'lessonNumber:\s*(\d+)[\s\S]*?'
    r'title:\s*"([^"]+)"[\s\S]*?'
    r'titleZh:\s*"([^"]+)"[\s\S]*?'
    r'recommendedChannelName:\s*"([^"]*)"[\s\S]*?'
    r'youtubeUrl:\s*"([^"]*)"[\s\S]*?'
    r'defaultSearchQuery:\s*"([^"]*)"',
    re.MULTILINE,
)


def parse_sessions(content: str) -> List[Dict]:
    sessions = []
    # Split by session start `id: "` to avoid cross-session regex bleed
    starts = [m.start() for m in re.finditer(r'\bid:\s*"hsk\d+-', content)]
    for idx, start in enumerate(starts):
        end = starts[idx + 1] if idx + 1 < len(starts) else len(content)
        chunk = content[start:end]
        m = SESSION_HEADER_RE.search(chunk)
        if not m:
            continue
        sessions.append(
            {
                "start": start,
                "end": end,
                "id": m.group(1),
                "hskLevel": m.group(2),
                "lessonNumber": int(m.group(3)),
                "title": m.group(4),
                "titleZh": m.group(5),
                "recommendedChannelName": m.group(6),
                "youtubeUrl": m.group(7),
                "defaultSearchQuery": m.group(8),
            }
        )
    return sessions


def process_all() -> None:
    all_jobs = []
    file_contents: Dict[str, str] = {}
    file_sessions: Dict[str, List[Dict]] = {}

    for fname in TARGET_FILES:
        fpath = ROADMAP_DIR / fname
        if not fpath.exists():
            print(f"[WARN] Missing file: {fpath}")
            continue
        content = fpath.read_text(encoding="utf-8")
        sessions = parse_sessions(content)
        file_contents[fname] = content
        file_sessions[fname] = sessions
        for s in sessions:
            all_jobs.append((fname, s))

    print(f"Found {len(all_jobs)} lessons across {len(file_contents)} files.")

    results: Dict[str, Tuple[str, Optional[Dict[str, str]]]] = {}
    used_ids: set = set()

    def worker(job: Tuple[str, Dict]) -> Tuple[str, str, Optional[Dict[str, str]]]:
        _, s = job
        # Snapshot used_ids (best-effort dedup)
        dq, info = find_best_video(
            s["hskLevel"], s["lessonNumber"], s["title"], s["titleZh"], set(used_ids)
        )
        return s["id"], dq, info

    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
        futures = [ex.submit(worker, job) for job in all_jobs]
        done_count = 0
        for fut in concurrent.futures.as_completed(futures):
            sid, dq, info = fut.result()
            results[sid] = (dq, info)
            if info:
                used_ids.add(info["video_id"])
            done_count += 1
            status_str = (
                f"OK {info['video_id']} ({info['author_name']})" if info else "FAIL"
            )
            print(f"[{done_count}/{len(all_jobs)}] {sid}: {status_str}")

    total = len(all_jobs)
    synced = 0

    for fname, sessions in file_sessions.items():
        content = file_contents[fname]
        # Replace from back to front so offsets remain valid
        for s in reversed(sessions):
            dq, info = results.get(s["id"], (s["defaultSearchQuery"], None))
            chunk = content[s["start"] : s["end"]]

            new_dq = ts_escape(dq)
            chunk = re.sub(
                r'(defaultSearchQuery:\s*)"[^"]*"',
                lambda m: f'{m.group(1)}"{new_dq}"',
                chunk,
                count=1,
            )

            if info:
                synced += 1
                new_url = ts_escape(info["url"])
                new_ch = ts_escape(info["author_name"])
                chunk = re.sub(
                    r'(youtubeUrl:\s*)"[^"]*"',
                    lambda m: f'{m.group(1)}"{new_url}"',
                    chunk,
                    count=1,
                )
                chunk = re.sub(
                    r'(recommendedChannelName:\s*)"[^"]*"',
                    lambda m: f'{m.group(1)}"{new_ch}"',
                    chunk,
                    count=1,
                )

            content = content[: s["start"]] + chunk + content[s["end"] :]

        (ROADMAP_DIR / fname).write_text(content, encoding="utf-8")

    pct = (synced / total * 100.0) if total else 0.0
    print(f"\n=== SYNC COMPLETE: {synced}/{total} ({pct:.1f}%) lessons synced with HTTP 200 YouTube videos ===")
    print(f"Unique videos assigned: {len(used_ids)}")


if __name__ == "__main__":
    process_all()
