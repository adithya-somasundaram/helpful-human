import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../style/Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="bar">
                <button className="rand-button" onClick={() => { console.log('ok') }}>Random Color</button>
                <br />
                <br />
                <Link className="color-link" to='/detail-view'>
                    Red
                </Link>
                <br />
                <Link className="color-link" to='/detail-view'>
                    Orange
                </Link>
                <br />
                <Link className="color-link" to='/detail-view'>
                    Yellow
                </Link>
                <br />
                <Link className="color-link" to='/detail-view'>
                    Green
                </Link>
                <br />
                <Link className="color-link" to='/detail-view'>
                    Blue
                </Link>
                <br />
                <Link className="color-link" to='/detail-view'>
                    Purple
                </Link>
            </div>
        );
    }

}

export default Sidebar;