import React from 'react'
import Button from './Button'
import InputFeild from '../Componenets/InputFeild'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test2' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>All
        </label>

        <InputFeild handleChange={handleChange} value={30} name="test2" title="< 30000k" />

        <InputFeild handleChange={handleChange} value={50} name="test2" title="< 50000k" />

        <InputFeild handleChange={handleChange} value={80} name="test2" title="< 80000k" />

        <InputFeild handleChange={handleChange} value={120} name="test2" title="< 1000000k" />
      
      </div>
    </div>
  )
}

export default Salary
