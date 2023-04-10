import React from 'react'
import classes from './Coach.module.css';
import { Line } from '../../UI/line/Line';
import { Button } from '../../UI/button/Button';
import img from '../../assets/terrains/1.jpg'
const Coach = ({id,nom,prenom,description,sport,contact}) => {
 
   
    return (
    <div className={classes.terrainContainer}>
            <div className={classes.title}>
                <Line color="#6BC4A6" />
                <h2>{title}</h2>
            </div>
            <div className={classes.content}>
                <div className={classes.left}>

                    <img src={img} alt="image" />
                    
                    
                </div>
                <div className={classes.right}>
                <div className={classes.group}>
                        <span className={classes.label}>Coach: </span>
                        <span className={classes.text}>{nom}</span>
                        <span className={classes.text}>{prenom}</span>

                    </div>
                    <div className={classes.group}>
                        <span className={classes.label}>Sport: </span>
                        <span className={classes.text}>{type}</span>
                    </div>
                    <div className={classes.group}>
                        <span className={classes.label}>informations: </span>
                        <span className={classes.text}>{description}</span>
                    </div>
                    <div className={classes.group}>
                        <span className={classes.label}>contact: </span>
                        <span className={classes.text}>{contact}</span>
                    </div>
                    
        
                   
                </div>
            </div>

    </div>
  )
}

export default Coach;