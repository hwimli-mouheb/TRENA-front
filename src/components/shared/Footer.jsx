import React from 'react'
import classes from './Footer.module.css';
import logo from '../../assets/logowhite.png'
import wave from '../../assets/wavefooter.png'
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.wave}>
        <img src={wave} alt="" />
      </div>
      <div className={classes.footer}>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.details}>
          <p className={classes.parag}>
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
          </p>
          <div className={classes.general}>
            <div className={classes.infos}>
              <h3>INFORMATIONS</h3>
              <ul className={classes.links}>
                <li>Terrains</li>
                <li>Coachs</li>
                <li>Réservations</li>
              </ul>
            </div>
            <div className={classes.socials}>
              <h3>SUIVEZ-NOUS</h3>
              <ul>
                <li>
                  fb
                  insta
                </li>
                <li>
                  mail
                  contact
                </li>
              </ul>
            </div>

          </div>


        </div>
        <div className={classes.divider}></div>
        <h3 className={classes.copyrights}>
          COPYRIGHTS © 2022 TRENA
        </h3>

      </div>
    </div>
    
  )
}

export default Footer