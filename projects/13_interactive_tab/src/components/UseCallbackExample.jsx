import React, { useState, useCallback } from "react"

export default function ParentComponent() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <ChildComponent onIncrement={increment} />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
        </div>
    )
}

const ChildComponent = React.memo(({ onIncrement }) => {
    console.log("Рендер дочернего компонента")
    return <button onClick={onIncrement}>Увеличить счетчик</button>
})