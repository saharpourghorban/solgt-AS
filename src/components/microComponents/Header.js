import React from 'react';
import logo from "../../assets/images/logo3.png";


const Header = () => {


    return (

        <div className="header">
            <div className="logo-box">
                <img src={logo} alt="logo"/>
            </div>
            <div className="userIconBox">
                <span>login</span>
                <i className="icon-user"></i>

            </div>
        </div>
    )
}


export default Header;