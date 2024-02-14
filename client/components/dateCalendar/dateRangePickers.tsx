import React from 'react'
import DatePickers from './datepickers'

const DateRangePickers = () => {
  return (
    <div className=''>
      <p>SELECT DATE</p>
      <div className='justify-between flex *:m-2'>
        <div>
          <div>Start</div>
          <DatePickers/>
        </div>
        <div>
          <div>End</div>
          <DatePickers/>
        </div>        
      </div>

    </div>
  )
}

export default DateRangePickers
