// import React, { useState, useEffect } from "react"

// function App() {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [value, setValue] = useState('')

//     const onClick = () => setToggle(prev => !prev)

//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])

//     return (
//         <>
//             {toggle && <div data-testid="toggle-element">Enabled</div>}
//             {data && <div>data</div>}
//             <h1 style={{ color: 'red' }}>Hello world!</h1>
//             <button data-testid="toggle-button" onClick={onClick}>Click me!</button>
//             <input data-testid="value-input" type="text" placeholder="Input value" onChange={(e) => setValue(e.target.value)} />
//             <h2 data-testid="value-element">{value}</h2>
//         </>
//     )
// }

// export default App

import React from "react"
import AppRouter from "./router/AppRouter"
import { Link } from "react-router-dom"



function App() {

    return (
        <>
            <Link to="/" data-testid="main-link">main</Link>
            <Link to="/about" data-testid="about-link">about</Link>
            <Link to="/users" data-testid="users-link">users</Link>
            <AppRouter />
        </>
    )
}

export default App
