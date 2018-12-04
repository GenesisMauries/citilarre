import React, { Component } from 'react';
// import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>prueba</p>
        <Login />
      </div>
      // <BrowserRouter>
      //   <div className="App">
      //     <Switch>
      //       <p>prueba</p>
      //       <Route path="/" component={Login} exact />
      //       <Route path="registro" component={Registro} />
      //       <Route path="home" component={Home} />
      //     </Switch>
      //   </div>
      // </BrowserRouter>
    );
  }
}

export default App;
