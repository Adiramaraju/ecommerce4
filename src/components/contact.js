import '../styles/contact.css'
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="contact-container">
                    <div className="contact-detail-container">
                        <h2>Company</h2>
                        <p>Find a location nearest you. See <b>Our Stores</b></p>
                        <p>+391 (0)35 2568 4593</p>
                        <p>hello@domain.com</p>
                    </div>
                    <div className="contact-detail-container">
                        <h2>Useful links</h2>
                        <p>New Products</p>
                        <p>Best Sellers</p>
                        <p>Bundle& Save</p>
                        <p>ONline Gift Card</p>
                    </div>
                    <div className="contact-detail-container">
                        <h2>infomation</h2>
                        <p>Start a Return</p>
                        <p>Contact US</p>
                        <p>Shipping FAQ</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>

                    </div>
                    <div className="contact-detail-container">
                       <h1>Good Emails.</h1>   
                       <p>Enter your email below to be the first to know about New Collection  and product launches.</p> 
                       <input type="text" placeholder="Enter your email address" />
                       <button>Subscribe</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact;