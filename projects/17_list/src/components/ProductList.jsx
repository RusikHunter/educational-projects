import { useState, useEffect } from "react"
import ProductItem from "./ProductItem"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Ошибка загрузки данных:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <ProductItem name={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}