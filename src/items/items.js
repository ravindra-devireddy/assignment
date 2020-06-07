import React from 'react';
import '../items/items.css'
import {Icon , Header, Grid, Container } from 'semantic-ui-react'

const Items = (props)=>(
<div className='Items-Display' >
  <Container style={{backgroundColor:'#eee'}} >
  <Grid columns='equal'>

  <Grid.Column>
  <Icon name = 'circle' size='small' style={{marginLeft:90 , paddingTop:25 , color:`${props.color}`}} ></Icon>
  </Grid.Column>
  <Grid.Column>
    <Icon name = {props.IconName} size='huge' disabled ></Icon>
    </Grid.Column>
    <Grid.Column>
    <Header as = 'h2'>{props.children}</Header>
     Serial:12345678
    </Grid.Column>
    <Grid.Column>
      <Grid.Row>
      <Icon name='calendar alternate outline' size='large' />
        <span> Friday,June 18 </span>
        </Grid.Row>
        <Grid.Row>
        <Icon name = 'clock outline' size='large'/>
        10.48PM
        </Grid.Row>
     </Grid.Column>

  
    <Grid.Column style={{marginLeft:300}}>
      <Header as='h2' >
        {props.cost}
      </Header>
    </Grid.Column>
  
  </Grid>
  </Container>
</div>
)


export default Items