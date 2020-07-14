import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

  getCalendarEvents(selectedDate) {
    // Get calendar events for the selected day
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
    let APICalendarEvents = ["sdf","sdf","324"]; // Temporary. Replace with calendar query script
    let calendarEvents = []
    APICalendarEvents.forEach(element => {
      calendarEvents.push({title: "Event Title", description: "Event Description. Leedle leedle leedle leedle leedle leedle leedle leedle"})
    });

    // Update state
    // https://reactjs.org/docs/state-and-lifecycle.html
    this.setState({
      date: selectedDate.toString(),
      events: calendarEvents
    });
  }

  render() {
    // Get calendar events
    let calendarEvents = []
    this.state.events.forEach(event => {
      calendarEvents.push(
        <div className="calendarItem">
          <div><b>{event.title}</b></div>
          <div>{event.description}</div>
        </div>
      )
    })

    return (
      <div className="Calendar">
        <Calendar
          onChange={this.getCalendarEvents}
        />
        <div>
          <div className="date">{this.state.date}</div>
          <div className="events">
            {calendarEvents}
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