import '../styles/navbar.css'
import Search from '../images/download.jpg';
import Logo from '../images/logo.png';
// import Contact from '../images/contact.png';
import Order from '../images/order.png';
import Cart from '../images/cart.png';
import {Link} from 'react-router-dom'
const Navbar = ({setCartShow,size}) => {
    return (
        <>
            <p className="title"> Free Shipping On All U.S. Orders $50+</p>
            <div className="nav">
                <div className="left">
                    <div className="search-container">
                        <input type="text" placeholder="search Product" className="search" />
                        <img src={Search} alt="search tag" className="search-icon" />
                    </div>
                </div>

                <div className="nav-list">
                    <div className="nav-details">
                        <div className="logo-container">
                            <img src={Logo} alt="logo" className="logo" />
                        </div>
                        <div className="nav-items">
                            <ul>
                            <li><a href="#home">Home</a></li>
                                <li><a href="/#collection">Collection</a></li>
                                <li><a href="/#shop">Shop</a></li>
                                <li><a href="/#offer">Offer</a></li>
                                <li><a href="/#blog">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="details">
                        
                        <div className="details-container">
                        <Link to="/orders" ><img  src={Order} alt="order-icon" className="details-icon" /></Link>
                        </div>
                        <div className="details-container   ">
                         <Link  to="/cart"> <img  src={Cart} alt="cart-icon" className="details-icon"  /></Link>
                           <span>{size}</span>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default Navbar