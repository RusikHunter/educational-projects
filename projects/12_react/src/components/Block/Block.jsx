import './Block.css'

export default function ({ isActive }) {
    return (
        <div className={isActive ? "block--active" : 'block'}>
            Some content.
        </div>
    )
}