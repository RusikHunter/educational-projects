import './Button.css'

export default function Button(props) {
    function logContent() {
        console.log('Some content.')
    }

    return (
        <button className="button" onClick={logContent}>
            {props.text}
        </button>
    )
} 