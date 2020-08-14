import React from 'react';
import Calendar from 'react-calendar';
import Button from 'react-bootstrap/Button';
import 'react-calendar/dist/Calendar.css';
import { Rnd } from 'react-rnd';
import "../App.css";

class CalendarWidget extends React.Component {
    // State
    constructor() {
        // Call parent constructor
        super()

        // Set initial state
        this.state = {
            date: new Date().toISOString(),
            events: []
        };

        // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
        this.getCalendarEvents = this.getCalendarEvents.bind(this);
    }

    // Updates an object whenever the props change
    async componentDidUpdate(oldProps) {
      // https://stackoverflow.com/questions/37009328/re-render-react-component-when-prop-changes
      if (this.props !== oldProps) {
        this.getCalendarEvents(new Date(this.state.date));
      }
    }

    async getCalendarEvents(selectedDate) {
        // https://developers.google.com/calendar/quickstart/js#step_2_set_up_the_sample
        // https://developers.google.com/calendar/v3/reference/calendarList/list#php
        // https://developers.google.com/calendar/v3/reference/calendarList/get
        // https://reactjs.org/docs/state-and-lifecycle.html and/or https://reactjs.org/docs/faq-state.html?
        // https://www.npmjs.com/package/react-calendar
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
        // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674
        // https://stackoverflow.com/questions/7244246/generate-an-rfc-3339-timestamp-similar-to-google-tasks-api
        // https://stackoverflow.com/questions/7244246/generate-an-rfc-3339-timestamp-similar-to-google-tasks-api
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

        // Get dates
        let date = selectedDate.toDateString();

        let eventStartDate = new Date(selectedDate);
        eventStartDate.setHours(0,0,0,0); // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674

        let eventEndDate = new Date(selectedDate);
        eventEndDate.setDate(eventEndDate.getDate() + 1); // https://stackoverflow.com/questions/563406/add-days-to-javascript-date
        eventEndDate.setHours(0,0,0,0); // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674 

        // Get the sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Clean out whatever was there before
        this.setState({
          "date": date,
          events: []
        });

        // Get calendar events for the given day
        // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
        if (isSignedIn) {
            // Step 1: Get all the calendars
            // https://developers.google.com/calendar/v3/reference/calendarList/list
            let calendarList = await this.props.googleAPIObj.client.calendar.calendarList.list();
            calendarList = calendarList.result.items;

            // Step 2: Get all events for teh current days from each calendar
            // Got a tip from someone
            let counter = 0;
            calendarList.forEach(entry => {
                this.props.googleAPIObj.client.calendar.events.list({"calendarId": entry.id, "timeMax": eventEndDate.toISOString(), "timeMin": eventStartDate.toISOString()}).then((response) => {
                  let events = response.result.items;
                  events.forEach((event) => {
                    // Update the state with the events... one by one. I hope there is a better way to do this
                    this.setState ({
                        "date": date,
                        events: this.state.events.concat([{title: event.summary, description: event.description, index: counter}]) // https://www.w3schools.com/Jsref/jsref_concat_array.asp
                    });
                    counter += 1;
                  });
                })
            });
        }
        else {
            this.setState({
              "date": date,
              events: []
            });
        }
    }

    render() {
        // Sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Create a placeholder item in case there are no events for the day
        let placeHolder = null;
        if (isSignedIn) {
            placeHolder = <div className="placeholder">No events for the day</div>
        } else {
            placeHolder = <div className="placeholder">Please Sign In</div>
        }

        // Get calendar events
        let calendarEvents = []
        this.state.events.forEach(event => {
            calendarEvents.push(
                <div className="calendar-event" key={event.index}>
                    <div className="calendar-event-title">{event.title}</div>
                    <p className="calendar-event-description">{event.description}</p>
                </div>
            )
        })

        return (
            <Rnd className="Widget"
                 default={{
                     x: -250,
                     y: 0,
                     width: 500,
                     height: 600,
                 }}
            >
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
                        </div>
                    </div>
                </div>
            </Rnd>
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
// https://developers.google.com/identity/sign-in/web/reference
// https://developers.google.com/calendar/v3/reference
// https://developers.google.com/calendar/quickstart/js
// https://developers.google.com/calendar/overview
// https://developers.google.com/calendar/v3/reference/events

// https://stackoverflow.com/questions/39089495/google-api-client-libraries-for-react-project-javascript-or-node-js
// https://stackoverflow.com/questions/53147396/what-is-the-difference-between-the-two-google-js-clients-platform-js-vs-api-js#:~:text=1-,platform.,for%20JavaScript%20client%2Dapplication%20developers.
// https://gist.github.com/mikecrittenden/
// https://stackoverflow.com/questions/9121902/call-an-asynchronous-javascript-function-synchronously
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// Eh. Not really: https://github.com/robsontenorio/vue-api-query/issues/48
// https://stackoverflow.com/questions/39679505/using-await-outside-of-an-async-function
// https://stackoverflow.com/questions/27715275/whats-the-difference-between-returning-value-or-promise-resolve-from-then
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://stackoverflow.com/questions/42701963/use-await-outside-async
// https://www.valentinog.com/blog/await-react/
// https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-await

// Probably not: https://developers.google.com/calendar/quickstart/nodejs
// https://stackoverflow.com/questions/11607465/need-good-example-google-calendar-api-in-javascript
// https://stackoverflow.com/questions/28262674/retrieve-google-calendar-events-using-api-v3-in-javascript
// https://github.com/googleapis/google-api-nodejs-client
// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// https://www.npmjs.com/package/googleapis
// https://developers.google.com/calendar/v3/reference/events/list
// https://developers.google.com/calendar/v3/reference/calendars/get
// https://stackoverflow.com/questions/27322837/how-can-i-show-a-list-of-all-available-calendars-using-google-calendar-api-v3
// https://stackoverflow.com/questions/57466728/how-to-get-profile-data-from-gapi-in-react
// Maybe not: https://stackoverflow.com/questions/43021/how-do-you-get-the-index-of-the-current-iteration-of-a-foreach-loop and https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
// https://reactjs.org/docs/react-component.html
// https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
// https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render
// Not really used: https://stackoverflow.com/questions/36270422/reactjs-settimeout-not-working
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// Maybe not: https://stackoverflow.com/questions/51741828/need-to-execute-function-before-render-in-reactjs
