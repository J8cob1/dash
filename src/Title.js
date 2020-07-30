// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to do the Open Weather API as an example
// To finish our project

import React, { Component } from 'react'

class Title extends Component {
    render() {
        const cityStyle = {
            fontFamily: "Cursive"
        };

        return (
            <div>
                <h1 style={cityStyle}>Weather Finder</h1>
                <p style={cityStyle}>Find out temperature, conditions and more ...</p>
            </div>
        )
    }
}

export default Title
