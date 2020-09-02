import React from 'react';
import { Link } from "react-router-dom";

import '../style/Header.css'

import Logo from '../logo-symbol.svg'

function Header() {

    // style for navbar links aligned right
    const rightSide = {
        marginRight: '0px',
        marginLeft: 'auto',
        marginTop: '20px',
        marginBottom: 'auto'
    };

    // navbar button style
    const buttons = {
        float: 'right',
        padding: '10px',
        fontSize: '100%',
        fontFamily: 'Bahnschrift',
        marginTop: 'auto',
        marginBottom: '10px',
    };

    // 'U.M.A link' style
    const homeButton = {
        padding: '10px',
        fontSize: '200%',
        fontFamily: 'Bahnschrift',
        marginTop: '2px'
    }

    // style for sign out button
    const signOut = {
        float: 'right',
        padding: '10px',
        fontSize: '100%',
        fontFamily: 'Bahnschrift',
        marginTop: 'auto',
        marginBottom: '10px',
        backgroundColor:'Transparent',
        outline:'none',
        border:'none',
        color: '#dadce1',
    }

    // return navbar with 'my profile' and sign out if user signed in
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                    <Link to='/' style={homeButton}>
                        <img src={Logo}/>
                    </Link>
                    <div style={rightSide}>
                        <Link to='/my-profile' style={buttons}>
                            <input/>
                        </Link>
                    </div>
                </ul>
        </nav>
    );
}

export default Header;