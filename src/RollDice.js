import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {
    render() {
        return (
            <div>
                <Die />
                <Die />
                <button>Roll Dice!</button>
            </div>
        )
    }
}
