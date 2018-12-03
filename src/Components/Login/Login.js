import React, { Component } from 'react';
import './Login.css';

let password = 'Sakurita';
const user = this.state.userName;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      userName: 'Nayely Bravo',
      password: ''
    };
  }

  auth = e => {
    const passwordInput = this.setState({ password: event.target.value });
    console.log(passwordInput);
    const passwordUser = 'sakurita';

    if (passwordInput == passwordUser) {
      this.setState({
        login: true
      });
      console.log('login succes!');
    }
  };

  render() {
    return (
      <div className="login-panel">
        <h1>Welcome {user}</h1>
        <input
          placeholder="Contraseña"
          value={password}
          onChange={this.auth.bind(this)}
        />
      </div>
    );
  }
}
export default Login;
