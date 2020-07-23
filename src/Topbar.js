// https://react-bootstrap.github.io/components/navbar/
// Get the example from the above link

import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Background from './Background'
import './BackgroundColor.css'

class TestTopbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Personal Organizer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">                               
                            <div className="colorStyle">
                                <Navbar.Text className="colorStyle">
                                    Background Color:  
                                </Navbar.Text>
                                <Navbar.Text className="colorBackground">
                                    <Background/>
                                </Navbar.Text>
                            </div>
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>              
            </div>
        )
    }
}

export default TestTopbar