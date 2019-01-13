import React, { Component } from "react";
import PropTypes from "prop-types";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Footer数据"
    };
  }

  run = param => {
    alert(param);
  };
  render() {
    return (
      <div>
        <div>cdsv</div>
        <div>{this.props.title}</div>
        <div>{this.props.num}</div>
      </div>
    );
  }
}
/**  定义在子组件中
 * 父组件给子组件传值
 * 
 * defaultProps : 如果父组件没有给子组件传递数据 福组件设置默认值 子组件中就可以使用默认值
 *  */

Footer.defaultProps = {
  title: "footer组件",
  num:30
};
Footer.propTypes = {
  title:  PropTypes.string,
  num:PropTypes.number
};

export default Footer;
