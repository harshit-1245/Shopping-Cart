// Category.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss';

function Category({ categories }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='shop-by-category'>
        <div className='categories'>
          {categories?.map((item) => (
            <div key={item.id} className="category" onClick={() => navigate(`/category/${item}`)}>
              <p className="category-name">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
