

const Banner = () => {
    return (
        <div className="container hero-section">
             <div className="hero-content">
                <h1>YOUR FEET DESERVE<br></br> THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btns">
                    <button className="primary-btn">Shope Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div>
                    <p>Also Available On</p>
                    <div className="brand-icon">
                        <a href="#"><img src="/images/amazon.png" alt="amazon image" /></a>
                        <a href="#"><img src="/images/flipkart.png" alt="flipcart image" /></a>
                        
                        
                    </div>
                </div>


             </div>
             <div className="hero-image">
                <img src="/images/shoe_image.png" alt="" />

             </div>

            
        </div>
    );
};

export default Banner;