import React from 'react'
import { Button } from '../../../UI/button/Button';
import classes from './PictureSection.module.css';

export const PictureSection = (props) => {
 
  return (
    <div className={classes.picture}>

        <div className={`${
              !props.submitted ? classes.pictureSection : classes.hide
            }`}>
        {!props.submitted && <div className={classes.startBtn}>
          <Button type="button" color="#005236" content="Commencer" onClick={props.onShow}/>
        </div>}
        </div>
 
    </div>
    
  )
}
