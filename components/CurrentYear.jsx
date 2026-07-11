"use client";

import { useState } from "react";

export const CurrentYear = () => {
  // Lazy initializer runs fresh on hydration, so this reflects the
  // visitor's current year even though the page itself is statically
  // prerendered at build time.
  const [year] = useState(() => new Date().getFullYear());

  return <span suppressHydrationWarning>{year}</span>;
};
