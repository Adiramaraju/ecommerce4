
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart';
import { useState ,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Payment from './components/payment';
import Content from './components/conteni';
import Order from './components/order';

function App() {
  const [orders,setOrders]=useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedOrders = JSON.parse(localStorage.getItem('orders'));

    if (savedCart) {
      setCart(savedCart);
    }
    if (savedOrders){
      setOrders(savedOrders);
   }
  }, []); 
  

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);
  
  


useEffect(() => {
  if(orders.length>0){

    localStorage.setItem('orders', JSON.stringify(orders));
  }
    
}, [orders]);



  const handleClick = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
   
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success('Item quantity increased');
    } else {
     
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success('Item added to cart');
    }
  };
  return (
    <div className="App">
      <>

        <ToastContainer autoClose={500} />
        <Routes>
          <Route path="/" element={<Content  handleClick={handleClick} cart={cart} />} />   
          
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} setOrders={setOrders} />} />
          <Route path="/orders" element={<Order orders={orders} />}/> 
          <Route path="/payment" element={<Payment orders={orders} setOrders={setOrders} cart={cart} setCart={setCart} />}/>
        </Routes>


      </>


    </div>
  );
}

export default App;
