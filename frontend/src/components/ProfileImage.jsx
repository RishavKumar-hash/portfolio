import { useState } from "react";

const PROFILE_PHOTO = "/pic.png";

export default function ProfileImage({
  className = "w-full h-full object-cover object-top",
  alt = "Rishav Kumar — Backend Software Engineer",
  ring = false,
}) {
  const [src, setSrc] = useState(PROFILE_PHOTO);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${ring ? "ring-2 ring-primary/30 ring-offset-2 ring-offset-dark" : ""}`}
      onError={() => setSrc("/avatar-placeholder.svg")}
    />
  );
}
