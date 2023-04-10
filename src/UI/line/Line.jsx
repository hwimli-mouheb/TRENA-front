import React from 'react'
import classes from './Line.module.css';
export const Line = (props) => {
  return (
    <div className={classes.line} style={{background:props.color}}></div>
  )
}
