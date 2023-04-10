import React from 'react'
import classes from './Circle.module.css';

export const Circle = (props) => {
  return (
    <div className={classes.circle} style={{backgroundColor:props.color,width:props.width,height:props.height}}>

    </div>
  )
}
