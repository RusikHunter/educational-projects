import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
            onClick={toggleTheme}
        >
            Switch to {theme === "light" ? "dark" : "light"} theme
        </button>
    )
}