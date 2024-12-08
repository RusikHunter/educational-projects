import React, { useState, useMemo } from "react";

export default function ExpensiveCalculationExample() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")

    const expensiveCalculation = useMemo(() => {
        console.log("Выполняется сложное вычисление...")
        let result = 0
        for (let i = 0; i < 1000; i++) {
            result += i
        }
        return result + count
    }, [count])

    return (
        <div>
            <h1>Результат вычислений: {expensiveCalculation}</h1>
            <button onClick={() => setCount(count + 100)}>Увеличить Count</button>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Введите текст" />
            <p>{value}</p>
        </div>
    )
}