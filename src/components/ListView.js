import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as colors from '../db.json'

import '../style/ListView.css'

class ListView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            current: 0,
            pages: [],
            color_objs: [[]],
            prev: 1,
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            console.log(this.props.location.state.test)
        }


        var temp = []
        var temp2 = []
        colors.data.map((block) => {
            if (block.id == 1) {
                temp.push(<button id={block.id} className="bottom-selected" onClick={() => {
                    document.getElementById(block.id).style.fontWeight = 'bold'
                    document.getElementById(this.state.prev).style.fontWeight = 'normal'
                    document.getElementById(block.id).style.textDecoration = 'underline'
                    document.getElementById(this.state.prev).style.textDecoration = 'none'

                    this.setState({
                        current: block.id - 1,
                        prev: block.id
                    })
                }
                }>{block.id}</button>)
            } else {
                temp.push(<button id={block.id} className="bottom-button" onClick={() => {
                    document.getElementById(block.id).style.fontWeight = 'bold'
                    document.getElementById(this.state.prev).style.fontWeight = 'normal'
                    document.getElementById(block.id).style.textDecoration = 'underline'
                    document.getElementById(this.state.prev).style.textDecoration = 'none'

                    this.setState({
                        current: block.id - 1,
                        prev: block.id
                    })
                }
                }>{block.id}</button>)
            }

            var temp3 = []
            block.colors.map((current) => {
                var cur = {
                    backgroundColor: current,
                    position: 'relative',
                    borderRadius: '8px',
                    borderColor: 'white',
                    boxShadow: '0 5px 10px 1px rgba(0,0,0,0.2)'
                }
                temp3.push(<Link to={{ pathname: "/detail-view", state: { color: current, prev: this.state.current } }}>
                    <button style={cur} className="color-button">
                        <span className="label-style">{current}</span>

                    </button>
                </Link>)
            })
            temp2.push(temp3)
        })

        this.setState({
            pages: temp,
            color_objs: temp2
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