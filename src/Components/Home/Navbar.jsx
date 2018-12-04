import React from "react";
import { Link } from 'react-router-dom';
import Home from '../../assets/home.png';
import Alerta from '../../assets/alarma.png';
import Gastos from '../../assets/presupuesto.png';
import Config from '../../assets/configuracion.png';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand fixed-bottom text-center">
        <div className="navbar" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="./home" className="navbar-brand">
                <figure>
                    <img src={Home} className="im"/>
                </figure>Movimientos</Link>
                </li>
                <li className="nav-item">
                <Link to="./registro" className="navbar-brand">
                <figure>
                    <img src={Alerta} className="im"/>
                </figure>Alertas</Link>
                </li>
                <li className="nav-item">
                <Link to="./login" className="navbar-brand">
                <figure>
                    <img src={Gastos} className="im"/>
                </figure>Presupuesto</Link>                
                </li>
                <li className="nav-item">
                <Link to="./login" className="navbar-brand">
                <figure>
                    <img src={Config} className="im"></img>
                </figure>Configuración</Link>                
                </li>
            </ul>
        </div>
    </nav>
    );
};
export default Navbar;