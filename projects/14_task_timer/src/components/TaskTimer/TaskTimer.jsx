import Task from '../Task/Task.jsx'
import { useState, useMemo } from 'react'

export default function TaskTimer() {
    const [countOfSeconds, setCountOfSeconds] = useState(0)
    const [tasksCompleted, setTasksCompleted] = useState(0)

    const sumCount = (sum) => {
        setCountOfSeconds((prev) => prev + sum)
    };

    const nextTaskFocus = () => {
        setTasksCompleted((prev) => prev + 1)
    };

    const totalTime = useMemo(() => countOfSeconds, [countOfSeconds])

    return (
        <>
            <h1>Task Timer</h1>
            <div className="wrap">
                <ul>
                    <Task
                        key={0}
                        sumCount={sumCount}
                        nextTaskFocus={nextTaskFocus}
                        focus={tasksCompleted === 0}
                        name={'Some Todo'}
                    />
                    <Task
                        key={1}
                        sumCount={sumCount}
                        nextTaskFocus={nextTaskFocus}
                        focus={tasksCompleted === 1}
                        name={'شاذ شاذ شاذ أحمق الثدي سلة القرف'}
                    />
                    <Task
                        key={2}
                        sumCount={sumCount}
                        nextTaskFocus={nextTaskFocus}
                        focus={tasksCompleted === 2}
                        name={'عاهرة وقحة عاهرات شاذة'}
                    />
                </ul>
                <p>Total time spent on all tasks: {totalTime} seconds</p>
            </div>
        </>
    )
}