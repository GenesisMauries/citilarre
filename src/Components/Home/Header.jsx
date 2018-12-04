import React from "react";
import arrow from "../../assets/Arrow.svg";
import arrow2 from "../../assets/Arrow2.svg";
import "./home.css";

const Header = () => {
  return (
    <div className="container-header">
      <div className="user-hello display-flex">
        <h3>¡Hola usuario!</h3>
      </div>
      <div className="month display-flex div-h">
        <img className="arrow" src={arrow} /> <h4>SEPTIEMBRE</h4>
        <img className="arrow2" src={arrow2} />
      </div>
      <div className="container-ing">
        <div className="ingresos display-flex div-h">
          <h5>INGRESOS</h5>
          <p>$2,000</p>
        </div>
        <div className="gastos display-flex div-h">
          <h5>GASTOS</h5>
          <p>$12,400</p>
          <div className="barra" />
        </div>
        <div className="saldo display-flex div-h">
          <h1>SALDO DISPONIBLE</h1>
          <p>$9,000</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
