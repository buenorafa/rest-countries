// components/theme-toggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="flex items-center gap-2"
    >
      {theme === "dark" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
      <span className="text-sm font-medium">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </Button>
  );
}
