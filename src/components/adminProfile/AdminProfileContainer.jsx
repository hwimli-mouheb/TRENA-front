import React, {useState, useEffect} from 'react'
import classes from './AdminProfileContainer.module.css';
import logo from '../../assets/Trena.png';
import { Button } from "../../UI/button/Button";
import { Table } from "./Table";
import { Table1 } from "./Table1";
import { Table2 } from "./Table2";
const columnTerrains = [
       
    { title: "Terrain", field: "title", searchable: false, filtering: true , align: "center"},
    { title: "Surface", field: "surface",type:'numeric', searchable: false, filtering: false , align: "center"},
    { title: "Type", field: "type", sorting: false, searchable: false,  align: "center" }, 
    { title: "Address",  field: "address", searchable: false, sorting: true, filtering: false, align: "center" },
    { title: "Disponible", field: "available", sorting: false, searchable: false, align: "center",lookup:{"true":"Disponible","false":"Non Disponible"} }

]
const columnCoaches =[
       
    { title: "Nom", field: "lastname", searchable: false, filtering: true , align: "center"},
    { title: "Prenom", field: "firstname", searchable: false, filtering: false , align: "center"},
    { title: "Profession", field: "profession", sorting: false, searchable: false,  align: "center" } 
    

]

export const AdminProfileContainer = () => {
    
  const [data, setData]= useState("terrains");

return (
        <>
            <div className={classes.container}>

                <div className={classes.sidebar}>
                    <div className={classes.logo}>
                        <img src={logo}></img>
                    </div>
                    <div className={classes.controls}>
                        <div className={classes.button}>
                            <Button shadow="5px 10px 18px #888888" colorback="green" color="white" content="Terrains"  onClick={()=>{setData("terrains")}} />
                        </div>
                        <div className={classes.button}>
                            <Button shadow="5px 10px 18px #888888" colorback="green" color="white" content="Coachs" onClick={()=>{setData("coaches")}} />
                        </div>
                        <div className={classes.button}>
                            <Button shadow="5px 10px 18px #888888" colorback="green" color="white" content="Réservation" onClick={()=>{setData("reservation")}} />
                        </div>

                    </div>

                </div>
                <div className={classes.mainContent}>
                    <div className={classes.table}>
                        { data== "terrains" ? <Table /> : data== "coaches" ? <Table1 />: <Table2/>}
                        
                         
                    </div>
                </div>
            </div>

        </>
    )
}