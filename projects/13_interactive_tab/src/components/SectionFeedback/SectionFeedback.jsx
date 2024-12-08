import { styled } from 'styled-components'
import { useState } from 'react'

const FormStyledComponent = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
`

export default function SectionFeedback() {
    const [name, setName] = useState('')
    const [reason, setReason] = useState('help')

    return (
        <section className="feedback">
            <h3>Feedback</h3>

            <FormStyledComponent>
                <label htmlFor="name">Your name:</label>
                <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

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
        </section>
    )
}