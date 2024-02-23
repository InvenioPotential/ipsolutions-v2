import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'lo', label: 'Low'},
    {value: 'hi', label: 'High'}

]

const Voltage = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Voltage
