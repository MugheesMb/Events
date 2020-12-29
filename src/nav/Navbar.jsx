import React, { useState } from 'react'
import { NavLink , Link, useHistory } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'


const Navbar = ({setFormOpen}) => {
        const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);
    
    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <>
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={Link} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
     <Menu.Item as={NavLink} to='/createEvent' position='right'  >
                <Button   positive inverted content='Create Event'   />
            </Menu.Item>
         
            </Container>
        </Menu>
        </>
    )
}

export default Navbar
