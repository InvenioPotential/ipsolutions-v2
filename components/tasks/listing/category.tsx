import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'admin', label: 'Administrator'},
    {value: 'auth', label: 'Authority and Developer'},
    {value: 'com', label: 'Community Management'},
    {value: 'def', label: 'Defect'},
    {value: 'eng', label: 'Engineering'},
    {value: 'fin', label: 'Financial Management'},
    {value: 'hum', label: 'Human Resources Management'},
    {value: 'ict', label: 'ICT'},
    {value: 'le', label: 'Legal'},
    {value: 'tra', label: 'Training and Development'},
    {value: 'mai', label: 'Maintenance Management'},
    {value: 'mar', label: 'Marketing and Creative'},
    {value: 'pro', label: 'Procurement'},
    {value: 'sta', label: 'Statistic'},

]

const Category = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Category
