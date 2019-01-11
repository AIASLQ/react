import React, { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Todolist组件</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={this.inputChange}
        />
        <button onClick={this.changeData}>改变数据</button>
        <div>{this.state.username}</div>
      </div>
    );
  }

  inputChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  changeData = () => {
    let data = "改变";
    if (this.state.username) {
      data = this.state.username;
    }
    this.setState({
      username: data
    });
  };
}

export default Todolist;
