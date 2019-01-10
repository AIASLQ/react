import React, { Component } from "react";

import "../assets/css/Home.css";

class Home extends Component {
  constructor() {
    super();
    //定义数据
    this.state = {
      name: "章三",
      age: "34"
    };
  }
  render() {
    return (
      <div>
        <h2 className="colorRed"> dfvdfb </h2> <h4> {this.state.name} </h4>
        <h4> {this.state.age} </h4>
      </div>
    );
  }
}

export default Home;
