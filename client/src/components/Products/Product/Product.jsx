import React from 'react'
import './Product.scss'
import prod from "../../../assets/category/download-1.jpeg"

const Product = () => {
  return (
    <div className='product-card'>
     <div className="thumbnail">
      <img src={prod} alt="" />
     </div>
     <div className="prod-details">
      <span className='name'>Product name</span>
      <div className="price">&#8377;499</div>
     </div>
    </div>
  )
}

export default Product
