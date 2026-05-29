import { asset } from "../asset.js";

/* Circular user avatar. Photo served from public/photos/avatar.jpg. */
export default function Avatar({ size = 60 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `url(${asset("photos/avatar.jpg")}) center/cover, #ddd`,
        flex: "0 0 auto",
      }}
    />
  );
}
