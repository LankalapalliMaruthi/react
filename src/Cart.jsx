/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from 'react-redux';
import { addPurchase, decrement, increment, remove } from './store';
import { useRef, useState } from 'react';

function Cart() {
  // const totalPrice=useRef(null);
  // const discountPrice=useRef(null);
  // const discPercent=useRef(null);
  // const discAmount=useRef(null);
  
  const [discPercent, setDiscPercent] = useState(0);
  const[couponCode,setCouponCode]=useState(0);
  const[couponDiscountPercent,setCopounDiscountPercent]=useState(0);
  

  const carts=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const items=carts.length==0?(<p>cart is empty</p>):(carts.map((item,index)=>(<li key={index}>{item.name}-price:${item.price}-<button onClick={()=>dispatch(increment(item))}>+</button><button onClick={()=>dispatch(decrement(item))}>-</button>    :       {item.quantity}  <button onClick={()=>dispatch(remove(item))}>remove</button></li>)));
  const handleApplyCoupon=()=>{
    switch(couponCode){
      case "Ratan10":
        setCopounDiscountPercent(10);
        break;
        case "Ratan20":
        setCopounDiscountPercent(20);
        break;
        case "Ratan30":
        setCopounDiscountPercent(30);
        break;
        default:
          alert("invalid coupon ");
          setCopounDiscountPercent(0);

    }
  }
  const applyDiscount=(percent)=>{setDiscPercent(percent);}
  const calculateTotal=()=>{
    const total=carts.reduce((sum,item)=>sum+=item.price*item.quantity,0);
    
    const DiscountPrice=(total*discPercent)/100;
    
    const afterDiscountPrice=total-DiscountPrice;
    const couponDiscountPrice=(afterDiscountPrice*couponDiscountPercent)/100;
    const finalDiscountPrice=total-DiscountPrice-couponDiscountPrice;
    // discPercent.current.value=percent;
   // discAmount.current.value=DiscountPrice;
   
   
   return {
    total:parseFloat(total.toFixed(2)),
    discAmount:parseFloat(DiscountPrice.toFixed(2)),
    finalPrice:parseFloat(finalDiscountPrice.toFixed(2)),
    couponPrice:parseFloat(couponDiscountPrice.toFixed(2))
   }
  }
  const{total,discAmount,finalPrice,couponPrice}=calculateTotal();
  
  
  

  return (
    <div>
       <h1>The cart products</h1>
       <ul>{items}</ul>
       <p>Toatl price:{total}</p>
       <button onClick={()=>applyDiscount(10)}>Apply 10% discount</button > <button onClick={()=>applyDiscount(20)}>Apply 20% discount</button> <button onClick={()=>applyDiscount(30)}>Apply 30% discount</button>
       <p>apply copoun:</p><input type='text'  onChange={(e)=>setCouponCode(e.target.value)}></input>
       <button onClick={()=>handleApplyCoupon()}>apply</button>
       <p>couponPrice:${couponPrice}</p>
       <p>discount % applied:{discPercent}%</p>
       <p>discount Amount:${discAmount}</p>
       <p>Final amount after discount:${finalPrice}</p>
        <button > purchase</button> 
    </div>
  )
}

export default Cart;
