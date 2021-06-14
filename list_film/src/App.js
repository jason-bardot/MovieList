import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movie from "./Movie.js"
import Actor from "./Actor.js"

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/movie">Movie</Link>
              </li>
              <li>
                <Link to="/actor">Actor</Link>
              </li>

            </ul>
            <hr />
            <Switch>
              <Route path="/Movie">
                <Movie />
              </Route>
              <Route path="/Actor">
                <Actor />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }


}

export default App;
