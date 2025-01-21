import { Link,useNavigate } from "react-router-dom";
import {useState} from 'react';
import Remove from '../images/remove.png'
import '../styles/payment.css';
const Payment = ({cart,setCart,setOrders})=>{

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!cardNumber || !expiryDate || !cvv || !name) {
      setMessage("Please fill in all the fields.");
    } else if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      setMessage("Invalid card number. It must be 16 digits.");
    } else if (cvv.length !== 3 || isNaN(cvv)) {
      setMessage("Invalid CVV. It must be 3 digits.");
    } else {
      setMessage("Payment successful!");
      setOrders(cart);
      setCart([]);
      localStorage.setItem("orders", JSON.stringify(cart));
      localStorage.removeItem("cart"); 
      navigate("/orders")

       
    }
  };

  return(
  <div className="container">
          <Link to="/cart">  <img src={Remove} alt="remove-icon"  className='remove-icon' /></Link>

  <form  onSubmit={handleSubmit}>
    <h2>Payment Details</h2>
    <input
    className="input"
      type="text"
      placeholder="Card Number"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
      
    />
    <input
    className="input"
      type="text"
      placeholder="Expiry Date (MM/YY)"
      value={expiryDate}
      onChange={(e) => setExpiryDate(e.target.value)}
      
    />
    <input
    className="input"
      type="text"
      placeholder="CVV"
      value={cvv}
      onChange={(e) => setCvv(e.target.value)}
      
    />
    <input
    className="input"
      type="text"
      placeholder="Name on Card"
      value={name}
      onChange={(e) => setName(e.target.value)}
      
    />
    <button type="submit" className="button">
      Pay Now
    </button>
    {message && <p style={{ color: message === "Payment successful!" ? "green" : "red" }}>{message}</p>}
  </form>
</div>
);
}

export default Payment;

