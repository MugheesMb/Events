import React from 'react'
import { Item, Segment } from 'semantic-ui-react'

const EventDetailedSideBar = ({event , attendee}) => {
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
  Hosted By
</Segment>
<Segment attached>
    <Item.Group relaxed divided>
    
        <Item style={{position: 'relative'}}>
            
            <Item.Content verticalAlign="middle">
                <Item.Header as="h3"  floated='center'>
                    <span>{event.hostedBy}</span>
                </Item.Header>
            </Item.Content>
        </Item>
     
    </Item.Group>
</Segment>
        </>
    )
}

export default EventDetailedSideBar
