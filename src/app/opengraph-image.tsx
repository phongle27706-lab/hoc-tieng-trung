import { ImageResponse } from "next/og";

export const alt = "Quái Vật Tiếng Trung — Tự học tiếng Trung Mức 0 – HSK 9";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#262626",
          color: "#F2F2F0",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Quai Vat Tieng Trung</div>
        <div style={{ fontSize: 36, marginTop: 24 }}>HSK 0 - 9 · AI Tutor BaoBao 3D</div>
      </div>
    ),
    size
  );
}
