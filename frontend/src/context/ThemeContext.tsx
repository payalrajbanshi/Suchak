import { createContext, useState } from "react";
import type { ReactNode } from "react";
interface Theme {
  color: string;
  background: string;
}

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>({
    color: "#000",
    background: "#fff",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          background: theme.background,
          color: theme.color,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};