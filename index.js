import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import SignInComponent from './src/components/User/SignInComponent'
import NewsDetailComponent from './src/components/News/NewsDetailComponent'
import CustomNewsComponent from './src/components/News/CustomNewsComponent'

import App from './src/App'

const routing = (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Top Headlines</Link>
          </li>
          <li>
            <Link to="/customnews">Your Favorite News</Link>
          </li>
          <li>
            <Link to="/signin">Profile</Link>
          </li>
        </ul>
      
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/customnews" component={CustomNewsComponent} />
          <Route path="/signin" component={SignInComponent} />
          <Route path="/detail/:id" component={NewsDetailComponent} />
      </Switch>
      </div>
    </Router>
)




ReactDOM.render(routing, document.getElementById("root"))