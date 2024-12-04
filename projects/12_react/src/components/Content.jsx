import logo from '../icons/logo.png'

const logoPath = logo
const altText = 'Illusion'

export default function Content() {
    return (
        <>
            <div className="content">
                <div className="content__container">
                    <div className="content__row">
                        <div className="content__column">
                            <p className="content__time">ID: {Math.floor(Math.random() * 100)}</p>

                            <img src={logoPath} alt={altText} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}