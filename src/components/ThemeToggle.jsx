import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default = dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || !storedTheme) {
      // default or stored dark → use dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      // stored light → use light
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-full p-2 hover:bg-primary/10"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
