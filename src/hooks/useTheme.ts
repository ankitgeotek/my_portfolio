import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  console.log('ThemeContextProvider rendering, darkMode:', darkMode); // Debug log

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        setDarkMode(JSON.parse(savedMode));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log('Toggling dark mode from', darkMode, 'to', !darkMode); // Debug log
    setDarkMode(prev => !prev);
  };

  const value: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return React.createElement(
    ThemeContext.Provider,
    { value },
    children
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};