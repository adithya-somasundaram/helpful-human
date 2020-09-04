import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import db for colors
import * as colors from '../db.json'

// import local style
import '../style/ListView.css'

class ListView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0,         // current color obj on screen
            pages: [],          // holds page numbers at bottom of sceen
            color_objs: [[]],   // holds color buttons
            prev: 1,            // stores previous first page
        }
    }

    componentDidMount() {
        var nums = []               // will hold page numbers
        var color_buttons = []      // will hold color buttons

        // run through data
        colors.data.map((block) => {
            // set first page number to bold and underlined
            if (block.id === '1') {
                nums.push(<button id={block.id} className="bottom-selected" onClick={() => {
                    // onClick set text to bold and underlined, reset prev
                    document.getElementById(block.id).style.fontWeight = 'bold'
                    document.getElementById(this.state.prev).style.fontWeight = 'normal'
                    document.getElementById(block.id).style.textDecoration = 'underline'
                    document.getElementById(this.state.prev).style.textDecoration = 'none'

                    // set current and prev
                    this.setState({
                        current: block.id - 1,
                        prev: block.id
                    })
                }
                }>{block.id}</button>)
            } else {
                // normal page number
                nums.push(<button id={block.id} className="bottom-button" onClick={() => {
                    // onClick set text to bold and underlined, reset prev
                    document.getElementById(block.id).style.fontWeight = 'bold'
                    document.getElementById(this.state.prev).style.fontWeight = 'normal'
                    document.getElementById(block.id).style.textDecoration = 'underline'
                    document.getElementById(this.state.prev).style.textDecoration = 'none'

                    // set current and prev
                    this.setState({
                        current: block.id - 1,
                        prev: block.id
                    })
                }
                }>{block.id}</button>)
            }

            var temp = []       // temp holds colors for 1 page
            block.colors.map((current) => {
                // style for individual button
                var cur = {
                    backgroundColor: current,
                    position: 'relative',
                    borderRadius: '8px',
                    borderColor: 'white',
                    boxShadow: '0 5px 10px 1px rgba(0,0,0,0.2)'
                }

                // add path to detail view
                temp.push(<Link to={{ pathname: "/detail-view", state: { color: current, prev: this.state.current } }}>
                    <button style={cur} className="color-button">
                        <span className="label-style">{current}</span>

                    </button>
                </Link>)
                return 1;
            })

            // push page into color buttons
            color_buttons.push(temp)
            return 1;
        })

        // set page numbers and colors array
        this.setState({
            pages: nums,
            color_objs: color_buttons
        })
    }


    render() {
        return (
            <div className="page">
                {this.state.color_objs[this.state.current]}
                <div className="bottom-bar">
                    {this.state.pages}
                </div>
            </div>
        )
    }

}

export default ListView;