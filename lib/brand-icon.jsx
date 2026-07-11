// Shared visual building block for every generated icon/social-image route
// (app/icon.jsx, app/apple-icon.jsx, app/icon-192, app/icon-512,
// app/opengraph-image.jsx). Rendered through next/og's ImageResponse, so
// only a small subset of CSS (flexbox, gradients, no external assets) is
// supported.

const DARK_BG = "#0b2447"; // matches --color-dark in styles/vars.css
const ACCENT_GRADIENT = "linear-gradient(135deg, #5ee7ff 0%, #a78bfa 100%)";

export const brandMark = ({ size, withDot = true }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: DARK_BG,
      position: "relative",
    }}
  >
    <span
      style={{
        fontSize: size * 0.62,
        fontWeight: 800,
        color: "#f5f7ff",
        fontFamily: "sans-serif",
        lineHeight: 1,
      }}
    >
      K
    </span>
    {withDot ? (
      <div
        style={{
          position: "absolute",
          width: size * 0.16,
          height: size * 0.16,
          borderRadius: "50%",
          background: ACCENT_GRADIENT,
          right: size * 0.2,
          bottom: size * 0.22,
          display: "flex",
        }}
      />
    ) : null}
  </div>
);
