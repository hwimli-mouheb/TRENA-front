import React from 'react'
import google from '../../assets/google.png';
import classes from './SocialMediaBox.module.css';
export const SocialMediaBox = (props) => {
  return (
    <div className={classes.socialBox}>
        <img src={google} className={classes.google} alt="" onClick={props.google} />
       
    </div>
  )
}
