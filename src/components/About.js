import React, { Component } from 'react'

export default class About extends Component {
    onClick = () =>{
        const {history} = this.props
        history.go(-1)
        //go back 2 pages
        //history.go(-2)

        //history.geForward()
    }
    render(){
        return(
            <div>
                <h2>About Page</h2>
                <button onClick={this.onClick}>Go Back</button>
            </div>
        )
    }
}