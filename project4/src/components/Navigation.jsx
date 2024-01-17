import React from "react";

function Navigation() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="Nike logo"></img>
                </div>

                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>

                <button>Login</button>
            </nav>
        </div>
    )
}


export default Navigation;