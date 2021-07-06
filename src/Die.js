import React, { Component } from 'react'
import './Die.css'

export default class Die extends Component {
    render() {
        return (
            <div className="dice">
            <i className={`fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}
