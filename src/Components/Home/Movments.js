import React, { Component } from 'react';
import CardStatus from '../data/data';
import './Movments.css';

class Movments extends Component {
  render() {
    return (
      <div className="panel-movments">
        <h6 class="title-movments">Movimientos</h6>
        <table class="table">
          <tbody>
            <tr>
              <td className="movments">Nómina Septiembre 1</td>
              <td className="amount text-right add-money">$20,000.ºº</td>
            </tr>
            <div className="date-panel">
              <tr className="date-movments">01-12-2018</tr>
            </div>
          </tbody>
          {CardStatus.map(
            ({ merchantName, transactionDate, transactionAmount, type }, i) => (
              <tbody>
                <tr>
                  <td className="movments">{merchantName}</td>
                  <td className="amount text-right">${transactionAmount}</td>
                </tr>
                <div className="date-panel">
                  <tr className="date-movments">{transactionDate}</tr>
                </div>
              </tbody>
            )
          )}
          <tbody>
            <tr>
              <td className="movments">Depósito en Ventanilla</td>
              <td className="amount text-right add-money">$5,000.ºº</td>
            </tr>
            <div className="date-panel">
              <tr className="date-movments">06-12-2018</tr>
            </div>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movments;

// {SocialData.map(
//       ({ title, content, link, content2, content3 }, i) => (
//         <Fragment>
//           <h2
//             className="box-social shadow"
//             onClick={() =>
//               this.setState({ open: open === i ? false : i })
//             }
//           >
//             {open === i ? ' ☞   ' : ' ⇣   '}
//             {title}
//           </h2>
