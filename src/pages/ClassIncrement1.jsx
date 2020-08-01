import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { incrementAction, decrementAction } from '../redux/actions';

import '../App.css';

class ClassIncrement1 extends Component {

  render(){
    
    console.log(this.props, `<===================  ==================`);
    
    // if(this.state.num === 5){
    //   return <Redirect to="/" />
    // }
    
    const error = true
    
    return (
      <div className="App" >
        <div>{this.props.number}</div>
        
        <span>
          <button onClick={() => this.props.increment()} >
          +
          </button>
          <button onClick={() => this.props.decrement()}>-</button>
        </span>
        {
          error ? 
          <div style={{ color: 'red' }}> pengurangan tidak boleh minus </div>
          :
          null
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  number: state.num
})

const mapDispatchToProps = { 
  increment: incrementAction, 
  decrement: decrementAction 
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassIncrement1);