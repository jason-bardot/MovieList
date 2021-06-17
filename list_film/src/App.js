import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Movie from "./Movie.js"
import Actor from "./Actor.js"

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/movie">
                  <Nav.Link>Movie</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/actor">
                  <Nav.Link>Actor</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr />
          <Switch>
            <Route exact path="/">
              <div className="Front-page">Welcome</div>
            </Route>
            <Route path="/Movie">
              <Movie />
            </Route>
            <Route path="/Actor">
              <Actor />
            </Route>
          </Switch>
        </Router>
      </div>

    );
  }


}

export default App;
