import React from 'react'
import classes from './Sidebar.module.css';
import { useState } from 'react';
import { Sideitem } from './Sideitem';
export const Sidebar = ({active,setActive}) => {
  
    //const [active,setActive] = useState(0);
   
    return (
       //
    <div className={classes.sidebar}>
     
     <div onClick={()=>{setActive(0)}} >
         {
             active === 0 ? <Sideitem icon="iconoir:profile-circled" color="#fff" colorback="#6BC4A6" /> :
             <Sideitem icon="iconoir:profile-circled" color="#6BC4A6" colorback="#fff" />
         }
     </div>
     <div onClick={()=>{setActive(1)}} >
         {
             active === 1 ? <Sideitem icon="bytesize:settings" color="#fff" colorback="#6BC4A6" /> :
             <Sideitem icon="bytesize:settings" color="#6BC4A6" colorback="#fff" />
         }
     </div>
     <div onClick={()=>{setActive(2)}} >
         {
             active === 2 ? <Sideitem icon="carbon:order-details" color="#fff" colorback="#6BC4A6" /> :
             <Sideitem icon="carbon:order-details" color="#6BC4A6" colorback="#fff" />
         }
         </div>
    
   
    </div>
  )
}
