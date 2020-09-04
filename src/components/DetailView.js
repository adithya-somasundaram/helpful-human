import React from 'react'
import { Link } from "react-router-dom";

// import local style
import '../style/DetailView.css'

function DetailView(props) {

    // local style to offset the page from sidebar
    const page = {
        marginLeft: "32%"
    }

    // local style for inputted color
    const cur = {
        backgroundColor : props.location.state.color,
        position : 'relative',
        borderRadius : '8px',
        borderColor : 'gray',
        boxShadow: '0 5px 10px 1px rgba(0,0,0,0.2)'
    }

    return (
        <div style={page}>
            <div className="centered">
                <button style={cur} className="current-button">
                    <span className="current-label">{props.location.state.color}</span>
                </button>
            </div>
            <br/>
            <br/>
            <div className="centered">
                <Link to={{pathname:"/", state:{test:props.location.state.prev}}}>
                    <button className="clear-button">Clear</button>
                </Link>
            </div>
        </div>
    )
}

export default DetailView;