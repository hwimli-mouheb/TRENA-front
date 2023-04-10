import React from 'react'
import classes from './AdminContainer.module.css';

import FormSection from './FormSection';
import Trena from '../../../assets/Trena.png'
import LogoOranger from '../../../assets/LogoOranger.png'
import { useState } from 'react';
import { terminate } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logowhite.png'
export const AdminContainer = (props) => {
  

  const [showForm, setshowForm] = useState( props.toggle && (window.innerWidth < 1000));
  const [submitted, setSubmitted] = useState(false);
  const onShow = () => {
    setshowForm(true);
  };
  const onSubmitForm = () => {
    setSubmitted(true);
  };
  const handleResize = () => {
    if (window.innerWidth > 1000) {
      setshowForm(false);
    } else {
      if (submitted) setshowForm(true);
    }
  };
  window.addEventListener("resize", handleResize);

  let formWhiteClass = ["", ""];
  if (showForm) {
    formWhiteClass[0] = classes.animate;
  } else {
    formWhiteClass[0] = classes.hidden;
  }
  if (submitted) {
    formWhiteClass[1] = classes.exit;
  } else {
    formWhiteClass[1] = "";
  }
  return (
    <div className={classes.authContainer}>
      
                <FormSection auth={props.auth} onSubmitForm={onSubmitForm} submitted={submitted} /> 
           
    </div>
   
  )
}
