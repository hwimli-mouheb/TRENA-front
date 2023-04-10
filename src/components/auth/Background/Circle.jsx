import React from 'react'
import classes from './Circle.module.css'
export const Circle = () => {
  return (
    <div className={classes.circle}>
        <div className={classes.innerCircle}></div>
    </div>
  )
}
