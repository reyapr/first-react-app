import React from 'react'

import axios from 'axios';
import Description from './Description';

class Detail extends React.Component {
  
  constructor(){
    super()
    this.state = {
      id: 1,
      data: {}
    }
  }
  
  componentDidUpdate(nextProps){
    if(nextProps.urlDetails !== this.props.urlDetails){
      axios.get(this.props.urlDetails)
      .then(res =>{
        this.setState({
          data: res.data
        })
      })
      .catch(err =>{
        console.log(err, `<===================  ==================`);
      }) 
    }
  }
  
  componentDidMount(){
    axios.get(this.props.urlDetails)
      .then(res =>{
        this.setState({
          data: res.data
        })
      })
      .catch(err =>{
        console.log(err, `<===================  ==================`);
      })
  }
  
  render(){
    return(
      <React.Fragment>
        <div>Details</div>
        <div>name: {this.state.data.name} </div>
        <Description  url={this.props.urlDetails} />
      </React.Fragment>
    )
  }
  
}

export default Detail;