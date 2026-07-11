import { ImageResponse } from "next/og";

export const alt = "Koushik Dutta — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 15% 10%, rgba(94,231,255,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(167,139,250,0.18) 0%, transparent 45%), #030b1c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 30,
            fontWeight: 600,
            color: "#a9b8d9",
            marginBottom: 28,
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5ee7ff 0%, #a78bfa 100%)",
              display: "flex",
            }}
          />
          koushik.dev
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#f5f7ff",
            fontFamily: "sans-serif",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Koushik Dutta
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            marginTop: 8,
            backgroundImage:
              "linear-gradient(120deg, #5ee7ff 0%, #576cbc 55%, #a78bfa 100%)",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a9b8d9",
            marginTop: 32,
            maxWidth: 760,
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          Building fast, reliable web apps with React, Node, Express &amp;
          MongoDB.
        </div>
      </div>
    ),
    { ...size }
  );
}
