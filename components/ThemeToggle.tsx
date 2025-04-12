"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonButton } from "./MoonButton";
import { SunButton } from "./SunButton";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex cursor-pointer"
    >
      {theme === "light" && <SunButton />}
      {theme === "dark" && <MoonButton />}
    </button>
  );
};
