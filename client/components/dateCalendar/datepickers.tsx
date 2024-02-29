"use client"
import React, { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface DatePickersProps {
  setDateInput: (value: Dayjs | null) => void;
}

const DatePickers: React.FC<DatePickersProps> = ({ setDateInput }) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: any) => {
    setValue(newValue);
    setDateInput(newValue); // Pass the selected date to the parent component
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default DatePickers;