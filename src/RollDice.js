import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {die1: "five", die2: "two"}
    }
    render() {
        return (
            <div>
                <section>
                <Die face={this.state.die1}/>
                <Die face={this.state.die2}/>
                </section>
                <button className="button">Roll Dice!</button>
                
            </div>
        )
    }
}
