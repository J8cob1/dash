import React from 'react';
import Calendar from 'react-calendar';
import Button from 'react-bootstrap/Button';
//import { loadAuth2WithProps, gapi } from 'gapi-script'; // https://www.npmjs.com/package/gapi-script
import 'react-calendar/dist/Calendar.css';
import "./cal.css";
import { BsShieldFill } from 'react-icons/bs';
import { gapi, loadAuth2WithProps } from 'gapi-script';

//import gapi from 'client.js';

//let auth2 = await loadAuth2(process.env.REACT_GOOGLE_CLIENT_ID, None);

class CalendarWidget extends React.Component {
  // State
  constructor() {
    // Call parent constructor
    super()

    // Set initial state
    this.state = {
      date: "",
      gapiSetup: false,
      events: []
    };

    // Scripts
    //this.calendarAPI = null;

    // Bind this to the getCalendarEvents function
    // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.setupLogin = this.setupLogin.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  // To load the events for today by default
  async componentDidMount() {
    this.setupLogin();
    this.getCalendarEvents(new Date());
  }

  async setupLogin() {
    // Gets 
    let thisPointer = this;
    //let gapiClient = await gapi;
    //console.log(gapi);
    
    // Connect to Google project and do initial setup
    // https://github.com/LucasAndrad/gapi-script-live-example/blob/master/src/components/GoogleLogin.js
    // https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md
    // https://developers.google.com/identity/sign-in/web/reference
    let loginAction = loadAuth2WithProps({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"], // Put discovery docs of Google APIs you want to use here
      scope: "https://www.googleapis.com/auth/calendar"
    }).then(() => {
      // Update State To Reflct Setup Complete
      thisPointer.setState({
        date: thisPointer.state.date,
        gapiSetup: true,
        events: thisPointer.state.events
      });
      console.log("Google Setup Completed")
      console.log(gapi);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve ? 
    }).then(() => {
      console.log(gapi.client.calendar.calendarList.list().getPromise().then((result) => {
        console.log(result);
      }));
    }).catch((error) => {
      console.log("Google Setup Error: " + error);
    });

    //loginAction.
    /*.then(() => {
      thisPointer.setState({
        date: thisPointer.state.date,
        loginSetup: true,
        events: thisPointer.state.events
      });
      //this.calendarAPI = gapi.client.calendar;
      //console.log(this.calendarAPI);
      //let calendarList = gapi.client.calendar.calendarList.list();
      //console.log(calendarList);
      //console.log(gapi.client.calendar.calendarList.list().getPromise().then((result) => {
      //  console.log(result);
      //}));
    });*/
    //console.log(loginAction);

    /*let loginSetup = {
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: "https://www.googleapis.com/auth/calendar"
    };*/

    //console.log(gapi2);

    //let auth2 = await loadAuth2WithProps(loginSetup);
    //console.log(auth2.currentUser.get().getBasicProfile().getName());
    //console.log(auth2);
    //console.log(gapi.client.load("https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"));

    /*thisPointer.setState({
      date: thisPointer.state.date,
      loginSetup: true,
      "auth2": auth2,
      events: thisPointer.state.events
    });
    //console.log(gapi);*/
  }

  getCalendarEvents(selectedDate) {
    // Get calendar events for the selected day
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
    if (this.state.gapiSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === true) {
      // Step 1: Get all the calendars
      
      let APICalendarEvents = ["sdf","sdf","324"]; // Temporary. Replace with calendar query script
      let calendarEvents = []
      APICalendarEvents.forEach(element => {
        calendarEvents.push({title: "Event Title", description: "Event Description. Leedle leedle leedle leedle lee", index: calendarEvents.length})
      });

      // Update state
      // https://reactjs.org/docs/state-and-lifecycle.html and/or https://reactjs.org/docs/faq-state.html?
      // https://www.npmjs.com/package/react-calendar
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
      this.setState({
        date: selectedDate.toDateString(),
        loginSetup: this.loginSetup,
        events: calendarEvents
      });
    }
    else {
      this.setState({
        date: selectedDate.toDateString(),
        loginSetup: this.loginSetup,
        events: []
      });
    }
  }

  signIn() {
    if (this.state.gapiSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === false) {
      gapi.auth2.getAuthInstance().signIn().then(() => {
        this.forceUpdate(); // https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
        this.getCalendarEvents();
        this.forceUpdate();
      });
      //console.log("Signed In");
    }
  }
  signOut() {
    if (this.state.gapiSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === true) {
      gapi.auth2.getAuthInstance().signOut().then(() => {
        this.forceUpdate();
        this.getCalendarEvents();
        this.forceUpdate(); // https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
      });
      //console.log("Signed Out");
    }
  }

  render() {
    // Sign in status
    let isSignedIn = this.state.gapiSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === true;

    // Create a placeholder item in case there are no events for the day
    let placeHolder = null;
    if (!isSignedIn) {
      placeHolder = <div className="placeholder">Please Sign In</div>
    } else {
      placeHolder = <div className="placeholder">No events for the day</div>
    }

    // Get calendar events
    let calendarEvents = []
    this.state.events.forEach(event => {
      calendarEvents.push(
        <div className="calendar-event" key={event.index}>
          <div className="calendar-event-title">{event.title}</div>
          <p className="calendar-event-description">{event.description}</p>
          <Button variant="info" className="calendar-event-button">Edit</Button>
          <Button variant="danger" className="calendar-event-button">Delete</Button>
        </div>
      )
    })

    // Sign In / Sign Out button
    let buttons = <Button variant="primary" className="full-width" onClick={this.signIn}>Sign In</Button>;
    if (isSignedIn) {
      buttons = <div>
        <Button variant="success" className="full-width">Create Event</Button>
        <Button variant="secondary" className="full-width" onClick={this.signOut}>Sign Out</Button>
      </div>;
    }

    return (
      <div className="calendar">
        <Calendar
          onChange={this.getCalendarEvents}
          defaultValue={new Date()}
        />
        <div className="calendar-event-container">
          <div className="date">
            {this.state.date}
          </div>
          <div>
            {(calendarEvents.length !== 0) ? calendarEvents : placeHolder}
            <hr/>
            {buttons}
          </div>
        </div>
      </div>
    );
  }


}

export default CalendarWidget;

// Some other references:
// https://www.npmjs.com/package/gapi-script?activeTab=readme
// https://www.npmjs.com/package/react-calendar
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://reactjs.org/docs/composition-vs-inheritance.html (maybe)
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-basics
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/* (* is supposed to represent the fact that I refernced multiple pages from the Date page, though I'm not sure I ended up using all of them)
// https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
// This one for sure though: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
// Maybe this, but not really: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// https://react-bootstrap.github.io/components/buttons/
// https://developers.google.com/calendar/quickstart/js
// https://www.npmjs.com/package/gapi-script
// https://www.valentinog.com/blog/await-react/

// https://stackoverflow.com/questions/39089495/google-api-client-libraries-for-react-project-javascript-or-node-js
// https://stackoverflow.com/questions/53147396/what-is-the-difference-between-the-two-google-js-clients-platform-js-vs-api-js#:~:text=1-,platform.,for%20JavaScript%20client%2Dapplication%20developers.
// https://gist.github.com/mikecrittenden/
// https://stackoverflow.com/questions/9121902/call-an-asynchronous-javascript-function-synchronously