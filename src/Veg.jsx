import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';

function Veg() {
  const vegProducts=useSelector((state)=>state.Products.Veg);
  const dispatch=useDispatch();
  const items=vegProducts.map((product,index)=><li key={index}>{product.name}:${product.price}
  <button id='bt' onClick={()=>dispatch(addToCart(product))}>Add to cart</button></li>)

  return (
    <>
      <h1>veg products</h1>
      <ul>{items}</ul>
      
    </>
  )
}

export default Veg;
