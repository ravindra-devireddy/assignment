import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import './middleComponent.css'


const list = [
  {key:1 , name:'SORT BY'},
  {key:2 , name:'ALL'},
  {key:3 , name:'POPULAR'},
  {key:4 , name:'MOST SOLD'},
  {key:5 , name:'IPAD'},
  {key:6 , name:'ANDROID'},
  {key:7 , name:'WINDOWS'}
]
class MiddleComponent extends Component {
  
  render() {
    return (
      <Container style={{backgroundColor:'#D8BFD8' , padding:10}}>
      <Menu secondary>
        <Menu.Menu style={{paddingLeft:60}}>
        {list.map((list)=>(
          <Menu.Item key={list.key} className='List-Item' name={list.name} >
            </Menu.Item>
        ))}
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item className='List-Item'>
            SUMMER 2015/384 Sales
          </Menu.Item>
          
        </Menu.Menu>
      </Menu>
      </Container>
    )
  }
}


export default MiddleComponent