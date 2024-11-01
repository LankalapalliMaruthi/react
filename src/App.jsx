// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import NonVeg from './NonVeg';
import Veg from './Veg';
import Cart from './Cart';
import Purchased from './Purchased';
import Aboutus from './Aboutus';
import ContactUs from './contactUs';

import './App.css';
import { useSelector } from 'react-redux';
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacebookLoginComponent from './FaceBookLoginComponent';

function App() {
  const carts=useSelector(state=>state.cart);
  const count=carts.reduce((sum,item)=>sum+item.quantity,0);
  return (<>
  <GoogleOAuthProvider clientId='764554529648-s4uv6e99iqdtfqkcju8jnhu3cs5826se.apps.googleusercontent.com'><GoogleLoginComponent/>
  </GoogleOAuthProvider>
  <FacebookLoginComponent/>
  
  <Router>
<Link to={"/Home"}>Home</Link>
<Link to={"/Veg"}>Veg Items</Link>
<Link to={"/NonVeg"}>NonVeg Items</Link>
<Link to={"/Cart"}>Cart({count})</Link>
<Link to={"/PurchaseList"}>Purchased List</Link>
<Link to={"/AboutUs"}>AboutUs</Link>
<Link to={"/ContactUs"}>ContactUs</Link>

<Routes>
  <Route path="/Home" element={<Home/>} ></Route>
  <Route path="/Veg" element={<Veg/>}></Route>
  <Route path="/NonVeg" element={<NonVeg/>} ></Route>
  <Route path="/Cart" element={<Cart/>} ></Route>
  <Route path="/PurchaseList" element={<Purchased/>} ></Route>
  <Route path="/AboutUs" element={<Aboutus/>} ></Route>
  <Route path="/ContactUs" element={<ContactUs/>} ></Route>

</Routes>

  </Router>
  
  </>
  )
}

export default App;
