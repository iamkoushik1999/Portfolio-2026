"use client";

import { useTheme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
    >
      <svg
        className={`${styles.icon} ${isDark ? styles.iconVisible : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        suppressHydrationWarning
      >
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5" />
          <path d="M18.4 5.6l-1.55 1.55M7.15 16.85l-1.55 1.55M18.4 18.4l-1.55-1.55M7.15 7.15L5.6 5.6" />
        </g>
      </svg>
      <svg
        className={`${styles.icon} ${!isDark ? styles.iconVisible : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        suppressHydrationWarning
      >
        <path
          d="M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
