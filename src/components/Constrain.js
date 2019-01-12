import React, { Component } from "react";
/**
 * 约束性组件 非约束性组件
 * 约束性组件 <input type="text" defaultValue="a"/>defaultValue是原声DOM中的value属性。
 *          这样写出的的组件，其value是用户输入的内容，React完全不管理输入的过程
 *
 * 非约束性组件 <input type="text" value={this.state.username} onChange={this.handUserName}/>
 *          这里value是this.state.username,由this.handUserName管理。
 *          input的value不是用户输入的内容。而是onChange事件触发之后，由于this.setState导致一次重新的渲染。
 * */

class Constrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "efef",
      msg: "react 表单",
      name: "",
      sex: "1",
      city: "",
      citys: ["北京", "上海", "深圳"],
      hobby: [
        { title: "睡觉", checked: true, id: 1 },
        { title: "吃法", checked: false, id: 2 },
        { title: "睡觉", checked: true, id: 3 }
      ],
      info: ""
    };
  }

  render() {
    return (
      <div>
          sfdv
          {this.props.msg}
        <hr />
        <br />
        <div>约束性组件 非约束性组件</div>

        <hr />
        <br />
        <div>react表单</div>
        <div>{this.state.msg}</div>

        <form onSubmit={this.handlSumbit}>
          用户名：
          <input
            type="text"
            value={this.state.name}
            onChange={this.handlName}
          />
          <br />
          性别：
          <input
            type="radio"
            value="1"
            checked={this.state.sex == "1"}
            onChange={this.handlSex}
          />
          男
          <input
            type="radio"
            value="2"
            checked={this.state.sex == "2"}
            onChange={this.handlSex}
          />
          女
          <br />
          居住城市：
          <select value={this.state.city} onChange={this.selectChange}>
            {this.state.citys.map((v, i) => {
              return <option key={i}>{v}</option>;
            })}
          </select>
          <br />
          爱好：
          {this.state.hobby.map((v, i) => {
            return (
              <span key={i}>
                {v.title}
                <input
                  type="checkbox"
                  onChange={this.handlHobby.bind(this, i)}
                  checked={v.checked}
                />
              </span>
            );
          })}
          <br />
          <textarea value={this.state.info} onChange={this.handlInfo} />
          <input type="submit" defaultValue="提交" />
        </form>
      </div>
    );
  }

  handlName = event => {
      debugger;
    this.setState({
      name: event.target.value
    });
  };

  handlSumbit = event => {
    event.preventDefault();
    let ids = [];
    this.state.hobby.forEach((v, i) => {
      if (v.checked) {
        ids.push(v.id);
      }
    });
    console.log(
      this.state.name,
      this.state.sex,
      this.state.city,
      ids.toString(),
      this.state.info
    );
  };

  handlSex = event => {
    this.setState({
      sex: event.target.value
    });
  };

  selectChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  handlHobby = i => {
    var hobby = this.state.hobby;
    hobby[i].checked = !hobby[i].checked;
    this.setState({
      hobby: hobby
    });
  };

  handlInfo = event => {
    this.setState({
      info: event.target.value
    });
  };
}

export default Constrain;
