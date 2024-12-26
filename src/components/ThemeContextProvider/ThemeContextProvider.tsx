import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import themes from '../../theme'

const { themeLight, themeDark } = themes

export const ThemeContext = createContext({
    theme: themeDark,
    toggleTheme: () => { },
});

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const theme = darkMode ? themeDark : themeLight;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

