import React from 'react'
import { Navbar } from '../components/shared/Navbar'
import Catalogue from '../components/terrain/Catalogue'
import Steps from '../components/terrain/Steps'
import { useUserContext } from "../contexts/userContext";

export const Terrain = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
        

        <Steps user={user} logout={logoutUser} />

        <Catalogue />
    </div>
  )
}
