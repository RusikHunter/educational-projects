import { useState, useEffect, useRef, useMemo } from "react"
import ProductItem from "./ProductItem"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState('')

    const inputRefContainer = useRef(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Ошибка загрузки данных:", error)
            }
        }

        fetchProducts()
    }, [])

    const renderedProducts = useMemo(() => {
        return products.map((product, index) => (
            <li key={index}>
                <ProductItem name={product.name} />
            </li>
        ));
    }, [products])

    return (
        <div>
            <ul>
                {renderedProducts}
            </ul>

            <form>
                <label htmlFor="nameInput">Product name:</label>
                <input ref={inputRefContainer} type="text" id="nameInput" />

                <button type="button" onClick={() => setProductName(inputRefContainer.current.value)}>Add product</button>
            </form>

            <p>Result: {productName}</p>
        </div>
    )
}