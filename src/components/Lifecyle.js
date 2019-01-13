import React, { Component } from "react";

/**
    生命周期
    加载时候触发的函数
        constructor componentWillMount render componentDidMount
    
    组件数据跟新时候触发的生命周期函数
        shouldComponentUpdate、compontWillUpdate、render、componentDidUpdate
    
    父组件里改变props传值时候出发
        componentWillReceiveProps //component will receive props
    
    组件销毁时触发

  
 * */ 


class Lifecyle extends Component {
  constructor(props) {
      console.log("1 构造函数");
    super(props);
    this.state = {
        msg:"nfjvndjf",
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
      console.log('2组件将要挂载');
  }

  
 

  render() {
      console.log("3数据渲染");
    return (
      <div>
        <div></div>
      </div>
    );
  }

  componentDidMount() {
      console.log('4组件挂载完成,请求数据,dom操作开始');
  }

  



}

export default Lifecyle;
