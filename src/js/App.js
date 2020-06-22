import React from "react";
import Home from "../../pages/Home";
import Personajes from "../../pages/Personajes";
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
      <div className="background">
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/personajes">Personajes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/personajes">
            <Personajes />
          </Route>
          <Route path="/char/:id">
            <Char/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
       </Switch>
      </div>
      <footer className="align-center">This is footer 🖤 </footer>
    </Router>  
    )
}

export default App;
