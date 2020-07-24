//Draggable and resizable example from:
//https://github.com/bokuweb/react-rnd
//Used to create draggable and resizable 'widgets'

import React from "react";
import "./App.css"
import "./Weather.css"
import { Rnd } from 'react-rnd';

export default function Weather(props){
    return(
        <Rnd
            className="WeatherWidget"
            default={{
            x: -200,
            y: 300,
            }}>
            <div className="handle">
            Weather
            </div>
      </Rnd>
    );
}