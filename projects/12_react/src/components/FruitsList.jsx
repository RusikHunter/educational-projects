export default function FruitsList() {
    const fruits = ["apple", "banana", "cherry"]

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    )
}