import { Link } from "react-router-dom";
import Remove from '../images/remove.png';

const Order = ({ orders }) => {
    const EmptyOrder = () => (
        <div className="empty-cart">
            <h1>No order placed</h1>
            <Link to='/cart'><button className="btn">Go to cart</button></Link>
        </div>
    );

    const totalQuantity = orders.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = orders.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const combinedDetails = orders.map(item => `${item.name} (${item.quantity})`).join(', ');
    const combinedImages = orders.map(item => item.images);

    return (
        <>
            {orders.length === 0 ? (
                <EmptyOrder />
            ) : (
                <>
                    <Link to="/"> <img src={Remove} alt="remove-icon" className='remove-icon' /></Link>
                    <h1>Order Summary</h1>
                    <div className="order-container">
                        <p><strong>Total Items:</strong> {totalQuantity}</p>
                        <p><strong>Total Price:</strong> ${totalPrice}</p>
                        <p><strong>Ordered Items:</strong> {combinedDetails}</p>

                        <div className="order-images">
                            {combinedImages.map((image, index) => (
                                <img key={index} src={image} alt="Product" className="order-img" style={{ height: "100px" }} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Order;




