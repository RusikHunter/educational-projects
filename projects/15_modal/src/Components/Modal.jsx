import { createPortal } from 'react-dom'

export default function Modal({ open }) {
    return createPortal(
        <dialog open={open}>
            <p>Some content...</p>
        </dialog>,
        document.getElementById('modal')
    )
}