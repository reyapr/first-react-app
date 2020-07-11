import React, { Component } from 'react';

import '../App.css';

class ClassIncrement extends Component {
  constructor(props){
    super(props)
    this.state = {
      num: 0
    }
  }
  
  increment = () => {
    let newNum = this.state.num // 1
    
    newNum+=1
    
    this.setState({
      num: newNum
    })
  }
  
  
  
  render(){
    
    const error = true
    
    return (
      <div className="App">
        <div>{this.state.num}</div>
        
        <span>
          <button onClick={this.increment} >
          +
          </button>
          <button>-</button>
        </span>
        {
          error ? 
          <div style={{ color: 'red' }}> pengurangan tidak bisa kurang dari 0 </div>
          :
          null
        }
      </div>
    );
  }
}

export default ClassIncrement;