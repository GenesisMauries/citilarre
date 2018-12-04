import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Registro from './Components/Registro/Registro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/registro" component={Registro} exact />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
