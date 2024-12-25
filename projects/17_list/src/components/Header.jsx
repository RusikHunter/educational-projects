import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
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
        </>
    )
}