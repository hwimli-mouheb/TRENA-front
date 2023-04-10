import React from 'react';
import classes from './Popup.module.css';
import {motion,  AnimatePresence} from 'framer-motion';
import { Line } from '../line/Line';
const backdropVariants = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const popVariants = {
    visible:{
        scale:1.1,
        y:"60px",
        opacity: 1,
        transition: {delay: 0.5}

    },
    hidden:{
        scale:0.5,
        y:"-100vh",
        opacity:0

    }
}
export default function Popup(props) {
  
  
    return (
    <AnimatePresence>
        { props.showPopup && (
            <motion.div className={classes.backdrop}
                variants={backdropVariants} 
                animate="visible"
                initial="hidden" 
                onClick={props.closePopup}
            >
                <motion.div className={classes.popup}
                    variants={popVariants} 
                    animate="visible"
                    initial="hidden"
                >
                   <p> We sent you an email to ****@****.**** , please open it and reset your 
                   password then come back and try to sign in with the new assigned password !</p>
                  
                   <h3>Welcome To Trena !</h3>
                 
                </motion.div>

            </motion.div>
        )}
    </AnimatePresence>
    );
}