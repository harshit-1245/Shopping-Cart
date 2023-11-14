import React from 'react'
import './Cart.scss'
import {AiOutlineClose} from "react-icons/ai"
import {BsCartX} from "react-icons/bs"
import CartItem from './CartItem/CartItem'


const Cart = ({setShowCart}) => {
  return (
    <div className="cart-panel">
    <div className="opac-layer"></div>
    <div className="cart-content">
      <div className="cart-header">
        <span className="heading">Shopping Cart</span>
        <span className='close-btn'><AiOutlineClose onClick={()=>setShowCart(false)}/>
        <span className='text' onClick={()=>setShowCart(false)}>close</span></span>
      </div>
      {/* Now design for empty cart */}
         {/* this will run condtionally */}

         {/* if it is false then appear */}
    <div className="empty-cart">
      <BsCartX/>
      <span>No products in the cart</span>
      <button className='return-cta'>RETURN TO SHOP</button>
     </div>
       

       {/* if it is true then it will appear */}
      
       <CartItem />
       <div className="cart-footer">
        <div className="subtotal">
          <span className='text'>Subtotal</span>
          <span className='text total'>&#8377;Subtotal</span>
        </div>
        <div className="button">
          <button className='checkout-cta'>
            Checkout
            </button>
        </div>
       </div>
      
    </div>
  </div>
  )
}

export default Cart
