import React, { Component } from "react";

import "../assets/css/Home.css";
// 事件对象   在触发DOM上的某个事件时，会产生一个事件对象event。这个对象中包含着所有与事件有关的信息

class Home extends Component {
  constructor(props) {
    super(props);
    //定义数据
    this.state = {
      msg: "数据信息",
      inputValue: ""
    };
  }

  run = event => {
    event.target.style.background = "red";
    alert(
      event.target.attributes &&
        event.target.attributes["aid"] &&
        event.target.attributes["aid"].value
        ? event.target.attributes["aid"].value
        : ""
    );
  };
  //  获取input内数据
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  getInputDataByClickButton = event => {
    event.currentTarget.innerHTML = this.state.inputValue
      ? this.state.inputValue
      : "获取input的值";
  };

  getInputDataByClickButton2 = event => {
    event.currentTarget.innerHTML = this.refs.userName.value
      ? this.refs.userName.value
      : "获取input的值";
  };

  keyUp = event => {
      if(event.keyCode === 13){
          alert(event.currentTarget.value)
      }
  };
  
  render() {
    return (
      <div>
        <hr />
        <div>Home组建开始</div>
        <br />
        <h4> {this.state.msg} </h4>
        {/* 事件对象 */}
        <button aid="33" onClick={this.run}>
          事件对象
        </button>

        {/* 表单 事件*/}
        <br />
        <div>
          <input onChange={this.inputChange} />
          <button onClick={this.getInputDataByClickButton}>
            获取input的值
          </button>
        </div>
        <div>
          <input ref="userName" placeholder="dds" />
          <button onClick={this.getInputDataByClickButton2}>
            获取input的值
          </button>
        </div>

        <br />
        {/* 键盘事件 */}
        <input type="text" onKeyUp={this.keyUp} />
        <br />
         
       
        <div>Home组建结束</div>
        <hr />
      </div>
    );
  }
}

export default Home;
