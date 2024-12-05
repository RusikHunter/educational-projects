import logo from '../assets/logo.png'
import data from '../assets/data.json'
import Button from './Button/Button.jsx'

const logoPath = logo
const altText = 'Illusion'

function ListItem({ title, description }) {
    return (
        <>
            <li className="content__list-item">
                <h6 className="content__title">{title}</h6>
                <p className="content__description">{description}</p>
            </li>
        </>
    )
}

export default function Content() {
    return (
        <>
            <div className="content">
                <div className="content__container">
                    <div className="content__row">
                        <div className="content__column">
                            <p className="content__time">ID: {Math.floor(Math.random() * 100)}</p>

                            <img className="content__image" src={logoPath} alt={altText} />

                            <ul className="content__list">
                                <ListItem title={data[0].title} description={data[0].description} />
                                <ListItem title={data[1].title} description={data[1].description} />
                                <ListItem title={data[2].title} description={data[2].description} />
                            </ul>

                            <Button text={'Click'} />
                            <Button text={'Double click'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}