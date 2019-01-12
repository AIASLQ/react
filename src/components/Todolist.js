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
        <div> {this.props.msg} </div>
        <h1 style={{ color: "red" }} onClick={this.props.app.parentFunction}> Todolist组件 </h1> 
        <h1 style={{ color: "red" }} onClick={this.props.app.thispoint}> {this.props.msg} </h1> 
        <h1 style={{ color: "yellow" }}  onClick={this.props.app.getchildrenData.bind(this,'我是子组件传递过来的数据')}> {this.props.app.state.parentMsg} </h1> 

{/* 

父组件 传递数据 以及方法
<Todolist msg="Todolist"  parentFunction={this.parentFunction} app={this}/>

parentFunction={this.parentFunction} 将父组件中方法传递给子组件

app={this} 将父组件中全部传递给子组件

子组件
  <div> {this.props.msg} </div>
  接收父组件中传递给子组件的数据
 <h1 style={{ color: "red" }} onClick={this.props.app.parentFunction}> Todolist组件 </h1> 
  接收父组件传递给子组件的单个方法

 <h1 style={{ color: "red" }} onClick={this.props.app.thispoint}> {this.props.msg} </h1>
 接收父组件传递给子组件的全部 包括 父组件中的方法以及state中的全部数据


 <h1 style={{ color: "yellow" }}  onClick={this.props.app.getchildrenData.bind(this,'vdvddv')}> {this.props.app.state.parentMsg} </h1> 
接收父组件传递给子组件的全部 包括 父组件中的方法以及state中的全部数据 调用父组件中的方法并且传入参数

*/}
        <h1 style={{ color: "red" }} onClick={this.props.app.thispoint}> {this.props.msg} </h1> 
        <input
          type="text"
          value={this.state.username}
          onChange={this.inputChange}
        /> 
        <button onClick={this.changeData}> 改变数据 </button> 
        <div> {this.state.username} </div> 
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
