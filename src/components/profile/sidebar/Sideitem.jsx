import React from 'react'
import classes from './Sideitem.module.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
export const Sideitem = (props) => {


  return (
     
    <div className={classes.sideitem} style={{background: props.colorback}} >
        <Icon icon={props.icon} color={props.color} width="max(2em,3vw)" height="max(2em,3vw)" />
    </div>
  )
}
