import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'low', label: 'Low'},
    {value: 'med', label: 'Medium'},
    {value: 'hi', label: 'High'},

]

const Priority = () => {
    return (
      <div>
          <Select options={options} />
      </div>
    )
  }

export default Priority