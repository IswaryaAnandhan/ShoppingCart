
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';
function App() {
  const [products] = useState([
    { id: 1,
      name: "Iphone 14",
      Price: 79900,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703724/Croma%20Assets/Communication/Mobiles/Images/261934_qgssvy.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 2,
      name: "Samsung S22",
      Price: 66990,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662442140/Croma%20Assets/Communication/Mobiles/Images/248899_btsarx.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 3,
      name: "Redmi",
      Price: 13000,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662438345/Croma%20Assets/Communication/Mobiles/Images/251043_usggge.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 4,
      name: "Oneplus",
      Price: 36000,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662415157/Croma%20Assets/Communication/Mobiles/Images/233905_z8fbao.png/mxw_2048,s_webp,f_auto"
    },
    { 
      id: 5,
      name: "Oppo",
      Price: 30000,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662436748/Croma%20Assets/Communication/Mobiles/Images/251268_nll6my.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 6,
      name: "Nokia",
      Price: 28000,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662415632/Croma%20Assets/Communication/Mobiles/Images/233802_dwrnaw.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 7,
      name: "VIVO",
      Price: 33000,
      quantity:1,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662422853/Croma%20Assets/Communication/Mobiles/Images/242178_fthzs6.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 8,
      name: "POCO",
      Price: 14000,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662444310/Croma%20Assets/Communication/Mobiles/Images/250889_b0qyb3.png/mxw_2048,s_webp,f_auto"
    },
    {
      id: 9,
      name: "Realme",
      Price: 18990,
      quantity:1,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662437111/Croma%20Assets/Communication/Mobiles/Images/251592_yss7ar.png/mxw_2048,s_webp,f_auto"
    },
  ]) 
  const [cartItems,setCartItems] = useState([])
  let addToCart = (product) =>{
     setCartItems([...cartItems,product])
  }
  let removeFromCart = (product) =>{
   const indexVal= cartItems.findIndex(obj => obj.id === product.id);
   cartItems.splice(indexVal,1);
   setCartItems([...cartItems])
  }
  return (<>
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">Shop Smartphones in lowest price</h2>
            <p className="lead fw-normal text-white-50 mb-0">Branded Smartphones in best price</p>
        </div>
    </div>
</header>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
         {
         products.map((product,index)=>
         {
          return <Card key={index} product={product} addToCart={addToCart} cartItems={cartItems}/>
         }) 
         }
          </div>
        </div>
        <div className='col-lg-4'>
         <h3>Cart</h3>
         <Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
