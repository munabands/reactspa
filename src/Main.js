import React, { Component } from "react";
import { Route, NavLink, Router, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import News from "./News";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Joel Umunna Junior Developer</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
