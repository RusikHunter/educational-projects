import React, { useState, useEffect } from "react"

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prev => !prev)

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    return (
        <>
            {toggle && <div data-testid="toggle-element">Enabled</div>}
            {data && <div>data</div>}
            <h1 style={{ color: 'red' }}>Hello world!</h1>
            <button data-testid="toggle-button" onClick={onClick}>Click me!</button>
            <input data-testid="value-input" type="text" placeholder="Input value" onChange={(e) => setValue(e.target.value)} />
            <h2 data-testid="value-element">{value}</h2>
        </>
    )
}

export default App
