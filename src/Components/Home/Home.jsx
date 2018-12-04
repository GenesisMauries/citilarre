import React, { Component } from "react";
import "./home.css";
import Header from "./Header";
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
        <Navbar />
      </div>
    );
  }
}

export default Home;
