import React, { useState } from 'react'
import classes from './Filters.module.css';
import {Button} from '../../UI/button/Button';
import foot from '../../assets/football.png'
import basket from '../../assets/basketball-ball.png'
import tennis from '../../assets/tennis.png'
import volleyball from '../../assets/volleyball.png'
import { RegionDropdown, } from 'react-country-region-selector';
import { Slider } from '@material-ui/core';
const Filters = ({terrains,setRegion,setChecked,setSurfaceRange,region,surfaceRange,checked}) => {
    //filters
    //region : ville
   /* const [region,setRegion] = useState('');
    //sports checked
    const [checked, setChecked] = useState([]);
    //minsurface , max surface
    const [surfaceRange,setSurfaceRange] = useState([20,50]);
    */
    
  
   
    const handleSurfaceChange = (e,data)=>{
        
        setSurfaceRange( data );
        
      }
    const selectRegion =  (val) => {
        setRegion(val);
       
      }
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        
        
      }
      
   //console.log(region,checked,surfaceRange)
    
  
  return (
    <div className={classes.filters}>
        <div className={classes.sport}>
            <Button content="Sports" color="#FE982A" />

            <div className={classes.input}>
                <input type="checkbox" onInput={handleCheck} value="football" />
                <span>Football</span>
                <img src={foot} alt="" />
            </div>
            <div className={classes.input}>
                <input type="checkbox" onInput={handleCheck} value="tennis" />
                <span>Tennis</span>
                <img src={tennis} alt="" />
            </div>
            <div className={classes.input}>
                <input type="checkbox" onInput={handleCheck} value="volleyball" />
                <span>Volleyball</span>
                <img src={volleyball} alt="" />
            </div>
            <div className={classes.input}>
                <input type="checkbox" onInput={handleCheck} value="basketball" />
                <span>Basketball</span>
                <img src={basket} alt="" />
            </div>
            
        </div>
        <div className={classes.address}>
            <Button content="Gouvernorat" color="#FE982A" />
            <div className={classes.selectG} style={{marginTop:"20px"}}>
                <RegionDropdown
                    defaultOptionLabel='Choisissez votre ville'
                    country="Tunisia"
                    value={region}
                    onChange={(val) => selectRegion(val)} />
            </div>
            
            
        </div>
        <div className={classes.surface}>
            <Button content="Surface" color="#FE982A" />
            <div className={classes.range}>
                <Slider value={surfaceRange}  color="#FE982A" onChange={handleSurfaceChange} />
                <div className={classes.labels}>
                    <span>Min{" "+surfaceRange[0]+"000 m²"}</span>
                    <span>Max{" "+surfaceRange[1]+"000 m²"}</span>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Filters