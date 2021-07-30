import React from 'react'
import {InputStyle} from '../../../../styles'

const NewNote = ({ type, placeholder, value, setValue }) => (
  <InputStyle 
    width='90px'
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={e => setValue(e.target.value)}
  />
)

export default NewNote