import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './components//Header.jsx'

import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
