import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {die1: "five", die2: "two", rolling: false}
        this.roll = this.roll.bind(this);
    }
    roll() {
        //pick 2 new rolls
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)]
        //set state with new rolls
        this.setState({die1: newDie1, die2: newDie2, rolling: true});
setTimeout(() => {
    this.setState({rolling: false}); 
    }, 1000)
}
    render() {
        return (
            <div>
                <section>
                <Die face={this.state.die1} rolling={this.state.rolling}/>
                <Die face={this.state.die2} rolling={this.state.rolling}/>
                </section>
                <button className="button" onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling..' : 'Roll dice!'}
                </button>
            </div>
        )
    }
}
