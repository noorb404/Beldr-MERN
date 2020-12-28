import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleHeaderCard = props => (

    <Card>
      <Card.Content>
        <Card.Header style={{color:'orange'}}>{props.title}</Card.Header>
        <Card.Meta>{props.address}</Card.Meta>
        <Card.Description>
         {props.description}  <strong style={{color:'green'}}> {props.price}₪</strong>
        </Card.Description>
      </Card.Content>
    </Card>

   

)

export default CardExampleHeaderCard
