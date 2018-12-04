import React, { Component } from "react";
import "./home.css";
import Header from "./Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Header />
      </div>
    );
  }
}

export default Home;
