import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => {},
});

export const Provider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    }
}

useEffect(()=>{
    document.body.className = theme;
}, [])
{/* <ThemeContext.Provider value={{ theme, toggleTheme }}></ThemeContext.Provider>
import { ThemeContext, Provider } from "./ThemeContext"; */}