import React from 'react';
import './home.css';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';
import st from './logo.png'; 
export default function Home({history}) {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src={st} style={{marginBottom: 12}} />
                    Re-vents
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Get started
                    <Icon name='right arrow' inverted />
                </Button>
            </Container>
        </Segment>
    )
}