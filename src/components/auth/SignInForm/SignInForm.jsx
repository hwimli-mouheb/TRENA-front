import React, { useRef,useState } from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../../UI/button/Button";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaBox } from "../../../UI/SocialMediaBox/SocialMediaBox";
import { Line } from "../../../UI/line/Line";
import { Circle } from "../../../UI/circle/Circle";
import { useUserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
export const SignInForm = (props) => {
  
  const navigate = useNavigate();
  const [email,setEmail]= useState('');
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
 
       signInUser(values.email,values.password);
       
       if(!errorLogin){
        props.onSubmitForm()
        setTimeout(() => {
          navigate("/home");
        }, 2500);
       }
      
    
      }}
      
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <div className={classes.circleContainer}>
              <Circle color="#ffc480" width="26px" height="26px" />
              <Circle color="#ffae52" width="32px" height="32px" />
              <Circle color="#ff8800" width="40px" height="40px" />
            </div>
            
            <h2 className={classes.title}>Connectez-Vous</h2>
            <Line color="#005326" />
          </div>
          <div className={classes.form}>
            <Form>
              <TextField label="Email" name="email" type="email" emailchange={setEmail}/>
              <TextField label="Mot De Passe" name="password" type="password" />
              <div className={classes.submit}>
                <Button color="#005236" content="Se Connecter" type="submit" />
                
              </div>

              {errorLogin && <div className={classes.signinerror}>
                  Ce Compte n'existe pas.Veuillez reessayer
              </div>}
              <div className={classes.social}>
                 
                  <SocialMediaBox google={signInWithGoogle} fb={signInWithFacebook}  />
              </div>
              <h5 className={classes.note} onClick={forgotPasswordHandler} >Mot De Passe Oublié ?</h5>
              
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};