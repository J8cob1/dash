import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import Background from './Background.js';
import BackgroundPicker from './BackgroundPicker';

function App() {
  return (
      <div>
          <div className="Calendar">
            <Calendar/>
          </div>
          
          <BackgroundPicker/>
          
      </div>
  );
}

export default App;
