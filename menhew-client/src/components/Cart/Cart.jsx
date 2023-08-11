import React from 'react';
import './Cart.scss';

import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {

  const products = useSelector(state => state.cart.products)

  const totalPrice = ()=>{
    let total = 0;
    products.forEach((item)=>(total += item.productQuantity * item.price));
    return total.toFixed(2)
  }

  const dispatch = useDispatch();

  return (
    <div className="cartContainer">

      <div className="productCardsBox">
        {products.map((item) =>
        (<div className="productCard" key={item.id}>
          <div className="cartLeft">
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt=''></img>
          </div>
          <div className="cartRight">
            <div className="productName">{item.title} </div>
            <div className="productPrice">{item.productQuantity} x &#8377; {item.price}</div>
            <div className="removeButton"><button onClick={()=>dispatch(removeItem(item.id))}>Remove Item</button></div>
          </div>
        </div>))}
      </div>

      <div className="checkoutBox">
        <div className="totalPriceCount">
          <div className="subtotal">Subtotal</div>
          <div className="subtotalCount">&#8377; {totalPrice()}</div>
        </div>
        <div className="checkoutButton">
          <button>Proceed to Checkout</button>
          <button onClick={()=>dispatch(resetCart())}>Reset Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Cart;