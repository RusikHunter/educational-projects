export default function SectionTitle({ isVisible, onChange }) {
    return (
        <>
            <section className="title">
                <h1>Title</h1>
                <button onClick={() => isVisible === 0 ? onChange(1) : onChange(0)}>Show description</button>
            </section>
        </>
    )
}