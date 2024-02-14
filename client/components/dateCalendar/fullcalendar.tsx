import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Fullcalendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
       />
    </div>
  )
}

export default Fullcalendar
