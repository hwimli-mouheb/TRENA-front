import React from "react";
import { Button } from "../../../UI/button/Button";
import { TextField } from "../TextField";
import classes from "./Step1.module.css";

export const StepOne = (props) => {
  return (
    <div className={classes.stepOne}>
      <div>
        <TextField label="Email" name="email" type="email"  form="signup" />
        <TextField label="Password" name="password" type="password"  form="signup"/>
        <p className={classes.noteP1}>Doit contenir au moins 8 characters </p>
        <p className={classes.noteP2}>et 1 lettre majuscule.</p>
        <TextField
          label="Confirm Password"
          name="confirmpassword"
          type="password"
          form="signup"
          failed={props.failed}
        />
        {props.errorSignUp && <div className={classes.signuperror}>
                  Email déjà utilisé !
              </div>}
        
      </div>
    </div>
  );
};