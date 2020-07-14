import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarWidget() {
  return (
    <div className="Calendar">
      <Calendar/>
      <div className="notifications">
      </div>  
    </div>
  );
}

export default CalendarWidget;
