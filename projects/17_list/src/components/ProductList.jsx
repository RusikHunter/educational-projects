import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import ProductItem from "./ProductItem"
import Modal from "./Modal"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from 'react'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [productNameToDelete, setProductNameToDelete] = useState('')
    const { theme, toggleTheme } = useContext(ThemeContext)

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

    const handleDeleteProduct = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    const deleteProduct = useCallback(() => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.name !== productNameToDelete)
        )

        setIsModalOpen(false)
    })

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    const renderedProducts = useMemo(() => {
        return products.map((product, index) => (
            <li key={index}>
                <ProductItem name={product.name} onDelete={() => {
                    setProductNameToDelete(product.name)

                    handleDeleteProduct()
                }} />
            </li>
        ));
    }, [products])

    return (
        <div style={theme === 'light' ? { backgroundColor: 'lightgray' } : { backgroundColor: 'gray' }}>
            <Modal isOpen={isModalOpen} closeModal={closeModal} deleteProduct={deleteProduct} />

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