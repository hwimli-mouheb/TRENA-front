import React, { useState } from 'react'
import classes from './Reservation.module.css';
import { Button } from '../../UI/button/Button';
import Axios from 'axios';
import { useParams } from "react-router";
import { useUserContext } from '../../contexts/userContext'
function Reservation({terrainID,reservationTable}) {

  const { user} = useUserContext();
  const [date,setDate] = useState(new Date());
  const [heureD,setHeureD] = useState(0)
  const [heureFin,setHeureFin] = useState(0);
  const [reservation,setReservation] = useState({});
  const [dispo,setDispo] = useState(true);

  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setReservation({
      user:user.email,
      terrain: terrainID,
      date: date,
      heure_debut: heureD,
      heure_fin: heureFin
    })
    reservationTable.map((res) =>{
        if(date === res.date.split('T')[0] ){
          if(heureD >= res.heure_debut && heureD <= res.heure_fin && heureFin >= res.heure_debut && heureFin <= res.heure_fin) {
            setDispo(false)
          }
        }
           
      })

    
    if(dispo) {
      try {
        const resp = await Axios.post('http://localhost:3000/reservations', reservation)
        console.log(resp.data)
      } catch(error) {
        console.log(error.response)
      }
    }
    
   // addReservation(reservation)
  }
 /* const addReservation = async(reservation) => {
   
     await Axios.post('http://localhost:3000/reservations', reservation)
     .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    });
    

  };*/
  
  return (
    <div className={classes.reservation}>
        <h2>Réservations</h2>
        <form onSubmit={handleSubmit} method="post">
          <h4>1. Choisir une date</h4>
          <input type="date" name="date" onChange={(e) => setDate(e.target.value)} />
          <div className={classes.date}>
            <div className={classes.section}>
              <h4>2. De(heure)</h4>
              <h4>Jusqu'à(heure)</h4>
            </div>
            <div className={classes.section}>
              <input type="number" name="heure_debut" onChange={(e) => setHeureD(e.target.value)}/>
              <input type="number" name="heure_fin" onChange={(e) => setHeureFin(e.target.value)} />
            </div>
          </div>
          {
            !dispo && <div>horaire indiponible</div>
          }
          <Button content="Réserver" color="#005236" ></Button>
        </form>
        


    </div>
  )
}

export default Reservation;