import React from 'react'
import { Link } from "react-router-dom";

import '../style/DetailView.css'

function DetailView(props) {
    const test = {
        marginLeft: "35%"
    }

    const cur = {
        backgroundColor : props.location.state.color,
        // border : 'none',
        position : 'relative',
        borderRadius : '8px',
        borderColor : 'white',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    }

    const t = {
        backgroundColor : 'white',
        position : 'absolute',
        width : '55vw',
        height : '5vw',
        marginTop : '22.3vw',
        marginLeft : '-27.3vw',
        maxWidth : '100%',
        maxHeight : '20%',
        borderRadius : '0 0 4px 4px'
    }

    const r = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    }

    const z = {
        width: '150px',
        height : '50px',
        backgroundColor : 'white',
        borderRadius:'8px'
    }

    return (
        <div style={test}>
            <h1></h1>
            <div style={r}>
                <button style={cur} className="current-button">
                    <span style={t}>{props.location.state.color}</span>
                </button>
            </div>
            <br/>
            <br/>
            <div style={r}>
                <Link to="/">
                    <button style = {z}>Clear</button>
                </Link>
            </div>
        </div>
    )
}

export default DetailView;