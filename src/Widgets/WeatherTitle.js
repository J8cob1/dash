// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to lean how to call the Open Weather API as an example
// To finish our project

import React, { Component } from 'react'

class WeatherTitle extends Component {
    render() {
        const cityStyle = {
            fontFamily: "Cursive"
        };

        return (
            <div>
                <h1 style={cityStyle}>Weather Report</h1>
            </div>
        )
    }
}

export default WeatherTitle
