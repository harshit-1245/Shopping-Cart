import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import './Home.scss';
import Banner from './Banner/Banner';
import Category from '../Home/Category/Category';
import Products from '../Products/Products';
import { Context } from '../../utils/context';

const Home = () => {
  const {categories, setCategories,products,setProducts} = useContext(Context);

  const getCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    getCategories();
   getProducts()
  }, []);
 

  
  return (
    <div>
      <Banner/> 
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Products headingText="Popular Products" products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
