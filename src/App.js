// Packages
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Home from './pages/Home.js'
import Map from './pages/Map.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={Map} />
      </Switch>
    </Router>
  );
}

export default App;