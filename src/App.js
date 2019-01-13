import React, { Component } from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import Home from "./components/Home";
import News from "./components/News";
import Todolist from "./components/Todolist";
import Constrain from "./components/Constrain";
import Footer from "./components/Footer";
import Axios from "./components/Axios";
import FetchJsonp from "./components/FetchJsonp";

import Lifecyle from "./components/Lifecyle"

class App extends Component {
  constructor(props) {
    super(props); //用于父子组建传值
    this.state = {
      parentMsg: "发的生不逢时表示",
      num: 40,
      userinfo: "孙菲菲",
      one: "第一种方式",
      two: "第二种方式",
      three: "第三种方式",
      dataList: [
        { title: "孙菲菲" },
        { title: "孙菲菲" },
        { title: "孙菲菲" },
        { title: "孙菲菲" }
      ]
    };

    this.getMessage = this.getMessage.bind(this);
  }
  //render 模版     jsx语法

  /***
   * 绑定属性
   * style = {{'color':'red'}}// 单花括号 内放一个对象
   */

  /**
   * 引入本地图片二种方式
   *    1、当成模块import方式引入
   *        引入：import logo from "../assets/images/logo.svg";
   *        使用： <img src={logo}/>
   *    2、直接使用
   *        <img src={require('../assets/images/logo.svg')}/>
   * 使用网络图片 (网络图片直接使用地址)
   *    <img src="https://www.baidu.com/img/bd_logo1.png?where=super">
   */

  // this.run.bind(this)
  run() {
    alert(this.state.one);
  }

  // this.getMessage = this.getMessage.bind(this);
  getMessage() {
    alert(this.state.two);
  }

  //箭头函数
  thispoint = () => {
    alert(this.state.three);
  };
  // 获取子组件传递过来的数据
  getchildrenData = param => {
    let msg = param;
    this.setState({
      parentMsg: msg
    });
  };

  deliveryValue = value => {
    this.setState({
      userinfo: value
    });
  };

  parentFunction = () => {
    alert("父组件方法");
  };

  changeData = () => {
    var a = "";
    if (this.state.num % 2 === 0) {
      a = "nihao";
    } else {
      a = this.state.num;
    }
    this.setState({
      userinfo: a
    });
    this.state.num++;
  };
  /**
   * 父组件调用子组件
   * 1、在组件上增加属性 ref=“name”；
   * 2、获取子组件数据 this.refs.name.state.....
   * 3、调用子组件方法 this.refs.name.funName(params);
   *
   *  */

  getChildrenFunAndMessage = () => {
    this.refs.footer.run("fgfg");
    alert(this.refs.footer.state.msg);
  };

  render() {
    let dataMap = this.state.dataList.map((v, i) => {
      return <li key={i}> {v.title} </li>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit dd <code> src / App.js </code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.userinfo}
          </a>
        </header>
        <ul> {dataMap} </ul>
        <button onClick={this.run.bind(this)}> 第一种方式 </button>
        <button onClick={this.getMessage}> 第二种方式 </button>
        <button onClick={this.thispoint}> 第三种方式 </button>
        <button onClick={this.changeData}> 改变数据 </button>
        <button onClick={this.deliveryValue.bind(this, "传值")}>
          传递数据
        </button>
        <Home msg="Home" />
        <News msg="News" />
        <Todolist
          msg="Todolist"
          parentFunction={this.parentFunction}
          app={this}
        />
        <Constrain msg="Constrain" />
        <button onClick={this.getChildrenFunAndMessage}>
          获取子组件数据以及调用子组件方法
        </button>
        <Footer
          num={this.state.num}
          title={this.state.parentMsg}
          ref="footer"
        />
        <Axios />
        <FetchJsonp />
        <Lifecyle/>

        
      </div>
    );
  }
}

export default App;
