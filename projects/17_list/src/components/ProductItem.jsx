export default function ProductItem({ name, onDelete }) {
    return (
        <div>
            <p>Product: {name}</p>

            <button onClick={onDelete}>Delete product</button>
        </div>
    )
}