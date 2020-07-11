import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render(){
    return(
      <div>
        {this.props.cart} 
        <span>
          <button onClick={this.props.increment} >
          +
          </button>
          <button>-</button>
        </span>
      </div>
    )
  }  
}

Header.propTypes = {
  cart: PropTypes.number,
  increment: PropTypes.func
}

export default Header 