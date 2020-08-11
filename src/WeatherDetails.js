// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to do the Open Weather API as an example
// To finish our project

import React, { Component } from 'react'
class WeatherDetails extends Component {
    render() {
        const cityStyle = {
            fontFamily: "Cursive"
        };

        return (
            <div style={cityStyle}>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, US</p>}

                {this.props.temperature && <p>Temperature: {this.props.temperature} &deg;C </p>}

                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}

                {this.props.description && <p>Description: {this.props.description}</p>}

                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default WeatherDetails
