import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      c'est la home
      <NavLink exact to="/profile">Profile</NavLink>
      <NavLink exact to="/createSearchJourney">Create a journeyyy !</NavLink>

    </div>
  )
}
