import React from 'react'
import { Button } from '@mui/material'

const ThemeToggle = ({ toggleTheme }) => {
    return (
        <Button variant="contained" onClick={toggleTheme}>
            Переключить тему
        </Button>
    )
}

export default ThemeToggle