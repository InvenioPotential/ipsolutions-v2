import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'lig', label: 'Lighting'},
    {value: 'esca', label: 'Escalator'},
    {value: 'lif', label: 'Lift'},
    {value: 'pu', label: 'Pump'},
    {value: 'mv', label: 'Mechanical Ventilation'},
    {value: 'acsu', label: 'Air Conditioning Split Unit'},
    {value: 'wcpu', label: 'Water-Cooled Package Unit'},
    {value: 'cowp', label: 'Condensed Water Pump'},
    {value: 'chwp', label: 'Chilled Water Pump'},
    {value: 'ahu', label: 'Air Handling Unit'},

]

const Loads = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Loads
