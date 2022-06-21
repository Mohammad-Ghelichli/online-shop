import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage'
//components
import Login from "./components/account/Login"
import Navbar from './components/home/Navbar'
import SignUp from "./components/account/SignUp"
import ProductsContextProvider from './components/cart/context/ProductsContextProvider'
import CartContextProvider from './components/cart/context/CartContextProvider'
import Store from './components/cart/Store'
import Detailes from "./components/cart/shared/Detailes"
import Men from './components/cart/Men'
import Cart from "../src/components/cart/Cart"
import Off from './components/home/Off'
import Footer from './components/home/Footer'
import Women from './components/cart/Women'
import Electronic from './components/cart/Electronic'

function App() {
  return (
    <div>
      <CartContextProvider>
      <ProductsContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/off' element={<Off/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/Detailes/:id' element={<Detailes/>}/>
        <Route path='/Store' element={<Store/>} />
        <Route path='/' element={<HomePage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Electronic' element={<Electronic/>}/>
      </Routes>
      <Footer/>
      </ProductsContextProvider>
      </CartContextProvider>
    </div>  
  )
}

export default App