"use client"
import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MiniCalendar = ()=> {
  const [value, onChange] = useState<Value>(new Date());
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    // </LocalizationProvider>
  );
}

export default MiniCalendar