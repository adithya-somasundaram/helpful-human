import React from 'react';
import { Link } from "react-router-dom";

import '../style/Sidebar.css'

function Sidebar() {
    const test = {
        width : '70%',
        marginLeft : '15%',
        marginTop : '30px',
        fontSize : '20px'
    }

    const test2 = {
        marginLeft : '10px',
        display: 'block',
        color: 'white',
        textDecoration : 'none',
        fontSize : '20px'
    }

    return (
        <div className="bar">
            <button style={test}>Random Color</button>
            <br/>
            <br/>
            <Link style={test2} to='/detailed-view'>
                Red
            </Link>
            <br/>
            <Link style={test2} to='/detailed-view'>
                Orange
            </Link>
            <br/>
            <Link to='/detailed-view'>
                Yellow
            </Link>
            <br/>
            <Link to='/detailed-view'>
                Green
            </Link>
            <br/>
            <Link to='/detailed-view'>
                Blue
            </Link>
            <br/>
            <Link to='/detailed-view'>
                Purple
            </Link>
        </div>
    );
}

export default Sidebar;