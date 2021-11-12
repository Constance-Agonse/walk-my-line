import './App.css';
import React from 'react';
import {  Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateSearchJourney from "./pages/CreateSearchJourney";
import CreatePinJourney from "./pages/CreatePinJourney";
import MyOwnJournies from "./pages/MyOwnJournies";
import MyLikedJournies from "./pages/MyLikedJournies";
import Journey from "./pages/Journey"
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/profile" component = {Profile} />
        <Route exact path="/createSearchJourney" component = {CreateSearchJourney} />
        <Route exact path="/createSearchJourney/Pin" component = {CreatePinJourney} />
        <Route exact path="/myOwnJournies" component = {MyOwnJournies} />
        <Route exact path="/myLikedJournies" component = {MyLikedJournies} />  
        <Route exact path="/journey" component = {Journey} />  
        <Route exact path="/signup" component= {Signup} />
        <Route exact path="/signin" component= {Sigin} />
        

        <Route path="*" component= {ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
