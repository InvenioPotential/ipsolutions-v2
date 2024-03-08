"use client"
import React, { useState } from "react";
import DatePickers from "./datepickers";
import dayjs, { Dayjs } from "dayjs";

interface DateRangePickersProps {
  defaultStart?: Dayjs | null;
  defaultEnd?: Dayjs | null;
  onStartChange: (newStartDate: Dayjs) => void;
  onEndChange: (newEndDate: Dayjs) => void;
  canEdit: boolean;
}
const DateRangePickers: React.FC<DateRangePickersProps> = ({ canEdit,defaultStart, defaultEnd, onStartChange, onEndChange }) => {
  const handleStartDateChange = (date: Dayjs | null) => {
    if (date) {
      onStartChange(date);
    }
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    if (date) {
      onEndChange(date);
    }
  };
  return (
    <div className="">
      <p>SELECT DATE</p>
      <div className="justify-between flex *:m-2">
        <div>
          <div>Start</div>
          <DatePickers edit={canEdit} defaultDate={defaultStart} setDateInput={handleStartDateChange} />
        </div>
        <div>
          <div>End</div>
          <DatePickers edit={canEdit} defaultDate={defaultEnd}  setDateInput={handleEndDateChange} />
        </div>
      </div>
    </div>
  );
};

export default DateRangePickers;