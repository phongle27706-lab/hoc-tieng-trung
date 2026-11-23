import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const SINGLE_HANZI_RE = /^[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]$/u;
const MAX_CACHE_SIZE = 2000;
const strokeCache = new Map<string, string>();

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("char")?.trim() ?? "";
  const chars = Array.from(raw);

  if (chars.length !== 1 || !SINGLE_HANZI_RE.test(chars[0])) {
    return NextResponse.json(
      { error: "Invalid char parameter: expected a single Hanzi character." },
      { status: 400 }
    );
  }

  const char = chars[0];
  const cached = strokeCache.get(char);
  if (cached) {
    return new NextResponse(cached, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  const filePath = path.join(
    process.cwd(),
    "node_modules",
    "hanzi-writer-data",
    `${char}.json`
  );

  try {
    const content = await readFile(filePath, "utf8");
    if (strokeCache.size >= MAX_CACHE_SIZE) {
      const oldestKey = strokeCache.keys().next().value;
      if (oldestKey !== undefined) {
        strokeCache.delete(oldestKey);
      }
    }
    strokeCache.set(char, content);

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    const code = (err as NodeJS.ErrnoException)?.code;
    if (code === "ENOENT") {
      return NextResponse.json(
        { error: `Stroke data not found for character "${char}".` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "Failed to load stroke data." },
      { status: 500 }
    );
  }
}
