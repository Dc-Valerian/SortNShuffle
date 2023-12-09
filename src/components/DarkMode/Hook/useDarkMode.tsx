import { useState, useEffect } from "react";

type ColorTheme = "light" | "dark";

export default function useDarkMode(): [
  ColorTheme,
  React.Dispatch<ColorTheme>
] {
  const [theme, setTheme] = useState<ColorTheme>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  const colorTheme: ColorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
