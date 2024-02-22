import React, { useState } from 'react'
import { handleChecked } from '../helpers/handleHelpers'

export const CheckboxGroup = ({id, attr, busquedaAttr, setBusquedaAttr}) => {

    const [isChecked, setIsChecked] = useState(true)

  return (
    <div key={id}>
        <input type='checkbox' id={attr} name={attr} checked={isChecked} onChange={handleChecked(busquedaAttr, setBusquedaAttr, isChecked, setIsChecked)}/>
        <label htmlFor={attr}>{attr}</label>
    </div>
  )
}