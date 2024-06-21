import React from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './CalendarPage.css';

const CalendarPage = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="mt-14 min-h-[700px] flex flex-col items-center justify-center">
      {/* Heading */}
      <p className={`text-xl font-bold mb-4 ${currentMode==='light' ? 'bg-white text-black' : 'bg-black text-white'}`}>The  Calendar</p>

      {/* Calendar */}
      <div className="custom-calendar bg-white p-4 rounded-lg shadow-md w-fit text-2xl">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default CalendarPage;