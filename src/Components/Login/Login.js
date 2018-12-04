import React from 'react';
import { Link } from 'react-router-dom'
import Citi from "../../assets/Image 3.png"
import './Login.css';


const Login = () => {
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
      <figure>
        <img src={Citi}></img>
      </figure>
      {/* <input id="password" placeholder="Contraseña" /> */}
      <p>Tu salud financiera a un solo click</p>
      <div className="button">
      <Link to="/registro" className="btn-active">REGISTRATE</Link>
        {/* <button onClick={redirect} className="btn-active">
          REGISTRATE
      </button> */}
      </div>
      <div className="button">
        <button onClick={auth} className="btn-secondary">
          INICIAR SESIÓN
      </button>
      </div>
    </div>
  )
};

export default Login;
