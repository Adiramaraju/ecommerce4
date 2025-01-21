import Navbar from './navbar';
import Home from './home';
import Collections from './collection';
import Shop from './shop';
import Offer from './offer';
import Blog from './blog';
import Contact from './contact';


const Content =({handleClick,cart})=>{


    
    return(
        <>
     

        <Navbar size={cart.length} />
        <Home />
        <Collections />
        <Shop  handleClick={handleClick}/>
        <Offer />
        <Blog />
        <Contact />
        </>
    )
}

export default Content;