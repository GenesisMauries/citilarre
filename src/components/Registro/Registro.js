import React, { Component } from 'react';
import './Registro.css';
import Citi from "../../assets/Image 3.png"

class Registro extends Component {
    render() {
      return (
       
        <div className= "container-registro">
        <figure>
          <img src={Citi}></img>
        </figure>
        <div className="registro">
        <span>NÚMERO DE CUENTA</span>
        <input type="text" ></input>
        <span>CELULAR</span>
        <input type="text" ></input>

        <button className="btn-secondary">CONTINUAR</button>
        <a className="link">Términos y condiciones</a>
        </div>
        </div>
      );
    }
}
  
export default Registro;