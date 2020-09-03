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
            test: {
                outline:'none',
                border:'none'
            }
        }
    }

    componentDidMount() {
        var temp = []
        var temp2 = []
        colors.data.map((block) => {
            temp.push(<button style={this.state.test} onClick={() => {
                this.setState({
                    current: block.id - 1
                })
            }
            }>{block.id}</button>)
            var temp3 = []
            block.colors.map((current) => {
                var cur = {
                    backgroundColor : current,
                    // border : 'none',
                    position : 'relative'
                }
                var t = {
                    backgroundColor : 'white',
                    position : 'absolute',
                    width : '14.5vw',
                    height : '2.3vw',
                    marginTop : '5vw',
                    marginLeft : '-7.26vw'
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