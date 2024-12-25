import { useState } from "react"

export default function AboutPage() {
    const [isShowed, setIsShowed] = useState(true)

    const toggleInfo = () => {
        setIsShowed(!isShowed)
    }

    return (
        <>
            <h2>About</h2>

            <button onClick={toggleInfo}>Show/hide info</button>

            <div style={isShowed === true ? { display: 'block' } : { display: 'none' }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea recusandae hic ullam id beatae maxime exercitationem fugit minus laborum magni ratione at, laboriosam assumenda nesciunt nobis autem molestias architecto!</p>

                <span>Author: y6 | dmfshove</span>
            </div>
        </>
    )
}