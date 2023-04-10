import React from 'react'
import { NavbarColored } from '../shared/NavbarColored';

import classes from './Steps.module.css';

const Steps = () => {
  return (
    <div className={classes.stepWrapper}>
        <div className={classes.navbar}>
          <NavbarColored />

        </div>

        <div className={classes.stepContainer}>
          
          <div className={classes.step2}>
              <p>Plus Besoin de vous déplacer, N'hésitez pas à contacter nos coachs privés !  </p>
          </div>
         
        </div>
       


    </div>
  )
}

export default Steps