import React from 'react'
import InputFeild from '../Componenets/InputFeild'

const Employment = ({handleChange}) => {
  return (
    <div>
      <div>
      <h4 className='text-lg font-medium mb-2'>Type of employment</h4>

      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>Any experience
        </label>

        <InputFeild handleChange={handleChange} value="Temporary" name="test" title="Temporary" />

        <InputFeild handleChange={handleChange} value="Full-time" name="test" title="Full-time" />

         <InputFeild handleChange={handleChange} value="Part-time" name="test" title="Part-time" />
      </div>
    </div>
    </div>
  )
}

export default Employment
