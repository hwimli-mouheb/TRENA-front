import React, { useState } from 'react'
import classes from './Terrain.module.css';
import { Line } from '../../UI/line/Line';
import { Button } from '../../UI/button/Button';
import img from '../../assets/terrains/1.jpg'
import Reservation from './Reservation';
const Terrain = ({id,title,description,surface,type,address,reservation}) => {
 
    let date = new Date();
    let month = date.getMonth()+1
    date = date.getFullYear() +'-' +month  + '-' + date.getDate();
    const [reservationIsOpen,setReservationIsOpen] = useState(false);

    return (
    <div className={classes.terrainContainer}>
            <div className={classes.title}>
                <Line color="#6BC4A6" />
                <h2>{title}</h2>
            </div>
            <div className={classes.content}>
                <div className={classes.left}>
                    <img src={img} alt="image" />
                    {
                        reservationIsOpen ? 
                        <Reservation terrainID={id} reservationTable={reservation}></Reservation> :
                        <div className={classes.btn}>
                            <Button content="Réserver" color="#005236" onClick={() => setReservationIsOpen(true)}/>
                        </div>

                    }
                    
                   
                    
                </div>
                <div className={classes.right}>
                    <div className={classes.group}>
                        <span className={classes.label}>Sport: </span>
                        <span className={classes.text}>{type}</span>
                    </div>
                    <div className={classes.group}>
                        <span className={classes.label}>Surface: </span>
                        <span className={classes.text}>{surface+" m²"}</span>
                    </div>
                    <div className={classes.group}>
                        <span className={classes.label}>Adresse: </span>
                        <span className={classes.text}>{address}</span>
                    </div>
                    <div className={classes.group}>
                        <span className={classes.label}>Description: </span>
                        <span className={classes.text}>{description}</span>
                    </div>
                    <div className={classes.groupRes}>
                        <span className={classes.label}>Réservé le: </span>
                        <div className={classes.headers}>
                                    <span>Date</span>
                                    <span>De</span>
                                    <span>Jusqu'à</span>
                        </div>
                        <div className={classes.calendrier}>
                            
                               
                                
                                    {
                                    reservation.map((res,index) => {
                                        if(res.date.split('T')[0] < date)
                                        return(
                                            <div key={index} className={classes.line}>
                                                <span className={classes.text}>{res.date.split('T')[0]}</span>
                                                <span className={classes.text}>{res.heure_debut}</span>
                                                <span className={classes.text}>{res.heure_fin}</span>
                                            </div>
                                        )
                                    })
                                    }
                                
                              
                           
                        </div>
                        
                    </div>
                   
                </div>
            </div>

    </div>
  )
}

export default Terrain;