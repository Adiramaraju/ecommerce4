import { useState, useEffect } from 'react';
import '../styles/cart.css';
import Remove from '../images/remove.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, setOrders }) => {
    const [price, setPrice] = useState("0");
    const [totalQuantity, setTotalQuantity] = useState("0");
    const navigate = useNavigate();

    useEffect(() => {
        const handlePrice = () => {
            let ans = 0;
            let quantity = 0;

            cart.forEach((item) => {
                ans += item.quantity * item.price;
                quantity += item.quantity;
            });
            setPrice(ans);
            setTotalQuantity(quantity);
        };
        handlePrice();
    }, [cart]);

    const handleDelete = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleIncrease = (id) => {
        setCart(cart.map((item) => {
            return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
        }));
    };

    const handleDecrease = (id) => {
        setCart(cart.map((item) => {
            return item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item;
        }));
    };

    const Cartempty = () => (
        <div className='empty-cart'>
            <h1>Cart is empty</h1>
            <p>Add items to your cart to see them</p>
            <Link to="/"><button className='btn'>Shop now</button></Link>
        </div>
    );

    // const handleProceed = () => {
    //     if (cart.length > 0) {
    //         const newOrder = {
    //             items: cart,
    //             total: price,
    //         };

    //         // Add the current cart to orders and store it in localStorage
    //         setOrders((prevOrders) => {
    //             const updatedOrders = [...prevOrders, newOrder];
    //             localStorage.setItem('orders', JSON.stringify(updatedOrders));  // Save to localStorage
    //             return updatedOrders;
    //         });

    //         navigate("/payment");
    //     }
    // };

    const handleProceed = () => {
        if (cart.length > 0) {

            navigate("/payment");
        }
    };

    return (
        <>
            {cart.length === 0 ? (
                <Cartempty />
            ) : (
                <>
                    <Link to="/">  <img src={Remove} alt="remove-icon" className='remove-icon' /></Link>

                    <div className='cart-container'>
                        <div className='cart-items'>
                            {cart.map((item) => (
                                <div className="cart-box" key={item.id}>
                                    <div className='items-details-container'>
                                        <div className='container-details'>
                                            <div className="item-img">
                                                <img src={item.images} alt={item.name} />
                                            </div>
                                            <div className='item-det'>
                                                <p>{item.name}</p>
                                                <p>${item.price}</p>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDecrease(item.id)}>-</button>
                                                <button>{item.quantity}</button>
                                                <button onClick={() => handleIncrease(item.id)}>+</button>
                                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='price-section'>
                            <div>
                                <p>Subtotal ({totalQuantity} items): ${price}</p>
                            </div>
                            <button className='btn' onClick={handleProceed}>Proceed to Buy</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
