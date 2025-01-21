import '../styles/blog.css';
import Blog1 from '../images/blog-1.jpg';
import Blog2 from '../images/blog-2.jpg';
import Blog3 from '../images/blog-3.jpg';
const Blog=()=>{
    return(
        <>
        <div id="blog">
            <h1>More to Discover</h1>
            <div className="blog-container">
                <div className="blog-details-container">
                    <div className="img-container">
                         <img src={Blog1} alt="blog-icon" className="blog-icon" />
                    </div>
                    <div className="blog-details">
                        <h1> Find a Store</h1>
                        <p>Our Store</p>
                    </div>
                </div>
                <div className="blog-details-container">
                    <div className="img-container">
                         <img src={Blog2} alt="blog-icon" className="blog-icon" />
                    </div>
                    <div className="blog-details">
                        <h1> From Our Blog</h1>
                        <p>Our Store</p>
                    </div>
                </div>
                <div className="blog-details-container">
                    <div className="img-container">
                         <img src={Blog3} alt="blog-icon" className="blog-icon" />
                    </div>
                    <div className="blog-details">
                        <h1> Our Story</h1>
                        <p>Our Store</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Blog;