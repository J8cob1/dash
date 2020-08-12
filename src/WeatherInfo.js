// https://github.com/motdotla/dotenv
// Use above link as an example to hide the API Key

// https://www.youtube.com/watch?v=204C9yNeOYI
// Use this above link to lean how to call the Open Weather API as an example
// To finish our project

// https://openweathermap.org/current
// Lean from open weather documents how to get some data what we want

import React, { Component } from 'react'

import WeatherTitle from './WeatherTitle'
import WeatherForm from './WeatherForm'
import WeatherDetails from './WeatherDetails'

require('dotenv').config()

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// console.log(process.env);

class WeatherInfo extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    speed: undefined,
    sunrise: undefined,
    description: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
  
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      speed: data.wind.speed,
      sunrise: data.sys.sunrise,
      description: data.weather[0].description
    });
  }

  render() {
      return (
          <div>
              <WeatherTitle/>
                <WeatherForm getWeather={this.getWeather}/>
                <WeatherDetails
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  pressure={this.state.pressure}
                  speed={this.state.speed}
                  sunrise={this.state.sunrise}
                  description={this.state.description}
                />
          </div>
      )
  }
}

export default WeatherInfo
