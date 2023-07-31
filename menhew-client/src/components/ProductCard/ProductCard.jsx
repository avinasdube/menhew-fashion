import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.scss';

const ProductCard = ({ product, category }) => {
    return (
        <div className="ProductCard">
            <div className="productsBox">
                <Link className='link' to={`/categories/${category}/product/${product.id}`}>
                    <div className="productCard" >
                        <div className="productImage"><img src={process.env.REACT_APP_UPLOAD_URL + product?.attributes?.img?.data?.attributes?.url} alt=''></img></div>
                        <div className="productName">{product?.attributes?.title}</div>
                        <div className="productPrice">&#8377; {product?.attributes.price}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard