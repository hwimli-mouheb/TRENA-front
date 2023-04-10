import {React, useState, useEffect} from 'react'
import Terrain from '../components/terrain/Terrain'
import Axios from 'axios';
import { useParams } from "react-router";
import Footer from '../components/shared/Footer';
import { NavbarColor } from '../components/shared/NavbarColor';

import { useUserContext } from "../contexts/userContext";

const SingleTerrain = () => {
  
    const { user, logoutUser } = useUserContext();
    const { id } = useParams();
    const [terrain,setTerrain]=useState({});
    const [reservation,setReservation] = useState([]);
    useEffect(() => {
            
        Axios.get("http://localhost:3000/terrains/"+id).then( (response) => {

               setTerrain(response.data);
               
       })
       .catch((error) => {
           console.error(error);
       });
       Axios.get("http://localhost:3000/reservations?terrain="+id).then( (response) => {

               setReservation(response.data);
               
       })
       .catch((error) => {
           console.error(error);
       });

},[]);
//console.log(terrain)
    return (
    <div>

        <NavbarColor user={user} logout={logoutUser}></NavbarColor>

        <Terrain image={process.env.PUBLIC_URL + `/terrains/terrain${id}.jpg`} id={terrain.id} address={terrain.address} title={terrain.title} description={terrain.description} surface={terrain.surface} type={terrain.type} reservation={reservation} />
        <Footer />
    </div>
  )
}

export default SingleTerrain