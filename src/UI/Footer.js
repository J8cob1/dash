// https://react-bootstrap.github.io/components/navbar/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Get the example from the above link

import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom"className="justify-content-center" >
            <span>
                <p className="text-white">
                    @Copyright - Dash Group - {new Date().getFullYear()}
                </p>
            </span>
            </Navbar>
        )
    }
}

export default Footer