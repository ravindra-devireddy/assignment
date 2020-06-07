import React, { Component } from 'react';
import './topComponent.css'
import { Icon , Menu, Grid , Header} from 'semantic-ui-react';



class TopComponent extends Component {
    
  render() { 
    return ( 
    <div className='top-component'>
      <Menu secondary>
      <Menu.Menu position='left' >
        <Grid >
        <Grid.Column>
          <Icon  name='list'  size='large' style={{paddingTop:30 , paddingLeft:10}} />
        </Grid.Column>
        <Grid.Column>
          <Grid.Row style={{paddingLeft:20,paddingTop:20}}>
          SUMMER2015
          </Grid.Row>
          <Grid.Row style={{paddingLeft:20}}>
          <Header as='h2'>TabletSales</Header>
          </Grid.Row>
          <Grid.Row>
        <Menu.Menu position='left'>
          <Menu.Item
            name='Sales'            
          />
          <Menu.Item
            name='Alerts'
          />
          <Menu.Item
            name='Messages'  
          />
          <Menu.Item
            name='Products'  
          />
          </Menu.Menu>
          </Grid.Row>
        </Grid.Column>
        </Grid>
      </Menu.Menu>
      <Menu.Menu position='right' >
        <Grid columns='3'>
        <Grid.Column>    
        <Grid.Row><Icon name='apple' size='big' className='Icon' /></Grid.Row>   
        <Grid.Row className='Icon'> IPAD </Grid.Row>
        <Grid.Row className='Icon' > <Header as='h3'className='Icon'> 18 </Header> </Grid.Row>
        </Grid.Column>
        <Grid.Column>    
        <Grid.Row><Icon name='android' size='big' className='Icon' /></Grid.Row>   
        <Grid.Row className='Icon'> <span style={{fontsize:'50%'}}> ANDRIOD </span></Grid.Row>
        <Grid.Row className='Icon'> <Header as='h3'className='Icon'> 18 </Header> </Grid.Row>
        </Grid.Column>
        <Grid.Column style = {{paddingRight:80}}>    
        <Grid.Row><Icon name='windows' size='big' className='Icon' /></Grid.Row>   
        <Grid.Row className='Icon'> WINDOWS </Grid.Row>
        <Grid.Row className='Icon'> <Header as='h3'className='Icon'> 18 </Header> </Grid.Row>
        </Grid.Column>
        </Grid>
      </Menu.Menu>
      </Menu>

      
    </div> );
  }
}
 
export default TopComponent;