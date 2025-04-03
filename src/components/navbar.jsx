import React from 'react';
import Brand from "../resources/minilogo.png"

const NavBar = () => {
    return (
            <nav className="navbar bg-dark shadow-lg">
                <div className="container">
                    <a className="navbar-brand mb-0 h4 text-white" href="/"><img style={{paddingRight: "10px"}}src={Brand} alt="logo"/> Enterprise Links </a>
                </div>
             </nav>
           );
}
 
export default NavBar;