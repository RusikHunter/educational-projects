import ReactDOM from "react-dom"

export default function Modal({ isOpen, closeModal, deleteProduct }) {
    const a = () => console.log('abc')

    return ReactDOM.createPortal(
        <dialog open={isOpen}>
            <p>Delete product?</p>

            <button onClick={deleteProduct}>Yes</button>
            <button onClick={closeModal}>No</button>
        </dialog>,
        document.getElementById("modal")
    )
}