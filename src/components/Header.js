import React from 'react';
import { Link } from "react-router-dom";

import '../style/Header.css'

import Logo from '../logo-symbol.svg'

function Header() {
    const input_style = {
        paddingLeft : '50px'
    }

    return (
        <nav className="header-out">
            <ul className="header-in">
                <Link to='/' className="icon">
                    <img src={Logo} alt="logo"/>
                </Link>
                <div className="right">
                    <input style={input_style}/>
                </div>
            </ul>
        </nav>
    );
}

export default Header;