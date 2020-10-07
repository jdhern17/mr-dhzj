import React from "react";

// imports DOM bindings for React Router for route-based code splitting
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import BarBtn from "./components/BarBtn";
import titleArr from "./pages.json"

function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* <div className="App"><Switch></Switch></div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              {titleArr.length
                ? titleArr.map(({ title, linkName }, id) => (
                    <Link class="deco-none" to={`/${linkName}`}>
                      <BarBtn title={title} key={id} />
                    </Link>
                  ))
                : "Welcome"}
            </div>
            <div className="col-8">
              <Route exact path="/" render={() => <h1>Welcome</h1>} />
              <Route path="/:linkId"><MainContent/></Route>
            </div>
            <div className="col-2">{/* additional features */}</div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
