import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="main-links">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" render={() => <Catalog />} />
      </div>
    </Router>
  );
}

export default App;
