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
    let api_data;
    try {
      api_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}&units=metric`);
      api_data = await api_data.json();
    } catch (err) {
      console.error(err);
    }

    if (api_data) {
      this.setState({
        temperature: api_data.main.temp,
        city: api_data.name,
        country: api_data.sys.country,
        humidity: api_data.main.humidity,
        pressure: api_data.main.pressure,
        speed: api_data.wind.speed,
        sunrise: api_data.sys.sunrise,
        description: api_data.weather[0]?.description
      });
    }
  
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
