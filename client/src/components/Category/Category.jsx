import React, { useEffect, useState } from 'react'
import './Category.scss'
import Products from '../Products/Products'
import { useParams } from 'react-router-dom'

const Category = () => {
const {id} = useParams();
const [data,setData]=useState([]);

useEffect(()=>{
  const fetchData=async()=>{
    const response= await fetch(`https://fakestoreapi.com/products/${id}`)
             .then((res)=>{
               setData(res);
             })
            
   }
   fetchData();
   
},[])



 
  return (
    <div className='category-main-content'>
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Products innerPage={true} products={data}/>
      </div>
    </div>
  )
}

export default Category
