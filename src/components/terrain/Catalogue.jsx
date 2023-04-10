import React, { useState , useEffect} from 'react'
import classes from './Catalogue.module.css';
import { Line } from '../../UI/line/Line';
//import terrains from '../../common/data/Terrains.json';
import TerrainCardCatalogue from './TerrainCardCatalogue';
import Axios from 'axios';
import Filters from './Filters';
import { Button } from '../../UI/button/Button';

const Catalogue = () => {
   

    const [terrains,setTerrains]=useState([]);
    const [region,setRegion] = useState(null)
    const [checked, setChecked] = useState([]);
    //minsurface , max surface
    const [surfaceRange,setSurfaceRange] = useState([0,100]);
    const filter = () => {
        
            if(checked && region) {
                Axios.get("http://localhost:3000/terrains?ville="+region+"&type="+checked[0]+","+checked[1]+"&surfaceMin="+surfaceRange[0]+"&surfaceMax="+surfaceRange[1]).then( (response) => {

                    setTerrains(response.data);
                    
                })
                .catch((error) => {
                    console.error(error);
                });
            }
            else if(checked) { 
                 Axios.get("http://localhost:3000/terrains?type="+checked[0]+","+checked[1]+"&surfaceMin="+surfaceRange[0]+"&surfaceMax="+surfaceRange[1]).then( (response) => {

                    setTerrains(response.data);
                    
                })
                .catch((error) => {
                    console.error(error);
                });
            }
            else if(region) { 
                Axios.get("http://localhost:3000/terrains?ville="+region+"&surfaceMin="+surfaceRange[0]+"&surfaceMax="+surfaceRange[1]).then( (response) => {

                   setTerrains(response.data);
                   
               })
               .catch((error) => {
                   console.error(error);
               });
            } 
            else {
                Axios.get("http://localhost:3000/terrains").then( (response) => {

                        setTerrains(response.data);
                        
                })
                .catch((error) => {
                    console.error(error);
                });
            }


        
    } 
    useEffect(() => {
            
                 Axios.get("http://localhost:3000/terrains").then( (response) => {

                        setTerrains(response.data);
                        
                })
                .catch((error) => {
                    console.error(error);
                });
    
    },[]);
   
    console.log(terrains)
    console.log(checked)
    return (
        <div className={classes.catalogueContainer}>
            <div className={classes.title}>
                <Line color="#6BC4A6" />
                <h2>Terrains Sportifs</h2>

            </div>
            <div className={classes.content}>
                <div className={classes.filters}>
                        <div>
                        <Filters terrains={terrains} setChecked={setChecked} setRegion={setRegion} setSurfaceRange={setSurfaceRange} region={region} surfaceRange={surfaceRange} checked={checked}   />
                        </div>
                        
                       
                        <div>
                            <Button content="Filtrer" color="#FE982A" onClick={filter} />
                        </div>
                        
                </div>
                <div className={classes.catalogue}>
                    {
                        terrains.map((terrain,index) => (
                            <div key={index} className={classes.terrainCard}>
                                <TerrainCardCatalogue image={process.env.PUBLIC_URL + `/terrains/terrain${index+1}.jpg`} id={terrain.id} title={terrain.title} address={terrain.address} surface={terrain.surface} description={terrain.description} />

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
    }

export default Catalogue