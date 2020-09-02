import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../logo-symbol.svg'

function Header() {

    // style for navbar links aligned right
    const rightSide = {
        marginRight: '0px',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: '0px'
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
                        <li>{Logo}</li>
                    </Link>
                    <div style={rightSide}>
                        <Link to='/my-profile' style={buttons}>
                            <li>My Profile</li>
                        </Link>
                    </div>
                </ul>
        </nav>
    );
}

export default Header;