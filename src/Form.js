import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                <select name="city">
                    <option value="Portland">Portland</option>
                    <option value="Seattle">Seattle</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Detroit">Detroit</option>
                    <option value="Washington D.C.">Washington D.C.</option>
                    <option value="Boston">Boston</option>
                    <option value="Austin">Austin</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Denver">Denver</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Philadelphia">Philadelphia</option>
                    <option value="Houston">Houston</option>
                    <option value="Baltimore">Baltimore</option>
                    <option value="San Diego">San Diego</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="St. Louis">St. Louis</option>
                    <option value="Miami">Miami</option>
                    <option value="Memphis">Memphis</option>
                    <option value="New Orleans">New Orleans</option>
                    <option value="Indianapolis">Indianapolis</option>
                </select>
                    <button>
                        Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

export default Form
