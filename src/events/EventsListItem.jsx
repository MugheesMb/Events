import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import { deleteEvent } from './eventActions'


const EventsListItem = ({event  }) => {

    const  dispatch = useDispatch();

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={`https://randomuser.me/api/portraits/men/${event.id}.jpg`} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {event.date}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
           
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={() => dispatch(deleteEvent(event.id))} color='red' floated='right' content='Delete' />
                <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='View' />

            </Segment>
        </Segment.Group>
    )
}

export default EventsListItem
