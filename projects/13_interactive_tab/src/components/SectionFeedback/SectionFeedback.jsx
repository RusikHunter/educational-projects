import { styled } from 'styled-components'
import { useEffect, useState, useRef } from 'react'

const FormStyledComponent = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
`

export default function SectionFeedback() {
    const [name, setName] = useState('')
    const [reason, setReason] = useState('help')
    const [isError, setIsError] = useState(false)
    const [feedbackCount, setFeedbackCount] = useState(0)

    const counterRef = useRef()

    const handleClickCounter = () => {
        setFeedbackCount(feedbackCount + 1)
    }

    useEffect(() => {
        if (feedbackCount > 10) {
            console.log('More than 10')
            counterRef.current.style.color = "red"
        }
    }, [feedbackCount])

    return (
        <section className="feedback">
            <h3>Feedback</h3>

            <FormStyledComponent>
                <label htmlFor="name">Your name:</label>
                <input type="text" id="name" value={name} onChange={event => {
                    setName(event.target.value)
                    setIsError(event.target.value.trim().length === 0)
                }}
                    style={{ border: isError ? "3px solid red" : null }} />

                <label htmlFor="reason">Your feedback:</label>
                <select id="reason" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">Suggest</option>
                </select>

                <button type="submit">Send</button>

                <pre>
                    Name: {name}
                    Reason: {reason}
                </pre>
            </FormStyledComponent>

            <button onClick={handleClickCounter}>Add feedback count</button>
            <p ref={counterRef}>Feedback count: {feedbackCount}</p>
        </section>
    )
}