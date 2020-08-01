import React, { Component } from 'react';
import { css } from 'emotion'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'



import '../App.css';
import axios from 'axios';

const styles = {
  buttonPlus: {
    backgroundColor: 'green'
  }
}


class ClassIncrement extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      num: 0
    }
  }
  
  componentDidMount(){
  }
  
  // UNSAFE_componentWillReceiveProps(nextProps){
  //   this.setState({
  //     num: nextProps.num
  //   })
  //   console.log(nextProps, `<=================== next props ==================`);
  //   console.log(this.props, `<=================== current props ==================`);
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState){
  //   if(nextProps.num !== this.state.num){
  //     this.setState({
  //       num: nextProps.num
  //     })
  //   }
  // }
  
  componentDidUpdate(prevProps, prevState){
    if(this.props.num !== prevProps.num){
      this.setState({
        num: this.props.num
      })
    }
  }
  
  render(){
    const error = true

    return (
      <div className="App">
        <div 
          className={css`
            color: ${this.props.underZero ?  'red' : 'black'}
          `} 
        >
          {this.state.num}
        </div>
        
        <span>
          <Button 
            variant="contained" 
            onClick={this.props.increment} 
            color="primary"
            className={this.props.classes.buttonPlus}  
          >
          +
          </Button>
          <Button variant="contained" onClick={this.props.decrement} color="secondary" >-</Button>
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

export default withStyles(styles)(ClassIncrement);


withStyles(styles)(ClassIncrement)