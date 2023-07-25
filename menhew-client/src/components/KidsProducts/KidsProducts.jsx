import React from 'react';
import './KidsProducts.scss';

import kids from '../../assets/images/a1.jpeg';
import ProductCard from '../ProductCard/ProductCard';

const KidsProducts = ({ category, sort }) => {


    const kidsProducts = [
        {
            id: 1,
            img: kids,
            productName: 'Yellow Dashed T-shirt',
            productPrice: 'Rs. 499',
        },
        {
            id: 2,
            img: kids,
            productName: 'Sports Trouser',
            productPrice: 'Rs. 999',
        },
        {
            id: 3,
            img: kids,
            productName: 'Denim Shirt',
            productPrice: 'Rs. 699',
        }
    ];

    return (
        <div className="kidsProductContainer">
            <div className="kidsProductsBox" key={kidsProducts.id}>
                {
                    kidsProducts?.map(product => (
                        <ProductCard product={product} category={category} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default KidsProducts;