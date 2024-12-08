import { useEffect } from "react"
import Button from "../Button/Button"
import { styled } from 'styled-components'

const SectionDescriptionStyledComponent = styled.section`
    background-color: cyan;
`

export default function SectionDescription() {
    useEffect(() => {
        console.log('Showed')

        return () => console.log('Hidden')
    }, [])

    return (
        <>
            <SectionDescriptionStyledComponent>
                <p>Description</p>
                <Button />
            </SectionDescriptionStyledComponent>
        </>
    )
}