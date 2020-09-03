import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as colors from '../db.json'

import '../style/ListView.css'

import DetailView from './DetailView'

class ListView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            current: 0,
            pages: [],
            color_objs: [[]],
        }
    }

    componentDidMount() {
        var temp = []
        var temp2 = []
        colors.data.map((block) => {
            temp.push(<button onClick={() => {
                this.setState({
                    current: block.id - 1
                })
            }
            }>{block.id}</button>)
            var temp3 = []
            block.colors.map((current) => {
                temp3.push(<Link to={{ pathname: "/detail-view", state:{color:current} }}>
                    <button className="color-button">{current}</button>
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
                <br />
                {this.state.pages}
            </div>
        )
    }

}

export default ListView;