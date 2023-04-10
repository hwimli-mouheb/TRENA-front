import React from 'react'
import { Navbar } from '../shared/Navbar';
import StepLine from './StepLine';
import classes from './Steps.module.css';

const Steps = ({user,logout}) => {
  return (
    <div className={classes.stepWrapper}>
        <div className={classes.navbar}>

          <Navbar user={user} logout={logout} />

        </div>
        <div className={classes.stepContainer}>
          <div className={classes.step1}>
              <StepLine num="1" text="Découvrez Notre Séléction " />
          </div>
          <div className={classes.step2}>
              <StepLine num="2" text="Affinez vos choix en fonction de votre localisation,
              sports préférés, surface des terrains ... " />
          </div>
          <div className={classes.step3}>
              <StepLine num="3" text="Réservez votre terrain  " />
          </div>
        </div>
       


    </div>
  )
}

export default Steps