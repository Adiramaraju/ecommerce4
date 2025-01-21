import Collection1 from '../images/collection-1.jpg';
import Collection2 from '../images/collection-2.jpg';
import Collection3 from '../images/collection-3.jpg';
import '../styles/collection.css';
const Collections = () => {
    return (
        <>
            <div id="collection">
                <div className="collection-container">
                    <div className="collection-deatils-container">
                        <div className="collection-img">
                            <img src={Collection1} alt="collection-icon" className="collection-icon" />
                        </div>
                        <div className="collection-details">
                            <h1>Summer Collection</h1>
                            <p>Starting at $17.99</p>
                        </div>
                       
                    </div>
                    <div className="collection-deatils-container">
                        <div className="collection-img">
                            <img src={Collection2} alt="collection-icon" className="collection-icon" />
                        </div>
                        <div className="collection-details">
                            <h1>What’s New?</h1>
                            <p>Get the glow </p>
                        </div>
                    </div>
                    <div className="collection-deatils-container">
                        <div className="collection-img">
                            <img src={Collection3} alt="collection-icon" className="collection-icon" />
                        </div>
                        <div className="collection-details">
                            <h1>Buy 1 Get 1</h1>
                            <p>Starting at $7.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collections