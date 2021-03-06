import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import GlobalNav from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Router>
      <div className="app">
        <GlobalNav />
        <div>
        <Route exact path="/" component={Home} />
        </div>
        <GlobalFooter />
        </div>
      </Router>
      </div>
      </div>
    );
  }
}

export default App;
