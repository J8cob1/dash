// https://react-bootstrap.github.io/components/navbar/
// https://github.com/react-bootstrap/react-bootstrap
// Get the example from the above link

import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Background from './Background'
import './BackgroundColor.css'

class TestTopbar extends Component {
    render() {
        // Check sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Sign In / Sign Out button
        let signInButton = <Button variant="light" className="topBarButton" onClick={this.props.signIn}>Sign In</Button>;
        let signOutButton = <Button variant="danger" className="topBarButton" onClick={this.props.signOut}>Sign Out</Button>;

        // Set sign-in/sign-out status message
        let message = <div className="signInStatus">Not Signed In</div>;
        if (this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true) {
            // https://developers.google.com/identity/sign-in/web/people
            message = <div className="signInStatus">Welcome, {this.props.googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName()}</div>;
        }

        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Dash</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">                               
                            <div className="colorStyle centered">
                                <Navbar.Text className="colorStyle centered">
                                    Background Color:  
                                </Navbar.Text>
                                <Navbar.Text className="colorBackground centered bordered">
                                    <Background />
                                </Navbar.Text>
                            </div>
                            <Navbar.Text>
                                {message}
                            </Navbar.Text>
                            <Navbar.Text>
                                {isSignedIn ? signOutButton : signInButton}
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>              
            </div>
        )
    }
}

export default TestTopbar