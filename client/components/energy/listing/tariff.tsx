import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'ta', label: 'Tariff A'},
    {value: 'tb', label: 'Tariff B'},
    {value: 'tc', label: 'Tariff C'},
    {value: 'tc1', label: 'Tariff C1 (OPTR)'},
    {value: 'tc2', label: 'Tariff C2'},
    {value: 'td', label: 'Tariff D'},
    {value: 'tds', label: 'Tariff Ds'},
    {value: 'te1', label: 'Tariff E1'},
    {value: 'te1s', label: 'Tariff E1s'},
    {value: 'te2', label: 'Tariff E2'},
    {value: 'te2s', label: 'Tariff E2s'},
    {value: 'tf', label: 'Tariff F'},
    {value: 'tf1', label: 'Tariff F1'},
    {value: 'tf2', label: 'Tariff F2'},
    {value: 'tg', label: 'Tariff G'},
    {value: 'tg1', label: 'Tariff G1'},
    {value: 'th', label: 'Tariff H'},
    {value: 'th1', label: 'Tariff H1'},
    {value: 'th2', label: 'Tariff H2'},
]

const Tariff = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Tariff
