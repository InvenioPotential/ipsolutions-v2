"use client"
import React, { useState } from "react";
import DatePickers from "./datepickers";
import dayjs, { Dayjs } from "dayjs";

const DateRangePickers = () => {
  const [dateInput, setDateInput] = useState<Dayjs | null>(dayjs());

  const handleDateInput = (date: any) => {
    setDateInput(date);
  };

  const [dateInput2, setDateInput2] = useState<Dayjs | null>(dayjs());

  const handleDateInput2 = (date: any) => {
    setDateInput2(date);
  };
  return (
    <div className="">
      <p>SELECT DATE</p>
      <div className="justify-between flex *:m-2">
        <div>
          <div>Start</div>
          <DatePickers setDateInput={handleDateInput} />
        </div>
        <div>
          <div>End</div>
          <DatePickers setDateInput={handleDateInput2} />
        </div>
      </div>
    </div>
  );
};

export default DateRangePickers;