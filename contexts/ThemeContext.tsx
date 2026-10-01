"use client";
import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

type Theme = "dark" | "light";
type Variant = "loki" | "thor";

interface ThemeContextValue {
  theme: Theme;
  variant: Variant;
  toggleTheme: () => void;
  toggleVariant: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  variant: "loki",
  toggleTheme: () => {},
  toggleVariant: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [variant, setVariant] = useState<Variant>("loki");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("app-theme") as Theme | null;
    const initialTheme = storedTheme ?? "dark";
    
    const storedVariant = localStorage.getItem("app-variant") as Variant | null;
    // Fallback to loki theme from previous storage if available
    const legacyTheme = localStorage.getItem("loki-theme");
    const initialVariant = storedVariant ?? "loki";

    setTheme(initialTheme);
    setVariant(initialVariant);
    
    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.setAttribute("data-variant", initialVariant);
    
    if (legacyTheme && !storedTheme) {
        localStorage.setItem("app-theme", legacyTheme);
    }
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("app-theme", next);
      return next;
    });
  }, []);

  const toggleVariant = useCallback(() => {
    setVariant((prev) => {
      const next: Variant = prev === "loki" ? "thor" : "loki";
      document.documentElement.setAttribute("data-variant", next);
      localStorage.setItem("app-variant", next);
      return next;
    });
  }, []);

  // Prevent flash of wrong theme
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, variant, toggleTheme, toggleVariant }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
