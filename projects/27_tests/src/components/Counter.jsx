import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p data-testid="count">Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Counter