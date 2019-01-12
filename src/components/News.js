import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props); //用于父子组建传值
    this.state = {
      userinfo: "ffddd"
    };
  }

  componentWillMount() {
    this.setState({
      select: { selectId: "selectId" }
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div> {this.props.msg} </div>{" "}
        <ul>
          <li> {this.state.userinfo} </li> <li> 这是一个列表 </li>{" "}
          <li> 这是一个列表 </li> <li> 这是一个列表 </li>{" "}
          <li> 这是一个列表 </li> <li> 这是一个列表 </li>{" "}
        </ul>{" "}
      </div>
    );
  }
}

export default News;
