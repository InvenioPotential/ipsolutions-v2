import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'tnb', label: 'Tenaga Nasional Berhad'},
    {value: 'auth', label: 'Malakoff'},
    {value: 'com', label: 'Sarawak Energy'}

]

const Electricity = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Electricity
