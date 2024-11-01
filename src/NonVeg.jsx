import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';

function NonVeg() {
  const nonveg=useSelector(state=>state.Products.NonVeg);
  const dispatch=useDispatch();
  const items=nonveg.map((product,index)=>(<li key={index}>{product.name}:${product.price}
  <button id='bt' onClick={()=>dispatch(addToCart(product))}>Add to cart</button></li>))
  return (
    <>
    <h1>Non Veg Items</h1>
<ul>{items}</ul>
    </>
  )
}

export default NonVeg;
