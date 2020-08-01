import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { fetchSwapiAction } from '../redux/actions';
import { connect } from 'react-redux';

import Detail from '../organisms/Detail';

const SwapiTitle = styled.div`
  text-align: center;
  color: blue;
  margin: 40px 0px;
`

class Swapi extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      currentUrlDetails: 'https://swapi.dev/api/people/1/' 
    }
  }
  
  componentDidMount(){
    this.props.fetchSwapiAction();
  }
  
  render(){
    return(
      <>
        <Detail urlDetails={this.state.currentUrlDetails} />
            
        <div>
          <SwapiTitle >Star Wars</SwapiTitle>
          {
            this.props.loading ?
              <div> Fetching Data... </div>
              :
              this.props.data.map(people => {
                return (
                  <>
                    <div>{people.name}</div>
                    <Button variant="contained" color="primary" onClick={() => this.setState({ currentUrlDetails: people.url})}>
                      Get Details
                    </Button>
                  </>
                )
              })
          }
        </div>
        <div style={{ marginTop: "30px" }}>
          <Button variant="contained" color="secondary" onClick={() => this.props.history.push('/increment')}>
            Go To Class Increment
          </Button>
        </div>
      </>
      
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading
})

const mapDispatchToProps = { fetchSwapiAction }

export default connect(mapStateToProps, mapDispatchToProps)(Swapi);
