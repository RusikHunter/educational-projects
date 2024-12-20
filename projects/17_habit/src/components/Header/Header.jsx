import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoTextStyledElement = styled.p`
    font-size: 24px;
    color: #000000;
`

const LogoLetterStyledElement = styled.span`
    color: #406BD9;
`

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div className="header__row row">
                        <div className="header__column header__column--first">
                            <a href="#">
                                <LogoTextStyledElement>habit<LogoLetterStyledElement className="blue">s</LogoLetterStyledElement></LogoTextStyledElement>
                            </a>
                        </div>
                        <div className="header__column header__column--second">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/">Main</Link>
                                    </li>
                                    <li>
                                        <Link to="/habit">Habit</Link>
                                    </li>
                                    <li>
                                        <Link to="/progress">Progress</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header__column header__column--third"></div>
                    </div>
                </div>
            </header>
        </>
    )
}