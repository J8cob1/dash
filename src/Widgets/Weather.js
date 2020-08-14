//Draggable and resizable example from:
//https://github.com/bokuweb/react-rnd
//Used to create draggable and resizable 'widgets'

import React from "react";
import "../App.css"
import WeatherInfo from "./WeatherInfo"
import { Rnd } from 'react-rnd';

export default function Weather(props){
    return(
        <Rnd
            minWidth= {400}
            minHeight= {400}
            className="Widget"
            default={{
                x: 900,
                y: 30,
                width: 200,
                height: 300
            }}
        >
            <div className="handle">
                <WeatherInfo/>
            </div>
        </Rnd>
    );
}
