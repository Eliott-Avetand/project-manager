import { createContext, useEffect, useState } from "react";

const defaultContext = {
    toggleDark: () => {},
    isDark: true,
};

const ThemeContext = createContext(defaultContext);

export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const isDark = JSON.parse(localStorage.getItem('ThemeContext:isDark'));
        console.log(isDark);

        if (isDark !== null && isDark !== undefined)
            setIsDark(isDark);
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
            setIsDark(false);
    }, []);

    const context = {
        toggleDark: () => {
            console.log(!isDark);
            localStorage.setItem('ThemeContext:isDark', String(!isDark));
            setIsDark(!isDark);
        },
        isDark,
    };

    return (
        <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;