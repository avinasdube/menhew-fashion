import React from 'react';
import './FeaturedProducts.scss'

const FeaturedProductsLoading = () => {

    const dummyProductCard = [
        {
            for: 's1',
            id: 'slide1',
            key: 1,
        },
        {
            for: 's2',
            id: 'slide2',
            key: 2,
        },
        {
            for: 's3',
            id: 'slide3',
            key: 3,
        },
        {
            for: 's4',
            id: 'slide4',
            key: 4,
        },
        {
            for: 's5',
            id: 'slide5',
            key: 5,
        }
    ]

    return (
        <div className="productsCardContainer">
            <input type='radio' name='slider' id='s2' checked readOnly></input>
            <input type='radio' name='slider' id='s3' checked readOnly></input>
            <input type='radio' name='slider' id='s4' checked readOnly></input>
            <input type='radio' name='slider' id='s5' checked readOnly></input>
            <input type='radio' name='slider' id='s1' checked readOnly></input>

            <div className="cards">

                {dummyProductCard.map((featProduct) => (
                    <label htmlFor={featProduct.for} id={featProduct.id} key={featProduct.key}>
                        <div className="cardLoad">
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProductsLoading;