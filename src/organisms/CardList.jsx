import React from 'react';
import Card from '../molecules/Card';

export default class CardList extends React.Component{
  render(){
    var array = [1,2,3,4,5,6] 
    
    
    return(
      <div>
        {
          array.map(num => {
            return (
              <div style={{ marginBottom: '10px' }}>
                <Card/>
              </div>
            
            )
          })
        }
      </div>
    )
  }
}