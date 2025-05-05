"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) {
      const currentClassName = document.documentElement.className;
      const themeClass = theme === "dark" ? "dark" : "light";
      document.documentElement.className = currentClassName ? `${currentClassName} ${themeClass}` : themeClass;
    }
  }, [theme]);

  return <>{children}</>;
}