import React, { Component } from 'react';
import Items from './items'

class ItemsDisplay extends Component {
  
  render() { 
    return ( 
    <div className=''>
     <div className='Display-items'>
      <Items cost = '$349' IconName='android' color='green'>Nexus 9</Items>
      <Items cost = '$249'IconName='android'color='green'>Nexus 7</Items>
      <Items cost = '$259'IconName='apple'color='purple'>iPad 3</Items>
      <Items cost = '$320'IconName='apple'color='purple'>iPad 4</Items>
      <Items cost = '$499'IconName='windows'color='blue'>Surface 3</Items>
      </div>
    </div> 
    );
  }
}
 
export default ItemsDisplay;