import React from 'react'
import "./CartItem.scss"
import prod from '../../../assets/category/download-4.jpeg'
import {MdClose} from "react-icons/md";

const CartItem = () => {
  return (
   <div className="cart-products">
    <div className="cart-product">
      <div className="img-container">
           <img src={prod} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <MdClose className="close-btn"/>
        <div className="quantity-buttons">
          <span>-</span>
          <span>5</span>
          <span>+</span>
        </div>
        <div className="text">
          <span>3</span>
          <span>x</span>
          <span>&#8377;4567</span>
        </div>
      </div>
    </div>
   </div>
  )
}

export default CartItem
