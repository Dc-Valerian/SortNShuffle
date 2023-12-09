import React from "react";
import useDarkMode from "../Hook/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = React.useState(colorTheme === "light");

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      checked={darkSide}
      onChange={toggleDarkMode}
      size={30}
      className={`md:h-[25px]  text-[cyan]`}
    />
  );
}
