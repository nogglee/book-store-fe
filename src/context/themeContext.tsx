import { ThemeProvider } from "styled-components";
import { createContext, useState, useEffect } from "react";
import type { ThemeName } from "../style/theme";
import { getTheme } from '../style/theme';
import { GlobalStyle } from "../style/global";

const DEFAULT_THEME_NAME: ThemeName = 'dark';
const THEME_LOCAL_STORAGE_KEY = 'book-store-theme';

interface State {
    themeName: ThemeName;
    toggleTheme: () => void;
}

const state = {
    themeName: DEFAULT_THEME_NAME as ThemeName,
    toggleTheme: () => {}
}

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({children}: {children: React.ReactNode}) => {

    const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);
    
    const toggleTheme = () => {
        setThemeName(themeName === DEFAULT_THEME_NAME ? 'light' : DEFAULT_THEME_NAME);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeName === DEFAULT_THEME_NAME ? 'light' : DEFAULT_THEME_NAME);
    };

    useEffect(() => {
        const savedThemeName = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeName;
        if (savedThemeName) {
            setThemeName(savedThemeName || DEFAULT_THEME_NAME);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={getTheme(themeName)}>
                <GlobalStyle themeName={themeName} />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}