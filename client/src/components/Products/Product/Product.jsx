import React from 'react'
import './Product.scss'
import prod from "../../../assets/category/download-1.jpeg"

const Product = ({id,data}) => {
  return (
    <div className='product-card'>
     <div className="thumbnail">
      <img src={data.image} alt="" />
     </div>
     <div className="prod-details">
      <span className='name'>{data.title}</span>
      <div className="price">&#8377;{data.price}</div>
     </div>
    </div>
  )
}

export default Product
