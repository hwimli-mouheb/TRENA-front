import React , {useState} from 'react'
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logowhite.png';
import man from '../../assets/man.png'
import { Menu } from './Menu';
export const Navbar = ({user,logout,mode}) => {


    const [menuIsOpen, setMenuIsOpen] = useState(false);

    
  return (
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
                <span >Bienvenu, {user.email.split('@')[0]}</span> 
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
  )
}
