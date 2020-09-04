import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import data from db
import * as colors from '../db.json'

// import local style
import '../style/Sidebar.css'

class Sidebar extends Component {
    constructor(props){
        super(props)

        // rand will hold random color
        this.state = {
            rand : ""
        }
    }

    componentDidMount(){
        // generate random color for random color button
        this.generateRand()
    }

    generateRand(){
        // choose random block of colors
        var block = Math.floor(Math.random() * colors.data.length)

        // choose random color and set
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
                {/* Below not functional yet */}
                <label className="color-link">
                    Red
                </label>
                <br />
                <label className="color-link">
                    Orange
                </label>
                <br />
                <label className="color-link">
                    Yellow
                </label>
                <br />
                <label className="color-link">
                    Green
                </label>
                <br />
                <label className="color-link">
                    Blue
                </label>
                <br />
                <label className="color-link">
                    Purple
                </label>
            </div>
        );
    }

}

export default Sidebar;