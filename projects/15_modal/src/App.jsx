import { use } from "react"
import Modal from "./Components/Modal"
import { useState } from "react"

function App() {
    const [modal, setModal] = useState(false)

    return (
        <>
            <h1>Some title...</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit iusto cupiditate mollitia, excepturi, voluptate voluptatem quisquam voluptas corrupti repudiandae facilis ullam quasi ipsam deleniti magnam quod optio ut perferendis nesciunt!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi earum minima praesentium ipsam iure ipsum, rerum esse cum! Ad tempore pariatur, consectetur temporibus commodi repudiandae fugiat nemo quibusdam repellat. Error.</p>
            <button onClick={() => setModal(true)}>Show modal</button>
            <Modal open={modal} />
        </>
    )
}

export default App
