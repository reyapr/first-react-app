import React from 'react'

export default class Layout extends React.Component {
  render(){
    return(
      <header>
        
      </header>
      {this.props.children}
      <footer></footer>
    )
  }
}