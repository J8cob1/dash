//Draggable example from:
//https://github.com/STRML/react-draggable/blob/master/example/example.js
//Used to create draggable 'widgets'


//Quotes from:
//https://theysaidso.com/api/#qod
//Using a rest API to get quotes of the day

import React from "react";
import Draggable from "react-draggable";
import "../App.css"
import { Rnd } from 'react-rnd';

const stylesCredit = {

}


export default function Quote(props){
    const {data, author} = props;
    return(
        <div>
            <Rnd
                default={{
                    x: 275,
                    y: 350,
                    width: 600,
                    height: 200
                }}
            >
                <div className="Widget">
                    {data}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;-{author}
                    <br/>
                    <span style={{zIndex: 50, fontSize: '0.9em', fontWeight: 'bold'}}>
                          <img src={'https://theysaidso.com/branding/theysaidso.png'} style={{height:20, width:20}} alt='theysaidso.com'/>
                          <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{color: 'black', marginLeft: '4px', verticalAlign: 'middle'}}>
                            They Said So®
                          </a>
                    </span>
                </div>
            </Rnd>
        </div>
    );
}