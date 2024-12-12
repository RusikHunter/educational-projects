import Task from '../Task/Task.jsx'

export default function TaskTimer() {
    return (
        <>
            <h1>Task Timer</h1>
            <div className="wrap">
                <Task name={'some todo'} status={'In progress...'} />
            </div>
        </>
    )
}