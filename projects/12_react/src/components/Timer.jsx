import { useState } from "react"

export default function Timer() {
    const [now, setNow] = useState(new Date())

    const timeInterval = setInterval(() => setNow(new Date), 1000)

    return (
        <>
            <p>Time: {now.toLocaleTimeString()}</p>
        </>
    )
}