import React , {useState} from 'react'
import classes from './NavbarColor.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logowhite.png';
import man from '../../assets/man.png'
import { Menu } from './Menu';
import wave from '../../assets/waveNavbar.svg'
export const NavbarColor = ({user,logout}) => {


    const [menuIsOpen, setMenuIsOpen] = useState(false);

    
  return (
    <div className={classes.navbarContainer}>
        <div className={classes.nav}>
        <Link to='/home' className={classes.logo}>
            <img src={logo} alt="" />
        </Link>
        <ul className={classes.navlinks}>
            <li ><Link className={classes.link} to='/home'>Accueil</Link></li>
            <li><Link className={classes.link} to='/terrains'>Terrains</Link></li>
            <li><Link className={classes.link} to='/coachs'>Coachs</Link></li>
        </ul>
       {
       !user ? <ul className={classes.connection}>
            <li className={classes.connectionItem}><Link className={classes.link} to='/login'>Se Connecter</Link></li>
            <li className={classes.connectionItem}>|</li>
            <li className={classes.connectionItem}><Link className={classes.link} to='/signup'>S'inscrire</Link></li>
        </ul> :
        
        <div className={classes.userInfo}>
            <div className={classes.user}>
                <span className={classes.gradient} >Bienvenu, {user.email}</span> 
                <img onClick={() => {setMenuIsOpen(!menuIsOpen)}}  src={man} alt="" />
            </div>
            {
                menuIsOpen &&
                    <div className={classes.menu}>
                        <Menu logout={logout} />
                    </div>
            }
            
            
        </div>
        }

        </div>
        <img src={wave} className={classes.wave} alt="" />

    </div>
    
  )
}
