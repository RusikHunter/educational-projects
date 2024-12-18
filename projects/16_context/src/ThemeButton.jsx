import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            Переключить тему
        </button>
    );
}

export default ThemedButton;