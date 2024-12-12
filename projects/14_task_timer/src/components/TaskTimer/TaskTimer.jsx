import Task from '../Task/Task.jsx'

export default function TaskTimer() {
    return (
        <>
            <h1>Task Timer</h1>
            <div className="wrap">
                <Task name={'some todo'} />
                <Task name={'شاذ شاذ شاذ أحمق الثدي سلة القرف'} />
                <Task name={'عاهرة وقحة عاهرات شاذة'} />
            </div>
        </>
    )
}

// الله أكبر