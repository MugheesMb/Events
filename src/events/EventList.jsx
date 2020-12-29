import React from 'react'
import EventsListItem from './EventsListItem'

const EventList = ({events  }) => {
    return (
        <>
        { events.map(event => (
 <EventsListItem event={event} key={event.id} />
        ))}
        </>
    )
}

export default EventList
