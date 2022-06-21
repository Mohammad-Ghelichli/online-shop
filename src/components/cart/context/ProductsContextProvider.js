import React, { createContext, useEffect, useState } from 'react'
import { data } from '../shared/data'
export const ProductsContext=createContext()
function ProductsContextProvider(props) {
    const[products,setProducts]=useState([])
    useEffect(()=>{
      setProducts(data)
    },[])
  return (
      <ProductsContext.Provider value={products}>
          {props.children}
      </ProductsContext.Provider>
    
  )
}

export default ProductsContextProvider