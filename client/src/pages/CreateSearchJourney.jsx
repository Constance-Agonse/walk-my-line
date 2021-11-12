import React from 'react'
import { NavLink } from "react-router-dom";

export default function CreateSearchJourney() {
  return (
    <div>
      Create a journey, first seach by 
      <NavLink exact to="/profile">Profile</NavLink>      
      <NavLink exact to="/">Search a journeyyyyy</NavLink>
    </div>
  )
}
