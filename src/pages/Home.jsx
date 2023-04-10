import React from 'react'
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Hero } from '../components/home/Hero';
import { AboutUs } from '../components/home/AboutUs';
import { TerrainsSlider } from '../components/home/TerrainsSlider';
import { Coach } from '../components/home/Coach';
import Footer from '../components/shared/Footer';

export const Home = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/login')
  }
  const handleSignup = () => {
    navigate('/signup')
  }
  //console.log(user)
  return (

    
    <div>

     
  <Hero user={user} logout={logoutUser} />
  <AboutUs />
  <TerrainsSlider />
  <Coach />
  <Footer />

    </div>
  )
}
