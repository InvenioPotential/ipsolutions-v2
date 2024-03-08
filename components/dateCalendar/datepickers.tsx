"use client"
import React, {useEffect, useState} from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface DatePickersProps {
  defaultDate?: Dayjs | null; // Add a prop for default date
  edit : boolean
  setDateInput: (value: Dayjs | null) => void;
}

const DatePickers: React.FC<DatePickersProps> = ({ edit, defaultDate,setDateInput }) => {
  const [value, setValue] = useState<Dayjs | null>(defaultDate || null);


  const handleDateChange = (newValue: any) => {
    setValue(newValue);
    setDateInput(newValue); // Pass the selected date to the parent component
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker  disabled={!edit} value={dayjs(value)} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default DatePickers;