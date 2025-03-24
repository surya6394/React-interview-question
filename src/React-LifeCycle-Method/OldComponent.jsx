import React, { Component } from 'react'

class OldComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.timer = null;
  }

  componentDidMount () {
    console.log('React component is loading.')
    this.timer = setInterval(() => {
      console.log("Hi old");
    }, 1000);
  }

  componentDidUpdate(){
    console.log("React Component updated.")
  }

  componentWillUnmount(){
    console.log("React Component Closed!")
    clearInterval(this.timer);
  }

  // Increment the counter
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  // Decrement the counter
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  // Reset the counter
  reset = () => {
    this.setState({
      count: 0
    })
  }

  render () {
    return (
      <div>
        <h2>React Life-Cycle methods for Class based component.</h2>
        <ul>
          <li>componentDidMount()</li>
          <li>componentDidUpdate()</li>
          <li>componentWillUnmount()</li>
        </ul>

        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-3xl font-bold mb-4'>Counter Application</h1>
          <div className='text-2xl mb-4'>Count: {this.state.count}</div>
          <div className='space-x-4'>
            <button
              onClick={this.increment}
              className='bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600'
            >
              Increment
            </button>
            <button
              onClick={this.decrement}
              className='bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600'
            >
              Decrement
            </button>
            <button
              onClick={this.reset}
              className='bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600'
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default OldComponent
