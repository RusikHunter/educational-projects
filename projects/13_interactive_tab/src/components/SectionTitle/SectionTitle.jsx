export default function SectionTitle({ isVisible, onChange }) {
    return (
        <>
            <section className="title">
                <h1>Title</h1>
                <button onClick={() => isVisible === false ? onChange(true) : onChange(false)}>Show description</button>
            </section>
        </>
    )
}