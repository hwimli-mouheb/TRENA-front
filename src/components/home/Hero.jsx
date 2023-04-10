import React from 'react'
import classes from './Hero.module.css';
import { Navbar } from '../shared/Navbar';
import { motion } from 'framer-motion';
import { Button } from '../../UI/button/Button';
import logo from '../../assets/logoorange.png'
import { useNavigate } from 'react-router-dom';
export const Hero = ({user,logout}) => {

    const navigate = useNavigate();
    const paragvariants = {
        hidden:{
            x:"-100vw",
            scale:0.8
        },
        animate:{
            x:0,
            scale:1,
            transition:{
                duration:1.5,
                bounce:0.3
            }

        }
    }
    console.log(user)
  return (
    <div className={classes.hero}>
        <Navbar user={user} logout={logout} />
        <div className={classes.intro}>
            <div className={classes.parags}>
                <motion.div className={classes.first} >
                     Avec la plateforme web 
                     <div className={classes.logo}>
                        <img src={logo} alt="" />
                    </div>
                </motion.div>
                <br />
                <motion.div >
                On vous offre la chance de pratiquer vos sports préférés.

                </motion.div>
                <motion.div >
                     On met à votre disposition
                </motion.div>
                <motion.div className={classes.gradient} style={{color:" #6BC4A6",fontWeight:"600",scale:"1.2"}} >
                    +20 terrains sportifs
                </motion.div>
                <div className={classes.btn}><Button onClick={() => navigate('/terrains')} content="Réservez votre terrain" color="#005326" /></div>
                
                

            </div>
            <div>
                
            </div>
            

        </div>

    </div>
  )
}
