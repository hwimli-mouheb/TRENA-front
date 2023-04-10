import React from 'react'
import classes from './CoachCard.module.css';

const CoachCard = ({picture,firstname,lastname,profession}) => {
  return (
      <div className={classes.card}>
        <div className={classes.content}>
            <div className={classes.img}>
                <img src={picture} alt="" />
            </div>
            <div className={classes.details}>
                <span className={classes.name}>{firstname}</span>
                <span className={classes.name}>{lastname}</span>
                <p>{profession}</p>
            </div>
            

         </div>
      </div>
    
  )
}

export default CoachCard