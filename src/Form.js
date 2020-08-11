// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to do the Open Weather API as an example
// To finish our project

import React, { Component } from 'react'
class Form extends Component {
    render() {
        const cityStyle = {
            fontFamily: "Cursive"
        };

        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                <select name="city" style={cityStyle}>
                    <option value="Portland">Portland</option>
                    <option value="Seattle">Seattle</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Detroit">Detroit</option>
                    <option value="Washington D.C.">Washington D.C.</option>
                </select>
                <button style={cityStyle}>
                    Getting Weather
                </button>
                </form>
            </div>
        )
    }
}

export default Form
