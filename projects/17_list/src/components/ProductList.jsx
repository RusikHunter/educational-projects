import { useState } from "react"
import ProductItem from "./ProductItem"

export default function ProductList() {
    const [products, setProducts] = useState([
        {
            name: "default product"
        },
        {
            name: "product n123"
        },
        {
            name: "apple"
        }
    ])

    return (
        <div>
            <ul>
                {products.map(product => (
                    <li>
                        <ProductItem name={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}