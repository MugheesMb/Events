import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSideBar from './EventDetailedSideBar'

const EventDetailed = ({match}) => {

    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));

    return (
        
            <Grid>
                <Grid.Column width={10} >
                    <EventDetailedHeader event={event} />
                    <EventDetailedInfo event={event} />
                    <EventDetailedChat />

                </Grid.Column>

                <Grid.Column width={6} >
                        <EventDetailedSideBar attendee={event.attendees}  />
                </Grid.Column>
            </Grid>
        
    )
}

export default EventDetailed