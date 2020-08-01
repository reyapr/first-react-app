import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider  } from 'react-redux';

import ErrorHandler from './templates/ErrorHandler';
import Swapi from './pages/SwapiPage';
import ClassIncrement1 from './pages/ClassIncrement1';
import ClassIncrement from './pages/ClassIncrement';
import reduxStore from './redux/store';

import './App.css';
import FunctionalIncrement from './pages/FunctionalIncrement';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      num: 0,
      data: [],
      currentUrlDetails: 'https://swapi.dev/api/people/1/' 
    }
  }
  
  increment = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  
  decrement = () => {
    this.setState({
      num: this.state.num-1
    })
  }
  
  render(){
    return (
      <ErrorHandler>
        <div className="App">
          <Provider store={reduxStore}>
            <Router>
              <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/increment">Increment 1</Link>
                <Link to="/increment-2">Increment 2</Link>
                <Link to="/functional-increment">Functinal Increment</Link>
              </div>
              <Route exact path="/" component={Swapi} />  
              <Route exact path="/increment" component={ClassIncrement1} />
              <Route exact path="/functional-increment" component={FunctionalIncrement} />
              <Route exact path="/increment-2" render={(renderProps) => {
                return (
                  <ClassIncrement 
                    {...renderProps} 
                    underZero="red" 
                    increment={this.increment} 
                    decrement={this.decrement}
                    num={this.state.num}
                  />)
              }} />
            </Router>
          </Provider>
        </div>
      </ErrorHandler>
    );
  }
}

const styles = {
  swapiStyle: { 
    margin: '40px 0px' 
  },
  swapiDetail: {
    marginBottom: '50px'
  }
}

export default App;
