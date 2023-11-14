import React from 'react'
import Cat from "../../../assets/category/download-1.jpeg"
import {useNavigate} from  "react-router-dom";
import "./Category.scss";


function Category({categories}) {
  const navigate=useNavigate();
  
 
  //basically we run this through loop, using api calling
  return (
    <>
    <div className='shop-by-category'>
      <div className='categories'>
       <div className="category">
        <img src={Cat} alt="" />
       </div>
    
      </div>
    </div>
     </>
  )
}

export default Category;
