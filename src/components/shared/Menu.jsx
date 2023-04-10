import React from 'react'
import classes from './Menu.module.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
export const Menu = ({logout}) => {

  const navigate = useNavigate();

  return (
    <div className={classes.menuContainer}>
     
      <div className={classes.menuItemFirst}>
        <Icon width="max(1.8em,2.2vw)" height="max(1.8em,2.2vw)" icon="akar-icons:chat-edit" color="#A5A5A5" />
        <h4 onClick={() => {navigate('/profil')}}>Modifier Mon Profil</h4>
      </div>
      <div className={classes.menuItemSecond}>
        <Icon width="max(1.8em,2.2vw)" height="max(1.8em,2.2vw)" icon="carbon:logout" color="#A5A5A5" />
        <h4 onClick={logout}>Se Déconnecter</h4>
      </div>
    </div>
  )
}
