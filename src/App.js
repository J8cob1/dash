import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CalendarWidget from './CalendarWidget';
import SideBar from "./SideBar";
import Quote from "./Quote";
import Weather from "./Weather";
import {getQuote} from "./QuoteAPI";

import Draggable from "react-draggable";



function App() {
    const [state, setState] = React.useState({
        width: 150,
        height: 2,
        twitter: false,
        mail: false,
        quote: false,
        weather: false,
        quoteX: 0,
        QuoteY: 0,
        quoteData: '',
        quoteAuthor: ''
    });
    const toggleTwitter = () => error => {
        if(state.quote){
            setState({
                ...state,
                twitter: false
            })
        } else {
            setState({
                ...state,
                twitter: true
            })
        }
        console.log("Clicked Twitter");
    };
    const toggleMail = () => error => {
        if(state.quote){
            setState({
                ...state,
                mail: false
            })
        } else {
            setState({
                ...state,
                mail: true
            })
        }
        console.log("Clicked Mail");

    };
    const toggleQuote = ()  => error => {
        var temp = getQuote();
        console.log(temp);
        var quoteString = temp[0];
        var author = temp[1];
        if(state.quoteData === ''){
            setState({
                ...state,
                quoteData: quoteString,
                quoteAuthor: author
            })
        }
        if(state.quote){
            setState({
                ...state,
                quote: false
            });
        } else {
            setState({
                ...state,
                quote: true
            });
        }
        console.log("Clicked Quote");
    };
    const toggleWeather = () => error => {
        if(state.weather){
            setState({
                ...state,
                weather: false
            })
        } else {
            setState({
                ...state,
                weather: true
            })
        }
        console.log("Clicked Weather");
    };
  return (
    <div>
        <SideBar
            width={state.width}
            height={state.height}
            toggleTwitter={toggleTwitter}
            toggleMail={toggleMail}
            toggleQuote={toggleQuote}
            toggleWeather={toggleWeather}
        />
        <Draggable>
            <div className="Widget">
                <CalendarWidget/>
            </div>
        </Draggable>

        {state.quote &&
            <Quote
                data={state.quoteData}
                author={state.quoteAuthor}
            />
        }

        {state.weather &&
            <Weather
            />
        }
    </div>
  );
}

export default App;