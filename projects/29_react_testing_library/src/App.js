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
import { Routes, Route, Link } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"
import UserDetailsPage from "./pages/UserDetailsPage"
import Users from "./users/Users"


function App() {

    return (
        <>
            <Link to="/" data-testid="main-link">main</Link>
            <Link to="/about" data-testid="about-link">about</Link>
            <Link to="/users" data-testid="users-link">users</Link>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<ErrorPage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetailsPage />} />
            </Routes>
        </>
    )
}

export default App
