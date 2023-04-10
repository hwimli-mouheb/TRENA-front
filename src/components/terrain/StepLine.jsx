import React from 'react'
import classes from './StepLine.module.css';
const StepLine = ({num,text}) => {
  return (
    <div className={classes.step}>

        <div className={classes.num}>
            <h2>{num}</h2>
        </div>
        <div className={classes.text}>
            {text}
        </div>
    </div>
  )
}

export default StepLine