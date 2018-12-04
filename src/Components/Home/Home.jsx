import React, { Component } from "react";
import "./home.css";
import Header from "./Header";
import Movments from './Movments';
import Navbar from "./Navbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Header />
        <Movments />
        <Navbar />
      </div>
    );
  }

}

export default Home;