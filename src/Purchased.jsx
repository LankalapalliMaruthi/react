import React from 'react'
import { useSelector } from 'react-redux';

function Purchased() {
 
  const purchasedItems =useSelector(state=>state.purchased);
  
 
  
  return (
    <div>
      <h1>Purchased Products</h1>
      {purchasedItems.length === 0 ? (
        <p>No items purchased yet.</p>
      ) : (
        purchasedItems.map((purchase, index) => (
          <div key={index}>
            <h3>Purchase #{index + 1}</h3>
            <ul>
              {purchase.items.map((item, idx) => (
                <li key={idx}>{item.name} - ${item.price} - Quantity: {item.quantity}</li>
              ))}
            </ul>
            <p>Total After Discount: ${purchase.totalPrice}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Purchased;
