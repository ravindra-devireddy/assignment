import React, { Component } from 'react';
import './topComponent.css'
import { Icon , Menu, Grid , Header} from 'semantic-ui-react';

class TopComponent extends Component {
    
  render() { 
    return ( 
    <div className='top-component'>
      <Menu secondary>
      <Menu.Menu position='left' style={{justifyContent:'center'}} >
        <Grid  >
        <Grid.Column>
          <Icon  name='list'  size='large' style={{paddingTop:30 , paddingLeft:10}} />
        </Grid.Column>
        <Grid.Column>
          <Grid.Row style={{paddingLeft:20,paddingTop:20 , color:'white'}}>
          SUMMER2015
          </Grid.Row>
          <Grid.Row style={{paddingLeft:20 }}>
          <Header as='h2' style={{color:'white'}}>TabletSales</Header>
          </Grid.Row>
          <Grid.Row>
        <Menu.Menu position='left'style={{paddingTop:5 }}>
          <Menu.Item
            name='Sales' 
            style={{color:'white'}}           
          />
          <Menu.Item
            name='Alerts'
            style={{color:'white'}} 
          />
          <Menu.Item
            name='Messages'  
            style={{color:'white'}} 
          />
          <Menu.Item
            name='Products'  
            style={{color:'white'}} 
          />
          </Menu.Menu>
          </Grid.Row>
        </Grid.Column>
        </Grid>
      </Menu.Menu>
      <Menu.Menu position='right' style={{paddingTop:20}} >
        <Grid columns='equal'>
        <Grid.Column>    
        <Grid.Row><Icon name='apple' size='big' className='Icon' /></Grid.Row>   
        <Grid.Row className='Icon2'style={{paddingTop:3 , paddingBottom:3}}> IPAD </Grid.Row>
        <Grid.Row className='Icon' > <Header as='h3'style={{color:'white'}}> 18 </Header> </Grid.Row>
        </Grid.Column>
        <Grid.Column>    
        <Grid.Row><Icon name='android' size='big' className='Icon' /></Grid.Row>   
        <Grid.Row className='Icon2' style={{paddingTop:3 , paddingBottom:3}}> ANDRIOD </Grid.Row>
        <Grid.Row className='Icon'> <Header as='h3'style={{color:'white'}}> 18 </Header> </Grid.Row>
        </Grid.Column>
        <Grid.Column >    
        <Grid.Row><Icon name='windows' size='big' className='Icon' /></Grid.Row>   
        <Grid.Row className='Icon2'style={{paddingTop:3 , paddingBottom:3}}> WINDOWS </Grid.Row>
        <Grid.Row className='Icon'> <Header as='h3'style={{color:'white'}}> 18 </Header> </Grid.Row>
        </Grid.Column>
        <Grid.Column >    
        
        <Grid.Row><Icon name='repeat' size='large' className='Icon' /></Grid.Row>   
        <Grid.Row></Grid.Row>   
        <Grid.Row style={{paddingTop:15}}><Icon name='pencil' size='large' className='Icon' /></Grid.Row>   
        </Grid.Column>

        </Grid>
      </Menu.Menu>
      </Menu>
      <img id='tablet' style={{width:1130,position:'-webkit-sticky'}} src = {require('./Tablet.jpg')} alt='tablet'/>
    </div> );
  }
}
 
export default TopComponent;