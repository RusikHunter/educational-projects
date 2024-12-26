import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import ProductItem from "./ProductItem"

export default function ProductList() {
    const [products, setProducts] = useState([])

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

    const handleDeleteProduct = useCallback((productName) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.name !== productName)
        );
    }, [])

    const renderedProducts = useMemo(() => {
        return products.map((product, index) => (
            <li key={index}>
                <ProductItem name={product.name} onDelete={() => handleDeleteProduct(product.name)} />
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

                <button type="button" onClick={() => {
                    const newProduct = {
                        name: `${inputRefContainer.current.value}`
                    }

                    setProducts([...products, newProduct])
                }}>Add product</button>
            </form>
        </div>
    )
}