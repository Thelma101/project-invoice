import { createContext, useEffect, useState } from "react";
import { dataInvoice } from "../Data";

export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => {},
    dataValue: [],
});

export const Provider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [dataValue, setDataValue] = useState(dataInvoice);

    const toggleTheme = () =>{

        setTheme(theme === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, dataValue, setDataValue }}>
            {children}
        </ThemeContext.Provider>
    );
};
