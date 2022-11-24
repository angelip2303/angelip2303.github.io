import { createContext, useContext, useState, useLayoutEffect } from "react";

interface ThemeContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // TODO: refactor this
  const localStorageTheme = localStorage.getItem("theme");
  const initialTheme: string = localStorageTheme ? localStorageTheme : "light";
  const [isDarkMode, setDarkMode] = useState(initialTheme === "dark");

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useLayoutEffect(() => {
    const getTheme = () => (isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", getTheme());
    document.documentElement.className = getTheme();
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context != undefined) return context;
};

export { ThemeProvider, useTheme };
