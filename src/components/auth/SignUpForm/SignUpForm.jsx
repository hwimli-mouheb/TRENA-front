import React from "react";
import classes from "./SignUpForm.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaBox } from "../../../UI/SocialMediaBox/SocialMediaBox";
import { Line } from "../../../UI/line/Line";
import { Circle } from "../../../UI/circle/Circle";
import { useState } from "react";
import { StepOne } from "./Step1";
import { StepTwo } from "./Step2";
import { useUserContext } from "../../../contexts/userContext";
import { StepThree } from './Step3';

export const SignUpForm = (props) => {
  const { registerUser, signInWithGoogle,errorSignUp } = useUserContext();

  const validate = Yup.object({
    email: Yup.string()
      .email("Email invalid !")
      .required("Email obligatoire !"),
    password: Yup.string()
      .required("Mot de passe obligatoire !")
      .min(8, "Doit contenir au moins 8 characters !")
      .matches(/^(?=.*[A-Z])/, "Doit contenir au moins 8 characters et 1 lettre majuscule"),
      confirmpassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords Must Match !"),
      }),
     
  });
  const validateStep2 = Yup.object({
    telephone: Yup.string()
      
      .required("Telephone obligatoire"),
    profession: Yup.string()
    .default('Demandeur de réservation')
   
     
  });
  const [next, setNext] = useState(1);
  const nextHandler = () => {

    if (next === 1) {
      setNext(2);
    } else if (next === 2) {
      setNext(3);
    }
  };
  const previousHandler = () => {
    if (next === 2) {
      setNext(1);
    } else if (next === 3) {
      setNext(2);
    }
  };
  
  const submitSignUp = (values) => {
    registerUser(values.email,values.password);
    if(errorSignUp !== ""){
      console.log(errorSignUp)
    } else {
      nextHandler()
    }
    
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        telephone:"",
        confirmpassword:"",
        profession:"",
      }}
      validationSchema={next===1 ? validate:validateStep2}
      onSubmit={(values) => {
        console.log(values)
        submitSignUp(values)
        
      }}
    >
      {(formik) => (
        <div className={classes.signUpForm}>
         {next!==3 && <div className={classes.header}>
         <div className={classes.circleContainer}>
              <Circle color="#ffc480" width="26px" height="26px" />
              <Circle color="#ffae52" width="32px" height="32px" />
              <Circle color="#ff8800" width="40px" height="40px" />
            </div>
            <h2 className={classes.title} >Inscrivez-Vous</h2>
            <Line color="#ff8800" />
          </div>}
          <div className={classes.form}>
              {next!==3 && <div className={classes.social}>
                  
                  <SocialMediaBox google={signInWithGoogle} />
               
              </div>}
              
              
                {next === 1 && 
                
                 
                  <Form>
                    <div className={classes.formContent}>
                      <button className={classes.arrowLeft} onClick={previousHandler} disabled type="button">
                      <svg viewBox="0 0 50 80" >
                        <polyline fill="none" stroke="#ff8800" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
                      45.63,75.8 0.375,38.087 45.63,0.375 "/>
                      </svg>  
                      </button>
                      <StepOne errorSignUp={errorSignUp} />
                      <button className={classes.arrowRight} type="submit">
                        <svg  viewBox="0 0 50 80" >
                          <polyline fill="none" stroke="#ff8800" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
                        0.375,0.375 45.63,38.087 0.375,75.8 "/>
                        </svg>
                      </button>
                    </div>
                    
                    
                    
                  </Form>
                 
                 
                }
                 
                 {next === 2 && 
                  <Form>
                <div className={classes.formContent}>
                <button className={classes.arrowLeft} type="button" onClick={previousHandler}>
                  <svg  viewBox="0 0 50 80" >
                    <polyline fill="none" stroke="#ff8800" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                  45.63,75.8 0.375,38.087 45.63,0.375 "/>
                  </svg>  
                </button>
               
                  <StepTwo />
               
                <button className={classes.arrowRight} type="submit">
                  <svg  viewBox="0 0 50 80" >
                    <polyline fill="none" stroke="#ff8800" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "/>
                  </svg>
                </button>

              </div>
              </Form>
                }
                {next ===3 && 
                  <StepThree />
                }
               
             
          </div>
         
        </div>
      )}
    </Formik>
  );
};