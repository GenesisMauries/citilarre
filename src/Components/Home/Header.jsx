import React from "react";

const Header = () => {
  return (
    <div className="container-header">
      <div className="user-hello display-flex">
        <h3>¡Hola usuario!</h3>
      </div>
      <div className="month display-flex">
        <p> a </p> <p>SEPTIEMBRE</p> <p>a</p>
      </div>
      <div className="ingresos display-flex">
        <p>INGRESOS</p>
        <p>2000</p>
      </div>
      <div className="gastos display-flex">
        <p>Gastos</p>
        <p>12400</p>
      </div>
      <div className="saldo display-flex">
        <h1>SALDO DISPONIBLE</h1>
        <p>9000</p>
      </div>
    </div>
  );
};
export default Header;
