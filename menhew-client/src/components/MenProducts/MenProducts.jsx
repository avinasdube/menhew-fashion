import React from 'react';
import './MenProducts.scss';

import men from '../../assets/images/a4.jpeg';
import ProductCard from '../ProductCard/ProductCard';

const MenProducts = ({category, sort}) => {

    const menProducts = [
        {
            id: 1,
            img: men,
            productName: 'Printed T-shirt',
            productPrice: '499',
        },
        {
            id: 2,
            img: men,
            productName: 'Black Jeans',
            productPrice: '999',
        },
        {
            id: 3,
            img: men,
            productName: 'Fancy Trackpant',
            productPrice: '699',
        }
    ];

    return (
        <div className="menProductContainer">
            <div className="menProductsBox" key={menProducts.id}>
                {
                    menProducts?.map(product =>(
                        <ProductCard product={product} category={category} key={product.id}/>
                    ))
                }
            </div>

        </div>
    )
}

export default MenProducts;