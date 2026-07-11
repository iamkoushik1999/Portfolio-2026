"use client";

import { useCallback, useEffect, useState } from "react";

const getStoredTheme = () => {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
};

const getInitialTheme = () => {
  // Guards SSR/prerender, where `document` doesn't exist. On the client
  // this reads the attribute the FOUC-prevention script (see layout) has
  // already set before hydration runs, so this matches the real theme.
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" || attr === "dark" ? attr : "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!getStoredTheme()) {
        setTheme(event.matches ? "dark" : "light");
      }
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // ignore write failures (e.g. private browsing)
      }
      return next;
    });
  }, []);

  return [theme, toggleTheme];
};
