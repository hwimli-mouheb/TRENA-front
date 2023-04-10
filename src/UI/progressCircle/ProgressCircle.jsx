import React from 'react'
import classes from './ProgressCircle.module.css';
export const ProgressCircle = () => {
  return (
    <div className={classes.percent__box}>
            <h2 className={classes.text}>Progress</h2>
            <div className={classes.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle style={{strokeDashoffset:"calc(440 - (440 * 50) / 100)"}} cx="70" cy="70" r="70"></circle>
              </svg>

              <div className={classes.number}>
                <h2>50<span>%</span></h2>
              </div>
            </div>

            
      </div>
  )
}
