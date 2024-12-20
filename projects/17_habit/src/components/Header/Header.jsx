import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoTextStyledElement = styled.p`
    font-size: 24px;
    color: #000000;
`

const LogoLetterStyledElement = styled.span`
    color: #406BD9;
`

const NavigationStyledElement = styled.nav`
    width: 100%;
`

const UnorderedListStyledElement = styled.ul`
display: flex; /* Устанавливаем flexbox для горизонтального размещения */
justify-content: space-between; /* Распределяем элементы с равными отступами */
padding: 0; /* Убираем отступы по умолчанию у списка */
margin: 0; /* Убираем внешние отступы */
list-style: none; /* Убираем маркеры списка */
width: 100%; /* Растягиваем список на всю ширину родителя */
gap: 25px;
`

const ListItemStyledElement = styled.li`
flex: 1; /* Каждый элемент занимает равное пространство */
text-align: center; /* Центрируем текст в каждом элементе */
`

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div className="header__row row">
                        <div className="header__column header__column--first column">
                            <a href="#">
                                <LogoTextStyledElement>habit<LogoLetterStyledElement className="blue">s</LogoLetterStyledElement></LogoTextStyledElement>
                            </a>
                        </div>
                        <div className="header__column header__column--second column">
                            <NavigationStyledElement>
                                <UnorderedListStyledElement>
                                    <ListItemStyledElement>
                                        <Link to="/">Main</Link>
                                    </ListItemStyledElement>
                                    <ListItemStyledElement>
                                        <Link to="/habit">Habit</Link>
                                    </ListItemStyledElement>
                                    <ListItemStyledElement>
                                        <Link to="/progress">Progress</Link>
                                    </ListItemStyledElement>
                                </UnorderedListStyledElement>
                            </NavigationStyledElement>
                        </div>
                        <div className="header__column header__column--third column"></div>
                    </div>
                </div>
            </header>
        </>
    )
}