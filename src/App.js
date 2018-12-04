import React, { Component } from "react";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className="App"> */}
        <Switch>
          <Route path="/" component={Login} exact />
          {/* <Route path="registro" component={Registro} /> */}
          <Route path="/home" component={Home} exact />
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
