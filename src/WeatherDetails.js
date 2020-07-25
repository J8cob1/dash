import React, { Component } from 'react'

class WeatherDetails extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, US</p>}

                {this.props.temperature && <p>Temperature: {this.props.temperature} &deg;C </p>}

                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}

                {this.props.description && <p>Humidity: {this.props.description}</p>}

                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default WeatherDetails
