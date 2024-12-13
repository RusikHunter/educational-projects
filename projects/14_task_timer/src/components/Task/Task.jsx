import { useState, useEffect, useRef } from 'react'

export default function Task(props) {
    const [seconds, setSeconds] = useState(0)
    const [status, setStatus] = useState('Not started')
    const [initialized, setInitialized] = useState(false)

    const timeInterval = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        if (!initialized) {
            setInitialized(true)
            return
        }

        if (status === 'In process...') {
            timeInterval.current = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 1000)
        }

        return () => clearInterval(timeInterval.current)
    }, [status])

    useEffect(() => {
        if (props.focus) {
            buttonRef.current.focus()
        }
    }, [props.focus])

    const startDoing = () => {
        setStatus('In process...')
    };

    const stopDoing = () => {
        setStatus('Completed')
        clearInterval(timeInterval.current)
        props.sumCount(seconds)
        props.nextTaskFocus()
    };

    const resetTimer = () => {
        setSeconds(0)
        setStatus('Not started')
        clearInterval(timeInterval.current)
    };

    return (
        <div className="task">
            <h3>Task: {props.name}</h3>
            <p>Status: {status}</p>
            <p>Current execution time: {seconds} seconds</p>

            <button ref={buttonRef} onClick={startDoing}>Start doing...</button>
            <button onClick={stopDoing}>Stop doing...</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}