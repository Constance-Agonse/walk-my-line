import React from 'react';
import { NavLink } from "react-router-dom";
import MyLikedJournies from './MyLikedJournies';
import MyOwnJournies from './MyOwnJournies';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <div>infos du profile</div>

      <MyLikedJournies />  OR
      <MyOwnJournies />

      On va mapper sur tout l'array de journey qu'on aura
      <Link to="./journey"> A journey (for now) </Link>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="./createSearchJourney">Create a journey</NavLink>
      </div>
    </div>
  )
}
