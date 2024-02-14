import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';

const DatePickers = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        value={value}
        onChange={(newValue) => setValue(newValue)}/>
    </LocalizationProvider>
  )
}

export default DatePickers
