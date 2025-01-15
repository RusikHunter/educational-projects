import { Link } from 'react-router-dom'
import ThemedButton from './ThemedButton'
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from 'react'

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <header style={theme === 'light' ? { backgroundColor: 'lightgray' } : { backgroundColor: 'gray' }}>
            <h2>list :&#9002;</h2>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>

            <ThemedButton />
        </header>
    )
}