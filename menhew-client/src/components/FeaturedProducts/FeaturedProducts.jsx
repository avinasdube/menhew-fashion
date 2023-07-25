import React from 'react';
import './FeaturedProducts.scss';

import a1 from '../../assets/images/a1.jpeg';
import a2 from '../../assets/images/a2.jpg';
import a3 from '../../assets/images/a3.jpg';
import a4 from '../../assets/images/a4.jpeg';
import a5 from '../../assets/images/a5.jpeg';

import longarrow from '../../assets/icons/longarrow.png';

const FeaturedProducts = () => {

    const featuredProducts = [
        {
            for: 's1',
            id: 'slide1',
            key: 1,
            img: a1,
            sCount: '02',
            longArrow: longarrow,
            price: '499',
        },
        {
            for: 's2',
            id: 'slide2',
            key: 2,
            img: a2,
            sCount: '03',
            longArrow: longarrow,
            price: '499',
        },
        {
            for: 's3',
            id: 'slide3',
            key: 3,
            img: a3,
            sCount: '04',
            longArrow: longarrow,
            price: '499',
        },
        {
            for: 's4',
            id: 'slide4',
            key: 4,
            img: a4,
            sCount: '05',
            longArrow: longarrow,
            price: '499',
        },
        {
            for: 's5',
            id: 'slide5',
            key: 5,
            img: a5,
            sCount: '01',
            longArrow: longarrow,
            price: '499',
        }
    ];

    return (
        <div className="productsCardContainer">
            <input type='radio' name='slider' id='s1' checked></input>
            <input type='radio' name='slider' id='s2' checked></input>
            <input type='radio' name='slider' id='s3' checked></input>
            <input type='radio' name='slider' id='s4' checked></input>
            <input type='radio' name='slider' id='s5' checked></input>

            <div className="cards">
                {featuredProducts.map(featProduct => (
                    <label for={featProduct.for} id={featProduct.id} key={featProduct.key}>
                    <div className="card">
                        <img src={featProduct.img} alt=''></img>
                        <div className='sCount'>{featProduct.sCount}</div>
                        <div className="priceSection">
                            <div className="longArrow"><img src={featProduct.longArrow} alt=''></img></div>
                            <div className="price">&#8377; {featProduct.price}</div>
                        </div>
                    </div>
                </label>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;