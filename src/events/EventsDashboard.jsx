
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'


const EventsDashboard = () => {

  const {events} = useSelector(state => state.event);


  


    return (
        <Grid>
            <Grid.Column width={14} >
                <EventList events={events}   />
            </Grid.Column>
       
        </Grid>
    )
}

export default EventsDashboard
