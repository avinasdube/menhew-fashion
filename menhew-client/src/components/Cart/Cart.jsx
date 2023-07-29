import React from 'react';
import './Cart.scss';

import avinas from '../../assets/images/a1.jpeg';

const Cart = () => {

  return (
    <div className="cartContainer">

      <div className="productCardsBox">
        <div className="productCard" id='1'>
          <div className="cartLeft">
            <img src={avinas} alt=''></img>
          </div>
          <div className="cartRight">
            <div className="productName">Cotton White T-Shirt</div>
            <div className="productPrice"> 2 * &#8377; 699</div>
          </div>
        </div>

        <div className="productCard" id='2'>
          <div className="cartLeft">
            <img src={avinas} alt=''></img>
          </div>
          <div className="cartRight">
          <div className="productName">Supima Men Pant</div>
            <div className="productPrice"> 5 * &#8377; 699</div>
          </div>
        </div>

        <div className="productCard" id='3'>
          <div className="cartLeft">
            <img src={avinas} alt=''></img>
          </div>
          <div className="cartRight">
          <div className="productName">Supima Men Pant</div>
            <div className="productPrice"> 5 * &#8377; 699</div>
          </div>
        </div>

        <div className="productCard" id='4'>
          <div className="cartLeft">
            <img src={avinas} alt=''></img>
          </div>
          <div className="cartRight">
          <div className="productName">Supima Men Pant</div>
            <div className="productPrice"> 5 * &#8377; 699</div>
          </div>
        </div>
      </div>

      <div className="checkoutBox">
        <div className="totalPriceCount">
          <div className="subtotal">Subtotal</div>
          <div className="subtotalCount">&#8377; 2000</div>
        </div>
        <div className="checkoutButton">
          <button>Proceed to Checkout</button>
          <button>Reset Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Cart;