import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import ClassIncrement from './pages/ClassIcrement';
import FunctionIncrement from './pages/FunctionalIncrement';

import './App.css';

class App extends Component {
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
    return (
      <div className="App">
        <div style={{ marginBottom: '50px' }}>
          <div>Class</div>
          <ClassIncrement/>
        </div>
        <div style={{ marginBottom: '50px' }}>
          <div>Functional</div>
          <FunctionIncrement/>
        </div>
      </div>
    );
  }
}

export default App;
