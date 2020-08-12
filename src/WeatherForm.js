// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to lean how to call the Open Weather API as an example
// To finish our project

import React, { Component } from 'react'
class WeatherForm extends Component {
    render() {
        const cityStyle = {
            fontFamily: "Cursive"
        };
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                <select name="city" style={cityStyle}>
                    <option value="Eugene">Eugene</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Portland">Portland</option>
                    <option value="Seattle">Seattle</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="San Diego">San Diego</option>
                    <option value="Sacramento">Sacramento</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Salem">Salem</option>
                </select>
                
                <button style={cityStyle}>
                    Getting Weather
                </button>
                </form>
            </div>
        )
    }
}

export default WeatherForm
