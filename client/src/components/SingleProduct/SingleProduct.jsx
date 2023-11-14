import React from 'react'
import './SingleProduct.scss'
import Left from "../../assets/category/download-1.jpeg"
import {FaFacebook,FaTwitter,FaLinkedin,FaInstagram,FaCartPlus } from "react-icons/fa"
import RelatedProducts from './RelatedProducts/RelatedProducts'

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
    <div className="layout">
      <div className="single-product-page">
        <div className="left">
         <img src={Left} alt="" />
        </div>
        <div className="right">
          {/* we using api here */}
          <span className="name">Product name</span>
          <span className="price">&#8377;1245</span>
          <span className="desc">product desc</span>

        <div className="cart-buttons">
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          {/* data.data[0] is the product */}
          <button className='add-to-cart-button'>
            <FaCartPlus size={20} />
           ADD TO CART

          </button>
        </div>
          <span className='divider' />
          <div className="info-item">
            <span className="text-bold">
              {/* i have to use api here */}
          Category 
               <br />
            
            <span className='social-icons'>
              <FaFacebook size={16}/>
              <FaTwitter size={16}/>
              <FaInstagram size={16}/>
              <FaLinkedin size={16}/>
              
            </span>
            </span>
          </div>

        </div>
      </div>
      <RelatedProducts/>
    </div>
   </div>
  )
}

export default SingleProduct
