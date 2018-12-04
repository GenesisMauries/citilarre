import React from 'react';
import './Login.css';

const Login = () => {
  const userName = 'Sakura';

  let tries = 0;

  const auth = () => {
    const password = document.getElementById('password');

    console.log(tries);
    if (tries === 3) {
      alert('has rebasado el número de intentos permitidos');
    } else {
      if (password.value === '12345') {
        alert('Login exitoso');
      } else {
        alert('Password incorrecto');
        tries++;
        console.log(tries);
      }
    }
  };

  return (
    <div className="login-panel">
      <h1>Welcome {userName}</h1>
      <input id="password" placeholder="Contraseña" />
      <button onClick={auth} className="btn-active">
        Log In
      </button>
    </div>
  );
};

export default Login;
