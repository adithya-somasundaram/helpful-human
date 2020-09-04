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
            prev : 1,
            test: {
                outline:'none',
                border:'none',
                backgroundColor : 'white',
                fontSize : '25px',
                fontWeight : 'normal',
                textDecoration : 'none'
            }
        }
    }

    componentDidMount() {
        var temp = []
        var temp2 = []
        colors.data.map((block) => {
            temp.push(<button id={block.id} style={this.state.test} onClick={() => {
                document.getElementById(block.id).style.fontWeight = 'bold'
                document.getElementById(this.state.prev).style.fontWeight = 'normal'
                document.getElementById(block.id).style.textDecoration = 'underline'
                document.getElementById(this.state.prev).style.textDecoration = 'none'

                this.setState({
                    current: block.id - 1,
                    prev : block.id
                })
            }
            }>{block.id}</button>)
            var temp3 = []
            block.colors.map((current) => {
                var cur = {
                    backgroundColor : current,
                    // border : 'none',
                    position : 'relative',
                    borderRadius : '8px',
                    borderColor : 'white',
                    boxShadow: '0 5px 10px 1px rgba(0,0,0,0.2)'
                }
                var t = {
                    backgroundColor : 'white',
                    position : 'absolute',
                    width : '15vw',
                    height : '2.3vw',
                    marginTop : '5vw',
                    marginLeft : '-7.32vw',
                    maxWidth : '100%',
                    maxHeight : '20%',
                    borderRadius : '0 0 4px 4px'
                }
                temp3.push(<Link to={{ pathname: "/detail-view", state:{color:current} }}>
                    <button style={cur} className="color-button">
                        <span style={t}>{current}</span>
                        
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