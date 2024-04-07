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
        // setTheme(theme === "light" ? "dark" : "light");
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



// useEffect(()=>{
//     document.body.className = theme;
//     const root = window.document.documentElement;
//     root.style.setProperty('--primary-color', theme === 'light' ? '#007bff' : '#343a40');
//     root.classList.remove(theme === 'light' ? 'dark' : 'light');
//     root.classList.add(theme);
// }, [theme])
{/* <ThemeContext.Provider value={{ theme, toggleTheme }}></ThemeContext.Provider>
import { ThemeContext, Provider } from "./ThemeContext"; */}