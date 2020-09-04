import React from 'react';
import { Link } from "react-router-dom";

import '../style/Header.css'

import Logo from '../logo-symbol.svg'

function Header() {
    return (
        <nav className="header-out">
            <ul className="header-in">
                <Link to='/' className="icon">
                    <img src={Logo} alt="logo"/>
                </Link>
                <div className="right">
                    <input className="input-style"/>
                </div>
            </ul>
        </nav>
    );
}

export default Header;