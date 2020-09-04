import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import * as colors from '../db.json'

// import local style
import '../style/Header.css'

// import logo image
import Logo from '../logo-symbol.svg'

class Header extends Component {
    constructor() {
        super()

        // stored value from search bar
        this.state = {
            search_val: ""
        }
    }
    render() {
        return (
            <nav className="header-out">
                <ul className="header-in">
                    <Link to='/' className="icon">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className="right">
                        <input id="search" className="input-style" placeholder="Search" onChange={() => {
                            this.setState({
                                search_val: document.getElementById('search').value
                            })

                        }} />
                        {/* template code for search button */}
                        {/* <Link to={{ pathname: "/detail-view", state: { color: this.state.search_val } }}>
                            <button className="go-button">Go!</button>
                        </Link> */}
                    </div>
                </ul>
            </nav>
        );
    }
}

export default Header;