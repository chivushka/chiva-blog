"use client";
import React from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import clsx from "clsx";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme === "dark" ? "white" : "#0f172a",
      }}
      onClick={() => {
        toggleTheme();
        console.log(theme);
      }}
    >
      <Image src="/moon.png" alt="Moon Icon" width={14} height={14} />
      <div
        className={clsx(
          styles.ball,
          theme === "light" ? styles.light : styles.dark
        )}
      ></div>
      <Image src="/sun.png" alt="Sun Icon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
