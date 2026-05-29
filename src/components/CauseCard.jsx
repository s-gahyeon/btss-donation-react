import { asset } from "../asset.js";

/* Solid-colour rounded-20 card (height 113) with a duotone B&W photo
   bleeding out the top; white title 17/600. Photos served from public/photos/. */
export default function CauseCard({ bg, photo, photoH = 150, title, italic, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        width: "100%",
        height: 113,
        borderRadius: 20,
        background: bg,
        border: 0,
        padding: 0,
        cursor: "pointer",
        overflow: "visible",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      {photo && (
        <img
          src={asset("photos/" + photo)}
          alt=""
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 58,
            height: photoH,
            width: "auto",
            maxWidth: "106%",
            objectFit: "contain",
            pointerEvents: "none",
          }}
        />
      )}
      {title && (
        <span
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 17,
            textAlign: "center",
            lineHeight: 1.25,
            padding: "0 10px 16px",
            fontStyle: italic ? "italic" : "normal",
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </span>
      )}
    </button>
  );
}
