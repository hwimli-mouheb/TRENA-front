import React from 'react'
import classes from './Container.module.css';
import wave1 from '../../assets/rectangle.svg';
import wave2 from '../../assets/wavyProfile.svg'
import { ProfileContainer } from './ProfileContainer';
import { Circle } from '../../UI/circle/Circle';
export const Container = () => {
  return (
    <div className={classes.profileContainer}>
        <div className={classes.wave2}>
          <Circle color="#005236" width="max(17em,19vw)" height="max(17em,19vw)" />
        </div>
        <div className={classes.profileMain}>
            
            <ProfileContainer />
        </div>
        <div className={classes.wave1}>
           
        </div>
        
        

    </div>
  )
}
