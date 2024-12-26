import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from 'react'

export default function About() {
    const [isShowed, setIsShowed] = useState(true)
    const { theme, toggleTheme } = useContext(ThemeContext)

    const toggleInfo = () => {
        setIsShowed(!isShowed)
    }

    return (
        <div style={theme === 'light' ? { backgroundColor: 'lightgray' } : { backgroundColor: 'gray' }}>
            <h2>About</h2>

            <button onClick={toggleInfo}>Show/hide info</button>

            <div style={isShowed === true ? { display: 'block' } : { display: 'none' }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea recusandae hic ullam id beatae maxime exercitationem fugit minus laborum magni ratione at, laboriosam assumenda nesciunt nobis autem molestias architecto!</p>

                <span>Author: y6 | dmfshove</span>
            </div>
        </ div>
    )
}