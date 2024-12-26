import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Header from './components//Header.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
