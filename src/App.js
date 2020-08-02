import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Topbar from './Topbar';
import Footer from './Footer';
import CalendarWidget from './CalendarWidget';
import SideBar from "./SideBar";
import Quote from "./Quote";
import Weather from "./Weather";

import Draggable from "react-draggable";
import {getLocStorage, setLocStorage, quote, weather} from "./PersistantState";

// https://stackoverflow.com/questions/51977448/how-to-use-gapi-in-react
// https://www.npmjs.com/package/gapi-script
import { gapi, loadAuth2WithProps } from 'gapi-script';

// https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project
require('dotenv').config()

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
            quoteAuthor: '',
            authenticationSetup: false,
        }
        this.toggleQuote = this.toggleQuote.bind(this)
        this.updateFromPersistant = this.updateFromPersistant.bind(this);
        this.setupLogin = this.setupLogin.bind(this); // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        this.updateFromPersistant();
        this.setupLogin();
    }

    updateFromPersistant() {
        let quoteData = getLocStorage(quote);
        console.log("Quote data:", quoteData);
        this.setState({
            ...this.state,
            quote: quoteData
        });
    }

    async setupLogin() {
        // Connect to Google project and do initial setup
        // https://github.com/LucasAndrad/gapi-script-live-example/blob/master/src/components/GoogleLogin.js
        // https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md
        // https://developers.google.com/identity/sign-in/web/reference
        gapi.load('client:auth2', () => { // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
            gapi.client.init({
                apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"], // Put discovery docs of Google APIs you want to use here
                scope: "https://www.googleapis.com/auth/calendar"
            }).then(() => {
                this.setState({
                    ...this.state,
                    authenticationSetup: true,
                });
                this.forceUpdate();
                console.log("Google Setup Completed")
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve ? 
            }).catch((error) => {
                console.log("Google Setup Error: " + error);
                console.log(error)
            });
        });
    }

    signIn() {
        if (this.state.authenticationSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === false) {
            gapi.auth2.getAuthInstance().signIn().then(() => {
                this.forceUpdate(); // https://stackoverflow.coms/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
            });
        }
    }
    signOut() {
        if (this.state.authenticationSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === true) {
            gapi.auth2.getAuthInstance().signOut().then(() => {
                this.forceUpdate(); // https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
            });
        }
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
            <Topbar 
                googleAPIObj={gapi}
                authenticationSetup={this.state.authenticationSetup}
                signIn={this.signIn}
                signOut={this.signOut}
            />
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
                    <CalendarWidget
                        googleAPIObj={gapi}
                        authenticationSetup={this.state.authenticationSetup}
                    />
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
            <Footer/>
        </div>
      );
}
}

export default App;

// https://www.npmjs.com/package/gapi-script?activeTab=readme
// Maybe used?: https://stackoverflow.com/questions/7130648/get-user-info-via-google-api
// Maybe used?: https://gist.github.com/skycocker/ba67e6756131fb43cf4963e024158be1
// Maybe? https://reactjs.org/docs/react-component.html
// Maybe: https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
// https://stackoverflow.com/questions/41738421/how-react-js-index-js-file-contacting-index-html-for-id-references
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
// Maybe: https://stackoverflow.com/questions/42915486/how-to-import-libraries-from-cdn-in-reactjs
// Maybe https://stackoverflow.com/questions/34607252/es6-import-module-from-url
// Maybe https://stackoverflow.com/questions/53396307/how-do-i-use-external-script-that-i-add-to-react-js
// https://stackoverflow.com/questions/44877904/how-do-you-import-a-javascript-package-from-a-cdn-script-tag-in-react
// https://gist.github.com/mikecrittenden/28fe4877ddabff65f589311fd5f8655c
// https://stackoverflow.com/questions/39089495/google-api-client-libraries-for-react-project-javascript-or-node-js
// https://github.com/google/google-api-javascript-client/blob/master/docs/samples.md
// https://github.com/googleapis/google-api-nodejs-client
// https://stackoverflow.com/questions/43713836/how-to-implement-google-api-with-react-redux-and-webpack
// https://stackoverflow.com/questions/19476332/getting-gapi-client-is-undefined-when-trying-to-retrieve-an-authenticated-goog
// https://developers.google.com/identity/sign-in/web/reference
// https://stackoverflow.com/questions/48378337/create-react-app-not-picking-up-env-files
// https://stackoverflow.com/questions/34810776/google-authentication-error-invalid-request-missing-required-parameter-client
// https://github.com/google/google-api-javascript-client/issues/374
// ... Probably not: https://www.npmjs.com/package/gapi