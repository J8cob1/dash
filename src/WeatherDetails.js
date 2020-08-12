// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to do the Open Weather API as an example
// To finish our project

// https://github.com/moment/moment/
// https://www.npmjs.com/package/react-moment
// Use these links as an example to do the time moment for the sunrise

import React, { Component } from 'react'
import Moment from 'react-moment'
class WeatherDetails extends Component {
    render() {
        const cityStyle = {
            fontFamily: "Cursive"
        };
 
        return (
            <div style={cityStyle}>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, US</p>}

                {
                    this.props.sunrise &&   <p>
                                                Sunrise:  
                                                    <Moment format=" hh:mm " unix>
                                                        {this.props.sunrise}
                                                    </Moment>  
                                                AM
                                            </p>
                }

                {this.props.temperature && <p>Temperature: {this.props.temperature} &deg;C </p>}

                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}

                {this.props.pressure && <p>Pressure: {this.props.pressure} Pa</p>}

                {this.props.speed && <p>Wind Speed: {this.props.speed} m/s</p>}

                {this.props.description && <p>Description: {this.props.description}</p>}
            </div>
        )
    }
}

export default WeatherDetails
