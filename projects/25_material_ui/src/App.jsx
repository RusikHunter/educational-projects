import React, { useState } from 'react'
import { ThemeProvider, CssBaseline, Container, Typography } from '@mui/material'
import { lightTheme, darkTheme } from './theme'
import ThemeToggle from './components/ThemeToggle'

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container>
                <Typography variant="h4" gutterBottom>
                    Мой первый проект с Material UI!
                </Typography>
                <ThemeToggle toggleTheme={toggleTheme} />
            </Container>
        </ThemeProvider>
    )
}

export default App