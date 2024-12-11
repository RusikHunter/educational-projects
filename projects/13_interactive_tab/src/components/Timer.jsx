import { useState, useEffect, useRef } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const timerIntervalRef = useRef()

    const buttonStartRef = useRef()

    const handleStart = () => {
        setIsActive(true)
        buttonStartRef.current.style.border = "none"
    }

    const handleStop = () => {
        setIsActive(false)
        buttonStartRef.current.style.border = "3px solid red"
    }

    useEffect(() => {
        if (isActive) {
            timerIntervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000)
        } else {
            clearInterval(timerIntervalRef.current)
            setSeconds(prev => prev - prev)
            timerIntervalRef.current = false
        }
    }, [isActive])

    return (
        <>
            <p>Time: {seconds}</p>
            <button ref={buttonStartRef} onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}