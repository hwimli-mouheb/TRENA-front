import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classes from './TextField.module.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let styleError;
  let styleErrorInput;
  const [passVisible,setPassVisible] = useState(false);
  const [labelColor,setLabelColor] = useState("#A5A5A5");
  const [border,setBorder] = useState("1.5px solid #A5A5A5");
  const [borderDiv,setBorderDiv] = useState("2px solid #A5A5A5");
  const [isFocus,setIsFocus] = useState(false);
  const changeColor = () => {
    setIsFocus(true);
    setLabelColor("#005236");
  }
  const resetColor = () => {
    setIsFocus(false);
  }
  
  
  
  if(meta.touched && meta.error) {
    styleError ={
      border: "2px solid red"
    }
  }
  const passwordVisible = () => {
    setPassVisible(!passVisible);

  }


 let style ;
 const getStyle = () =>  {
   if(meta.touched && meta.error) {
     style=styleError;
    
   } else 
   if(isFocus) {
     style={border:borderDiv}
   } 
  
 }
 const handleChange = (e) => {
        props.emailchange(e.target.value)
 } 
   return (
    <div className={classes.inputBox}>
      <label htmlFor={field.name} style={{color:labelColor}}>{label}</label>
      {getStyle()}
      <div className={classes.input} style={style} >
        
        <input placeholder={props.placeholder} onFocus={changeColor} onBlur={resetColor} onInput={handleChange}
          className={classes.formControl}
          {...field} {...props} 
          autoComplete="off" style={isFocus && !meta.touched && !meta.error ?  {borderTop:border,borderBottom:border} : styleErrorInput } type={passVisible && props.type === "password" ? "text" : props.type }
        />
        { props.type === "password" && <span onClick={passwordVisible} className={classes.passIcon}>{!passVisible ? <Icon icon="bi:eye-slash" />: <Icon icon="akar-icons:eye" />}</span>}
        
        { props.type === "email" && <span className={classes.passIcon}><Icon icon="fluent:mail-24-filled" /></span>}
      </div>
      <div className={classes.error}>
        
        <ErrorMessage name={field.name}  />
      </div>
     
    </div>
  )
}