import { ImageResponse } from "next/og";
import { brandMark } from "../../lib/brand-icon";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(brandMark({ size: 512 }), {
    width: 512,
    height: 512,
  });
}
