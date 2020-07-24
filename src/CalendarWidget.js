import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./cal.css";

class CalendarWidget extends React.Component {
  // For scoping reasons
  // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
  thisPointer = this;

  // State
  constructor() {
    // Call parent constructor
    super()

    // Set initial state
    this.state = {
      date: "",
      events: []
    };

    // Bind this to the getCalendarEvents function
    // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
  }

  // To load the events for today by default
  componentDidMount() {
    this.getCalendarEvents(new Date());
  }

  getCalendarEvents(selectedDate) {
    // Get calendar events for the selected day
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
    let APICalendarEvents = ["sdf","sdf","324"]; // Temporary. Replace with calendar query script
    let calendarEvents = []
    APICalendarEvents.forEach(element => {
      calendarEvents.push({title: "Event Title", description: "Event Description. Leedle leedle leedle leedle lee"})
    });

    // Update state
    // https://reactjs.org/docs/state-and-lifecycle.html and/or https://reactjs.org/docs/faq-state.html?
    // https://www.npmjs.com/package/react-calendar
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
    this.setState({
      date: selectedDate.toDateString(),
      events: calendarEvents
    });
  }

  render() {
    // Get calendar events
    let calendarEvents = []
    this.state.events.forEach(event => {
      calendarEvents.push(
        <div>
          <div className="event-title">{event.title}</div>
          <p className="event-description">{event.description}</p>
        </div>
      )
    })

    // Create a placeholder item in case there are no events for the day
    let placeHolder = <div className="placeholder">No events for the day!</div>

    return (
      <div className="calendar">
        <Calendar
          onChange={this.getCalendarEvents}
          defaultValue={new Date()}
        />
        <div className="events">
          <div className="date">
            {this.state.date}
          </div>
          <div className="events">
            {(calendarEvents.length !== 0) ? calendarEvents : placeHolder}
          </div>
        </div>
      </div>
    );
  }


}

export default CalendarWidget;

// Some other references:
// https://www.npmjs.com/package/react-calendar
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://reactjs.org/docs/composition-vs-inheritance.html (maybe)
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-basics
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/* (* is supposed to represent the fact that I refernced mulsitple pages from the Date page, though I'm not sure I ended up using all of them)
// https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
// This one for sure though: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
// Maybe this, but not really: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
