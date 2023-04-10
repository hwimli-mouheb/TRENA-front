import React, { useState } from 'react'
import classes from './EmailPassSwitcher.module.css';
import { Icon } from '@iconify/react';
export const EmailPassSwitcher = ({switchMode, isClicked}) => {
  
  
    
    return (
    <div className={classes.switcher}>
        <div onClick={switchMode} className={classes.password} style={isClicked === "password" ? {background:"#FE982A"} : null}>
            <Icon icon="ant-design:lock-filled" color={isClicked === "password" ? "white" : "#FE982A"} />
        </div>
        <div onClick={switchMode} className={classes.email} style={isClicked === "email" ? {background:"#FE982A"} : null}>
            <Icon icon="dashicons:email-alt" color={isClicked === "email" ? "white" : "#FE982A"} />
        </div>

    </div>
  )
}
