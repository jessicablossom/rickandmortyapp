import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Char from "../../pages/Char"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/char/:id">
            <Char/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
       </Switch>
      </div>
    </Router>
    )
}

export default App;
