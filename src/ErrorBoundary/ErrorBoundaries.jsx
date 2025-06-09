import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }
    
    static getDerivedStateFromError(error){
        return {error: error};
    }

  render() {
    if(this.state.error){
        return <div className='text-[30px] font-semibold'>Something went wrong!</div>
    } else{
        return this.props.children;
    }
  }
}
