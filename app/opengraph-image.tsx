import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "BRO444 Game — Download Free APK in Pakistan. 50% Bonus, 500+ Games, JazzCash & Easypaisa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function hostSubtitle(): string {
  const fallback = "Pakistan · bonuses · JazzCash & EP";
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const host = new URL(raw).hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".localhost")) {
      return fallback;
    }
    return host;
  } catch {
    return fallback;
  }
}

export default async function OpengraphImage() {
  const line2 = hostSubtitle();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          color: "white",
          background:
            "radial-gradient(ellipse at 18% 22%, rgba(45,212,191,0.28), transparent 58%), radial-gradient(ellipse at 92% 78%, rgba(234,179,8,0.22), transparent 52%), radial-gradient(ellipse at 52% 100%, rgba(17,94,89,0.35), transparent 55%), #0f2529",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#fde68a",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg,#fcd34d,#ea580c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 900,
              color: "#020617",
            }}
          >
            444
          </div>
          BRO444 Game · Pakistan
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#f4f4f5",
            display: "block",
          }}
        >
          50% Bonus · Free APK Download
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            fontWeight: 600,
            color: "rgba(244,244,245,0.88)",
            display: "block",
            maxWidth: "920px",
          }}
        >
          {line2}
        </div>

        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 14 }}>
          {["50% Welcome Bonus", "500+ Games", "JazzCash & Easypaisa", "Free to Download"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 22,
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
