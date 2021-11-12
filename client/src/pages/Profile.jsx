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

     
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="./createSearchJourney">Create a journey</NavLink>
      </div>
    </div>
  )
}
