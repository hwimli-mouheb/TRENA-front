import React from 'react'
import classes from './EditProfile.module.css';
import {ProgressCircle} from '../../UI/progressCircle/ProgressCircle';
import { TextField } from '../auth/TextField';
import {Formik , Form} from 'formik';
import { Button } from '../../UI/button/Button';
export const EditProfile = () => {
  return (
    <Formik
    initialValues={{
      lastname: "",
      firstname: "",
      birthday:"",
      address:"",
      phone:""
    }}
   
    onSubmit={(values) => {

        console.log(values)
    
  
    }}
    
  >
    {(formik) => (
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>MODIFIER MON PROFIL</h1> 
        </div>
        <div className={classes.meriem}>
            <div className={classes.form}>
            <Form>
                <div className={classes.formContent}>
                        <div className={classes.inputGroup}>
                            <TextField label="Nom" name="lastname" type="text"/>
                            <TextField label="Prénom" name="firstname" type="text"/>
                        </div>
                        <div className={classes.inputGroup}>
                            <TextField label="Date De Naissance" name="birthday" type="date"/>
                            <TextField label="Adresse" name="address" type="text"/>
                        </div>
          
                        <div className={classes.submit}>
                        <Button color="#005236" content="Enregistrer" type="submit" />
                        
                        </div>
                </div>
                
                
            </Form>
            </div>
            
        </div>
        
      </div>
    )}
  </Formik>
   
  )
}
