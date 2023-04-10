import React, { useRef,useState } from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../../UI/button/Button";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Line } from "../../../UI/line/Line";

import { useUserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
export const SignInForm = (props) => {
  
  const navigate = useNavigate();
  const [email,setEmail]= useState('');
  const [admin,setAdmin]= useState(true);
  const {signInWithGoogle,forgotPassword,signInUser,errorLogin, signInWithFacebook} = useUserContext();
  const forgotPasswordHandler = () => {
    if(email) {
      forgotPassword(email);
      props.setShowPopup(true)
      props.closePopup()
    } 
    
  };
  const validate = Yup.object({
    email: Yup.string()
      .email("Email Invalid !")
      .required("Email Obligatoire !"),
    password: Yup.string()
      .required("Mot De Passe Obligatoire !")
      .min(8, "Mot de passe doit avoir au minimum 8 caracteres !"),
  });
 
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
 
       if((values.email=="admin@trena.com")&&(values.password=="12345678"))
       {
        props.onSubmitForm()
        setTimeout(() => {
          navigate("/adminProfile");
        }, 1500);
       }else{
        setAdmin(false);
       }
      
    
      }}
      
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <div className={classes.leftie}>
            <Line color="#82b186" />
            </div>
            <div className={classes.rightie}>
            <h1 style={{fontWeight:900}}>Bienvenu Admin</h1>
            </div>
          </div>
          <div className={classes.form}>
            <Form>
              <TextField label="Adresse mail" name="email" type="email" emailchange={setEmail}/>
              <TextField label="Mot De Passe" name="password" type="password" />
              <div className={classes.submit}>
                  
                      <Button color="#005236" content="Se Connecter" type="submit" />
                  
                
                
              </div>

              {! admin && <div className={classes.signinerror}>
                  Ce Compte n'existe pas.Veuillez reessayer
              </div>}
              
              
              
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};