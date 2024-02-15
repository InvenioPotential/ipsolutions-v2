import React from 'react';
import MiniCalendar from './miniCalendar';

      {/* <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
       /> */}
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Fullcalendar = () => {
  return (
    <div className='fc'>
      <MiniCalendar />
    </div>
       

  )
}

export default Fullcalendar
