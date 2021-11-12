import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      c'est la home
      <NavLink exact to="/profile">Profile</NavLink>
      <NavLink exact to="/createSearchJourney">Create a journeyyy !</NavLink>
      
      <NavLink exact to="/signup">Sign up !</NavLink>
      <NavLink exact to="/signin">Sign in !</NavLink>

    </div>
  )
}
