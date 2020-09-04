import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as colors from '../db.json'

import '../style/Sidebar.css'

class Sidebar extends Component {

    constructor(props){
        super(props)

        this.state = {
            rand : ""
        }
    }

    componentDidMount(){
        // generate random color for random color button
        this.generateRand()
    }

    generateRand(){
        var block = Math.floor(Math.random() * colors.data.length)
        var col = Math.floor(Math.random() * colors.data[block].colors.length)
        this.setState({
            rand : colors.data[block].colors[col]
        })
    }

    render() {
        return (
            <div className="bar">
                <Link to={{ pathname: "/detail-view", state:{color:this.state.rand} }} >
                    <button className="rand-button" onClick={() => { this.generateRand() }}>Random Color</button>
                </Link>
                <br />
                <br />
                <Link className="color-link">
                    Red
                </Link>
                <br />
                <Link className="color-link">
                    Orange
                </Link>
                <br />
                <Link className="color-link">
                    Yellow
                </Link>
                <br />
                <Link className="color-link">
                    Green
                </Link>
                <br />
                <Link className="color-link">
                    Blue
                </Link>
                <br />
                <Link className="color-link">
                    Purple
                </Link>
            </div>
        );
    }

}

export default Sidebar;