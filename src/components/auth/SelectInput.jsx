import React, { useState } from 'react'
import classes from './SelectInput.module.css';
import { ErrorMessage, useField } from 'formik';
export const SelectInput = ({...props} ) => {
  
  const [profession,setProfession] = useState("Coach Personnel");
  const handleChange = (e) => {
    setProfession(e.target.value)
    console.log(profession)
  }
  const [field, meta] = useField(props);
  return (
    <div className={classes.select}>

        <select value={profession} onInput={handleChange} onChange={handleChange} {...field} {...props}>
            <option>Coach Personnel</option>
            <option>Propriétaire de terrain</option>
            <option>Demandeur de réservation</option>
        </select>
    </div>
  )
}
