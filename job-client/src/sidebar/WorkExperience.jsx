import React from 'react'
import InputFeild from '../Componenets/InputFeild'

const WorkExperience = ({handleChange}) => {
  return (
     <div>
      <h4 className='text-lg font-medium mb-2'>Work experience</h4>

      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>All
        </label>

        <InputFeild handleChange={handleChange} value="Internship" name="test" title="Internship" />

        <InputFeild handleChange={handleChange} value="Work remotely" name="test" title="Work remotely" />
      </div>
    </div>
  )
}

export default WorkExperience
