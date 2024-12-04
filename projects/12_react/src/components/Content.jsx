export default function Content() {
    return (
        <>
            <div className="content">
                <div className="content__container">
                    <div className="content__row">
                        <div className="content__column">
                            <p className="content__time">ID: {Math.floor(Math.random() * 100)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}