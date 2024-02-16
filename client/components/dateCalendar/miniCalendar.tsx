"use client"
import * as React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MiniCalendar = ()=> {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='overflow-auto'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MiniCalendar