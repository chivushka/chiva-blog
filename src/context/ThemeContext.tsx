"use client";

import { ThemeContextProps } from "@/types/theme.type";
import React from "react";

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

const getFromLocalStorage = (): string => {
  return localStorage.getItem("theme") ?? "light";
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<string>("light");
  const [isThemeLoaded, setIsThemeLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    const storedTheme = getFromLocalStorage();
    setTheme(storedTheme);
    setIsThemeLoaded(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    isThemeLoaded && (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    )
  );
};
