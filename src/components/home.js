import HeroBanner1 from '../images/hero-banner-1.jpg'
import HeroBanner2 from '../images/hero-banner-2.jpg';
import HeroBanner3 from '../images/hero-banner-3.jpg';
import '../styles/home.css'
const Home= ()=>{

    return(
        <>
        <div id="home">
            <div className="hero-slider">
                
            <div className="hero-banner1">
               <div className="img-container">
               <img src={HeroBanner1} alt="hero-banner-1" className="hero-icon1" />
               
               <div className="img-details-container">
                  <h1>Reveal The
                  Beauty of Skin</h1>
                  <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                  <p className="bold">Starting at $7.99</p>
                  <button className="btn">shop now</button>
               </div>
               </div>
                
            </div>
             <div className="hero-banner1">
               <div className="img-container">
               <img src={HeroBanner2} alt="hero-banner-1" className="hero-icon1" />
               
               <div className="img-details-container">
                  <h1>Reveal The
                  Beauty of Skin</h1>
                  <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                  <p className="bold">Starting at $7.99</p>
                  <button className="btn">shop now</button>
               </div>
               </div>
                
            </div>
            <div className="hero-banner1">
               <div className="img-container">
               <img src={HeroBanner3} alt="hero-banner-1" className="hero-icon1" />
               
               <div className="img-details-container">
                  <h1>Reveal The
                  Beauty of Skin</h1>
                  <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                  <p className="bold">Starting at $7.99</p>
                  <button className="btn">shop now</button>
               </div>
               </div>
                
            </div> 
        </div>
        </div>
        
       
        </>
    )
}

export default Home;