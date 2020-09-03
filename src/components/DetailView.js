import React from 'react'

function DetailView(props) {
    const test = {
        marginLeft : "35%"
    }
    return(
        <div style={test}>
            <h1>{props.location.state.color}</h1>
        </div>
    )
}

export default DetailView;