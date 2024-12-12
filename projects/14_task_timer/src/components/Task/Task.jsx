export default function Task(props) {
    return (
        <div className="task">
            <h3>Task: {props.name}</h3>
            <p>Status: {props.status}</p>
        </div>
    )
}