import Button from "../Button/Button"
import { styled } from 'styled-components'

const SectionDescriptionStyledComponent = styled.section`
    background-color: cyan;
`

export default function SectionDescription() {
    return (
        <>
            <SectionDescriptionStyledComponent>
                <p>Description</p>
                <Button />
            </SectionDescriptionStyledComponent>
        </>
    )
}