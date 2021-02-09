import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={classNames(
        "uppercase tracking-wide font-semibold",
        "px-4 py-2 w-40",
        "border focus:outline-none",
        "shadow-black dark:shadow-secondary-500",
        "border-black dark:border-secondary-500",
        "bg-primary-600 dark:bg-secondary-50",
        "text-primary-100 dark:text-secondary-900"
      )}
      onClick={handleClick}
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
