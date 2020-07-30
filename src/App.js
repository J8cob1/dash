import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CalendarWidget from './CalendarWidget';
import SideBar from "./SideBar";
import Quote from "./Quote";
import Weather from "./Weather";

import Draggable from "react-draggable";
import {getLocStorage, setLocStorage, quote, weather} from "./PersistantState";


class App extends React.Component{
    constructor() {
        super();
        this.state = {
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
        }
        this.toggleQuote = this.toggleQuote.bind(this)
        this.updateFromPersistant = this.updateFromPersistant.bind(this);
    }

    componentDidMount() {
        this.updateFromPersistant();
    }

    updateFromPersistant() {
        let quoteData = getLocStorage(quote);
        console.log("Quote data:", quoteData);
        this.setState({
            ...this.state,
            quote: quoteData
        });
    }

    // Twitter section
    toggleTwitter = () => error => {
        if(this.state.quote){
            this.setState({
                ...this.state,
                twitter: false
            })
        } else {
            this.setState({
                ...this.state,
                twitter: true
            })
        }
        console.log("Clicked Twitter");
    };
    // Email section
    toggleMail = () => error => {
        if(this.state.quote){
            this.setState({
                ...this.state,
                mail: false
            })
        } else {
            this.setState({
                ...this.state,
                mail: true
            })
        }
        console.log("Clicked Mail");

    };
    // Quote section
    async toggleQuote () {
        var temp = await fetch('http://quotes.rest/qod.json?category=inspire')
        .then(function (res) {
            return res.json();
        })
        .catch(function(err){
            console.log(err);
        });

        console.log(temp);
        var quoteString = temp.contents.quotes[0].quote;
        var author = temp.contents.quotes[0].author;
        if(author === null){
            author = "Unknown"
        }
        if(this.state.quoteData === ''){
            this.setState({
                ...this.state,
                quoteData: quoteString,
                quoteAuthor: author
            })
        }
        if(this.state.quote === true){
            this.setState({
                ...this.state,
                quote: false
            });
            setLocStorage(quote, false)
        } else {
            this.setState({
                ...this.state,
                quote: true
            });
            setLocStorage(quote, true)

        }
        console.log("Clicked Quote");
    };
    // Weather section
    toggleWeather = () => error => {
        if(this.state.weather){
            this.setState({
                ...this.state,
                weather: false
            })
        } else {
            this.setState({
                ...this.state,
                weather: true
            })
        }
        console.log("Clicked Weather");
    };
    render(){
      return (
        <div>
            <SideBar
                width={this.state.width}
                height={this.state.height}
                toggleTwitter={this.toggleTwitter}
                toggleMail={this.toggleMail}
                toggleQuote={this.toggleQuote}
                toggleWeather={this.toggleWeather}
            />
            <Draggable>
                <div className="Widget">
                    <CalendarWidget/>
                </div>
            </Draggable>

            {/* Quote section */}
            {this.state.quote &&
                <Quote
                    data={this.state.quoteData}
                    author={this.state.quoteAuthor}
                />
            }

            {/* Weather section */}
            {this.state.weather &&
                <Weather/>
            }
        </div>
      );
}
}

export default App;