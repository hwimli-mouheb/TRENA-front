import React, { useState, useEffect } from 'react'
import style from './Reservation.module.css';
import Axios from 'axios'
export const Reservation = ({user}) => {
  const [reservations,setReservations] = useState([]);
console.log(user.email)
  useEffect(() => {
            
   Axios.get("http://localhost:3000/reservations?user="+user.email).then( (response) => {

           setReservations(response.data);
           
   })
   .catch((error) => {
       console.error(error);
   });

},[]);
  return (
    <div className={style.container}>
     
      <div className={style.title}><h1>RESERVATIONS</h1> </div>
    
        <div className={style.meriem}>
          <div className={style.headers}>
            <h3>Date de réservation: </h3>
            <h3>Terrain: </h3>
            <h3>De (heures): </h3>
            <h3>Jusqu'à (heures): </h3>
          </div>
          <div className={style.content}>
          {
            reservations.map((res) => 
            
              <div className={style.line}>
                <h4 className={style.date}>
                  {res.date.split('T')[0]}
                </h4>
                <h4 className={style.date}>
                  {res.terrain}
                </h4>
                <h4 className={style.date}>
                  {res.heure_debut+"h"}
                </h4>
                <h4 className={style.date}>
                  {res.heure_fin+"h"}
                </h4>

              </div>
            )
          }
         
          </div>
          
            
            
        </div>
      </div>
  )
}