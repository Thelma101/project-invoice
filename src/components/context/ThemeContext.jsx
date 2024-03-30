// 

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

<ThemeContext.Provider value={{ theme, toggleTheme }}></ThemeContext.Provider>
import { ThemeContext, Provider } from "./ThemeContext";