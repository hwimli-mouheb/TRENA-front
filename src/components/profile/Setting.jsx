import React from 'react'
import style from './Setting.module.css';
import { TextField } from '../auth/TextField';
import { useState } from 'react';
import {EmailPassSwitcher} from './emailpassswitcher/EmailPassSwitcher'
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button } from '../../UI/button/Button';
import { ProgressCircle } from '../../UI/progressCircle/ProgressCircle';
export const Setting = () => {
 
  const [isClicked,setIsClicked] = useState('password');

    const switchMode = () => {
        isClicked === 'password' ? setIsClicked('email') : setIsClicked('password');
    }
    const validate = Yup.object({
      oldpassword:Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !")
      .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
      newpassword: Yup.string()
        .required("Password is required !")
        .min(8, "Password must be at least 8 charaters !")
        .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
      confirmpassword: Yup.string().when("newpassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords Must Match !"),
      }),
    });
  return (
    <Formik
    initialValues={{
    oldpassword:"",
    newpassword:"",
    confirmpassword:""
  }
  }
  validationSchema={validate}
  onSubmit={(values) => {
    console.log(values);
  }}
  >
  {(formik) => (
    <div className={style.container}>
      
      <div className={style.title}><h1>PARAMETRES</h1> </div>
      
        <div className={style.meriem}>
          <div className={style.form}>
            <div className={style.switcherContainer}>
              <EmailPassSwitcher switchMode={switchMode} isClicked={isClicked} />
            </div>
            <div className={style.formContainer}>
              {
                isClicked === "password" ? 
                <Form>
                  <div className={style.passContainer}>
                    <TextField
                      label="Ancien Mot De Passe"
                      name="oldpassword"
                      type="password"
                    />
                    <TextField
                      label="Nouveau Mot De Passe"
                      name="newpassword"
                      type="password"
                    />
                    <TextField
                      label="Confirmer Le Nouveau Mot De Passe"
                      name="confirmpassword"
                      type="password"
                    />
                    <Button content="Enregistrer" color="#005236" />
                  </div>
                </Form>
                
                 :



                 <Form>
                    <div className={style.passContainer}>
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <TextField
                        label="New Email"
                        name="newemail"
                        type="email"
                      />
                      
                      <Button content="Enregistrer" color="#005236" type="submit" />
                    </div>
                 </Form>
                
              }
            </div>
          </div>
         
            
            
        </div>
      </div>
     
    )}
    </Formik>
  )
}