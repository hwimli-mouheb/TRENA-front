import React from 'react'
import { Loader } from '../../../UI/loader/Loader'
import classes from './Step3.module.css'
import { useNavigate } from 'react-router-dom'
export const StepThree = () => {
   const navigate = useNavigate();
    setTimeout(() => {
        navigate("/home");
      }, 4000);
    return (
    <div className={classes.step3}>
        <h2 className={classes.loadingNote}>Vous serez redirigé vers la page d'accueil dans quelques secondes . . . </h2>
        <Loader />
    </div>
  )
}
