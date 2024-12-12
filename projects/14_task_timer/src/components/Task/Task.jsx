import { useState, useEffect, useRef } from "react"

export default function Task(props) {
    const [seconds, setSeconds] = useState(0)
    const [status, setStatus] = useState('Not started')

    let timeInterval = useRef()

    useEffect(() => {
        timeInterval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)
    }, [status])

    const startDoing = () => {
        setStatus('In process...')
    }

    const stopDoing = () => {
        setStatus('Completed')
        clearInterval(timeInterval.current)
    }

    return (
        <div className="task">
            <h3>Task: {props.name}</h3>
            <p>Status: {status}</p>
            <p>Current execution time: {seconds}</p>

            <button onClick={startDoing}>Start doing...</button>
            <button onClick={stopDoing}>Stop doing...</button>
        </div>
    )
}