import classes from "./FormSection.module.css";
import { SignInForm } from "../SignInForm/SignInForm";
import { useState } from "react";


import {  useNavigate } from "react-router-dom";
import { ReactComponent as YourSvg } from '../../../assets/undraw_mobile_login_re_9ntv.svg';
const FormSection = (props) => {
    
    const [showPopup,setShowPopup] = useState(false);
    const text = ["Vous Etes Nouveau ? Rejoignez-Nous !","Déjà Membre ? Connectez-Vous !"]
    const [isClicked,setIsClicked] = useState(props.auth);
    const [note,setNote] = useState(text[0]);
   
    const navigate =  useNavigate();
    const handleClick = () => {
        setIsClicked(!isClicked);
        note === text[0] ? setNote(text[1]) : setNote(text[0]);
       
        if (isClicked) {
          navigate("/profile");
        } 
    }

    const popupTimeOut = () => {
      setTimeout(() => {
        setShowPopup(false)
      },5000)
    }
    
    
  return (
    <div className={classes.formSection}>
     
  
      <div className={classes.formContainer}>
      
           
            <div>
               <SignInForm closePopup={popupTimeOut} onSubmitForm={props.onSubmitForm} showPopup={showPopup} setShowPopup={setShowPopup} /> 
            </div>  

      
      
      </div>
      <div className={classes.imageContainer}>
      <YourSvg />
    </div>
    </div>
  );
};

export default FormSection;