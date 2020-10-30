import React from "react";

// imports DOM bindings for React Router for route-based code splitting
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
// import BarBtn from "./components/BarBtn";
// import titleArr from "./pages.json"
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container-fluid">
{/* <div className="row">
<div className="col-sm-2 col-md-4"> */}
        <Sidebar/>
{/* </div>
<div className="col-sm-10 col-md-8"> */}
        <Switch>          
          <Route exact path="/" render={() => <Redirect to="/welcome"/>} />
          <Route path="/:linkId"><MainContent/></Route>
        </Switch>
{/* </div>
</div> */}
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
