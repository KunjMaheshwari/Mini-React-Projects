import React from "react";


function Hero(){
    return(
        <main className="hero-main">

            <div className="content">
                <h1>Your Feet Deserve the Best!</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>

                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="Flipkart Image"></img>
                        <img src="/images/amazon.png" alt="Amazon Image"></img>
                    </div>

                </div>

            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Shoe Image"></img>
            </div>
        </main>
    )
}


export default Hero;