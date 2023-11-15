import React, { createContext, useState } from 'react'
export const Context=createContext();
export const AppContext = ({children}) => {
  const [categories,setCategories]=useState([]);
  const [products,setProducts]=useState({});



  return (
   <Context.Provider value={{categories,setCategories,products,setProducts,}}>
      {children}
   </Context.Provider>
  )
}


