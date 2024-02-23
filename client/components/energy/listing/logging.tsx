import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'log', label: 'Logging'},
    {value: 'nl', label: 'Non-Logging'},


]

const Log = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Log
