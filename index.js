import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import CustomNewsComponent from './src/components/News/CustomNewsComponent'

import SignInComponent from './src/components/User/SignInComponent'
import SignUpComponent from './src/components/User/SignUpComponent'
import ProfileComponent from './src/components/User/ProfileComponent'

import App from './src/App'

const routing = (

    <Router>
      <Switch>
          <Route exact path="/" component={SignUpComponent} />
          <Route path="/signin" component={SignInComponent} />
          <Route path="/home" component={App} />
          <Route path="/customnews" component={CustomNewsComponent} />
          <Route path="/profile" component={ProfileComponent} />
      </Switch>
    </Router>
)




ReactDOM.render(routing, document.getElementById("root"))