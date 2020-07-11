import React from 'react'

const Button = () => {
  
  return(
    <button 
      onClick={this.props.handleClick} 
    >
      {this.props.text}
    </button>
  )
}

export default Button;