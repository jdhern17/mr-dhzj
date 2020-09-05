import React from "react";

// imports DOM bindings for React Router for route-based code splitting
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>{/* exact disables partial matching for a route*/}</Switch>
      </div>
    </Router>
  );
}

export default App;
