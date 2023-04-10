import React from 'react'
import classes from './Card.module.css';
export const Card = (props) => {
  return (
    <div className={classes.cardWrapper}>
        <span>{props.num}</span>
        <div className={classes.card}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>

    </div>
  )
}
