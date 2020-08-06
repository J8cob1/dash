//Draggable and resizable example from:
//https://github.com/bokuweb/react-rnd
//Used to create draggable and resizable 'widgets'

import React from "react";
import "./App.css"
import "./News.css"
import { Rnd } from 'react-rnd';
import NewsInfo from "./NewsInfo";

export default function News(props){
    return(
        <Rnd
            minWidth= {700}
            minHeight= {300}
            className="NewsWidget"
            default={{
                width: 700,
                height:300,
                x: -100,
                y: 300,
            }}>
            <div className>
                <NewsInfo/>
            </div>
        </Rnd>
    );
}