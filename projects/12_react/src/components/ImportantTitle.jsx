export default function ({ isVeryImportant }) {
    return (
        <h1>{isVeryImportant ? 'Very important!' : 'Just important.'}</h1>
    )
}