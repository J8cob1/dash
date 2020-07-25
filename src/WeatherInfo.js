import React, { Component } from 'react'

import Title from './Title'
import Form from './Form'
import WeatherDetails from './WeatherDetails'
import 'dotenv'

require('dotenv').config()

// db.connect({
//   API_KEY: process.env.WEATHER_API_KEY
// })

const API_KEY = process.env.WEATHER_API_KEY;

class WeatherInfo extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
    
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        
        if(city){
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the value ~~"
          });
        }
      }

    render() {
        return (
            <div>
                <Title/>
                    <Form getWeather={this.getWeather}/>
                    <WeatherDetails
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        )
    }
}

export default WeatherInfo
