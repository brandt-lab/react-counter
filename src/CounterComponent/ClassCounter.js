import React, { Component } from 'react'
import './count.css'

export default class ClassCounter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleIncrease=this.handleIncrease.bind(this)
  }
   handleIncrease (e) {
      e.preventDefault()
      this.setState({count:this.state.count +1})
    }
    handleDecrease = (e) =>{
      e.preventDefault()
      this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <>
      <div className='mount'>
        <h1>CLASS STATE</h1>
        <h1>Counter: {this.state.count}</h1>
        <hr/>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
      </>
    )
  }
}
