import { ImageResponse } from "next/og";
import { brandMark } from "../lib/brand-icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(brandMark({ size: 32, withDot: false }), size);
}
