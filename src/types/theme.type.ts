import React from "react";

export interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeContextProviderProps {
    children: React.ReactNode;
}
