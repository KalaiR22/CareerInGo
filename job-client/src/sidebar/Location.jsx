import React from 'react'
import InputFeild from '../Componenets/InputFeild'

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>All
        </label>

        <InputFeild handleChange={handleChange} value="london" name="test" title="London" />

        <InputFeild handleChange={handleChange} value="seattle" name="test" title="Seattle" />

        <InputFeild handleChange={handleChange} value="madrid" name="test" title="Madrid" />

        <InputFeild handleChange={handleChange} value="boston" name="test" title="Boston" />
      </div>
    </div>
  )
}

export default Location
