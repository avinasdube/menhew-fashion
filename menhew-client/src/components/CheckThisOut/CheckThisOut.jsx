import React from 'react';
import './CheckThisOut.scss';

import i1 from '../../assets/images/i2.jpg';
import s1 from '../../assets/images/s2.jpg';
import d1 from '../../assets/images/d1.jpg';

import upright from '../../assets/icons/upright.png';

const CheckThisOut = () => {

    const checkThisOutProducts = [
        {
            id: 1,
            img: i1,
            uprightSign: upright,
            tag: 'Check This Out !'
        },
        {
            id: 2,
            img: s1,
            uprightSign: upright,
            tag: 'Check This Out !'
        },
        {
            id: 3,
            img: d1,
            uprightSign: upright,
            tag: 'Check This Out !'
        }
    ]
    return (
        <div className="checkThisOutContainer">
            <div className="checkThisOutCards">
                {checkThisOutProducts.map(product => (
                    <div className="checkThisOutCard" key={product.id}>
                        <img src={product.img} alt=''></img>
                        <button className="uprightSign"><img src={product.uprightSign} alt=''></img></button>
                        <div className="tag">{product.tag}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CheckThisOut;