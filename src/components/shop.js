import '../styles/shop.css'

import Banner1 from '../images/banner-1.jpg'
import Banner2 from '../images/banner-2.jpg'
import Feature1 from '../images/feature-1.jpg'
import Feature2 from '../images/feature-2.jpg'
import Feature3 from '../images/feature-3.jpg'
import Product1 from './product'
import {Product2} from './product'
const Shop = ({handleClick}) => {

  

    return (
        <>

            <div id="shop">
                <h1 className="shop-best">Our Bestsellers</h1>
                <div className="shop-container">
                    {
                        Product1.map((product) => (
                            <div className="shop-detail-container" key={product.id}>
                                <div className="img-container">
                                    <img src={product.images} alt={product.images} className="product-icon" />
                                </div>
                                <div className="product-details">
                                    <h1>${product.price}</h1>
                                    <p>{product.name}</p>
                                <button className="cart" onClick={()=>handleClick(product)}>Add to cart</button>
                                </div>
                               
                            </div>
                        ))
                    }
                   
                </div>


            </div>
            <div id="shop1">
                <h1 className="shop-best">Under $25</h1>
                <div className="shop-container">
                    {
                        Product2.map((product) => (
                            <div className="shop-detail-container" key={product.id}>
                                <div className="img-container">
                                    <img src={product.images} alt={product.name} className="product-icon" />

                                </div>
                                <div className="product-details">
                                    <h1>${product.price}</h1>
                                    <p>{product.name}</p>
                                <button className="cart" onClick={()=>handleClick(product)}>Add to cart</button>
                                </div>

                            </div>
                        ))
                    }
                   
                </div>

            </div>

            <div id="shop3">
                <div className="shop-container">
                    <div className="shop-details-container">
                        <div className="img-container">
                            <img src={Banner1} alt="baanner" className="banner-icon" />
                        </div>
                        <div className="banner-details">
                            <p>NEW COLLECTION</p>
                            <h1>Discover our Autumn Skincare</h1>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className="shop-details-container">
                        <div className="img-container">
                            <img src={Banner2} alt="baanner" className="banner-icon" />
                        </div>
                        <div className="banner-details">
                            <h1>25% off Everything</h1>
                            <p className="b1">Makeup with extended range in colors for every human.</p>
                            <button>shop sale</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="shop4">
                <h1 >Why Shop with Glowing?</h1>
                <div className="shop-container">
                    <div className="shop-deatils-container">
                        <div className="img-container">
                            <img src={Feature1} alt="feature1" className="feature-icon" />
                        </div>
                        <div className="feature-deatils">
                            <h1>Guaranteed PURE</h1>
                            <p>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                        </div>
                    </div>
                    <div className="shop-deatils-container">
                        <div className="img-container">
                            <img src={Feature2} alt="feature2" className="feature-icon" />
                        </div>
                        <div className="feature-deatils">
                            <h1>Completely Cruelty-Free</h1>
                            <p>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                        </div>
                    </div>
                    <div className="shop-deatils-container">
                        <div className="img-container">
                            <img src={Feature3} alt="feature3" className="feature-icon" />
                        </div>
                        <div className="feature-deatils">
                            <h1>Ingredient Sourcing</h1>
                            <p>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop;