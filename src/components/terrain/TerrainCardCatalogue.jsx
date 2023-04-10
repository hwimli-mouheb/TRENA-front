import React from 'react'
import classes from './TerrainCardCatalogue.module.css'
import { Button } from '../../UI/button/Button';
import { useNavigate } from 'react-router-dom';
const TerrainCardCatalogue = ({id,title,address,type,surface,description,image}) => {
    
    const navigate = useNavigate();
    return (
    <div className={classes.card}>
        <div className={classes.img}>
            <img src={image} alt="" />
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
            <h4>{address}</h4>
            <h4>Surface:{" "+surface+" m²"}</h4>
            <p>{description+"[...]"}</p>
        </div>
        <div className={classes.detailBtn}>
            <Button content="Détails" color="#005236" onClick={() => navigate(`/terrains/${id}`)} />
        </div>


    </div>
  )
}

export default TerrainCardCatalogue