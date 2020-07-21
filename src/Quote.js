//Draggable example from:
//https://github.com/STRML/react-draggable/blob/master/example/example.js
//Used to create draggable 'widgets'


//Quotes from:
//https://theysaidso.com/api/#qod
//Using a rest API to get quotes of the day

import React from "react";
import Draggable from "react-draggable";
import "./App.css"

export default function Quote(props){
    const {data, author} = props;
    return(
        <Draggable>
            <div className="Widget">
                {data}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-{author}
            </div>
        </Draggable>
    );
}