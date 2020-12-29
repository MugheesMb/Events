import React from 'react'
import { Item, Segment } from 'semantic-ui-react'

const EventDetailedSideBar = ({attendee}) => {
    return (
        <>
    
<Segment
    textAlign="center"
    style={{border: 'none'}}
    attached="top"
    secondary
    inverted
    color="teal"
>
  {attendee.length} {attendee.length > 1 ?  'People' : 'Person'} Going
</Segment>
<Segment attached>
    <Item.Group relaxed divided>
    {attendee.map(attende => ( 
        <Item key={attende.id} style={{position: 'relative'}}>
            <Item.Image size="tiny" src={ attende.photoURL || '/assets/user.png'}/>
            <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                    <span>{attende.name}</span>
                </Item.Header>
            </Item.Content>
        </Item>))}
     
    </Item.Group>
</Segment>
        </>
    )
}

export default EventDetailedSideBar
