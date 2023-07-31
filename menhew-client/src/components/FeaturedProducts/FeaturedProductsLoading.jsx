import React from 'react';
import './FeaturedProducts.scss'

const FeaturedProductsLoading = () => {

    const dummyProductCard = [
        {
            for: 's1',
            id: 'slide1',
            key: 1,
            img: '',
            sCount: '',
            price: '',
        },
        {
            for: 's2',
            id: 'slide2',
            key: 2,
            img: '',
            sCount: '',
            price: '',
        },
        {
            for: 's3',
            id: 'slide3',
            key: 3,
            img: '',
            sCount: '',
            price: '',
        },
        {
            for: 's4',
            id: 'slide4',
            key: 4,
            img: '',
            sCount: '',
            price: '',
        },
        {
            for: 's5',
            id: 'slide5',
            key: 5,
            img: '',
            sCount: '',
            price: '',
        }
    ]

    return (
        <div className="productsCardContainer">
            <input type='radio' name='slider' id='s2' checked></input>
            <input type='radio' name='slider' id='s3' checked></input>
            <input type='radio' name='slider' id='s4' checked></input>
            <input type='radio' name='slider' id='s5' checked></input>
            <input type='radio' name='slider' id='s1' checked></input>

            <div className="cards">

                {dummyProductCard.map((featProduct) => (
                    <label htmlFor={featProduct.for} id={featProduct.id} key={featProduct.key}>
                        <div className="card">
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProductsLoading;