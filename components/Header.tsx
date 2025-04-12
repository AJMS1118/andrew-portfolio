"use client";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LenguajeSelector";

export const Header = () => {
  return (
    <div
      id="#top"
      className="w-dvw flex items-center justify-between bg-violet-300 dark:bg-[var(--background-header-dark-mode)]  text-black dark:text-white transition-all duration-300"
    >
      <div className="ml-[10px] p-[10px]">
        <h1 className="text-3xl">A</h1>
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 items-center mr-[10px] transition-all duration-300">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
};
