import React from 'react';
import { Link } from "react-router-dom";

import '../style/Sidebar.css'

function Sidebar() {
    return (
        <div className="bar">
            <button className="rand-button">Random Color</button>
            <br/>
            <br/>
            <Link className="color-link" to='/detailed-view'>
                Red
            </Link>
            <br/>
            <Link to='/detailed-view'>
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