import { styled } from 'styled-components'

const FormStyledComponent = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
`

export default function SectionFeedback() {
    return (
        <section className="feedback">
            <h3>Feedback</h3>

            <FormStyledComponent>
                <label htmlFor="name">Your name:</label>
                <input type="text" id="name" />

                <label htmlFor="feedback">Your feedback:</label>
                <select id="feedback">
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="help">Suggest</option>
                </select>

                <button type="submit">Send</button>
            </FormStyledComponent>
        </section>
    )
}