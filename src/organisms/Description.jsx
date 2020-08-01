import React from 'react';
import { connect } from 'react-redux';
import { changeUrl } from '../redux/actions';

class Description extends React.Component {
  
  render(){
    return(
      <div 
        style={{ color: 'red', marginTop: '10px' }} 
      >
        {this.props.urlFromRedux}
        
        <button 
          onClick={() => this.props.changeUrl("https://www.url.baru")} 
        > 
          change url 
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  urlFromRedux: state.url
})

const mapDispatchToProps = { changeUrl }

export default connect(mapStateToProps, mapDispatchToProps)(Description);