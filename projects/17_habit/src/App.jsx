import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { ThemeProvider } from './context/ThemeContext'
// import { HabitProvider } from './context/HabitContext'
import Header from './components/Header/Header'
import HabitListPage from './pages/HabitListPage'
import HabitDetailPage from './pages/HabitDetailPage'
import ProgressPage from './pages/ProgressPage'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HabitListPage />} />
                <Route path="/habit" element={<HabitDetailPage />} />
                <Route path="/progress" element={<ProgressPage />} />
            </Routes>
        </Router>
    )
}

export default App