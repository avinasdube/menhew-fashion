import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.scss';

const ProductCard = ({ product, category }) => {
    return (
        <div className="ProductCard">
            <div className="productsBox">
                <Link className='link' to={`/categories/${category}/product/${product.id}`}>
                    <div className="productCard" >
                        <div className="productImage"><img src={product.img} alt=''></img></div>
                        <div className="productName">{product.productName}</div>
                        <div className="productPrice">&#8377; {product.productPrice}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard