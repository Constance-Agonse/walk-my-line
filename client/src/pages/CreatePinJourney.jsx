import React from 'react'
import { NavLink } from "react-router-dom";

export default function CreatePinJourney() {
  return (
    <div>
      Create a journey with pins
      <NavLink exact to="/profile">Done ! (go to profile)</NavLink>
    </div>
  )
}
