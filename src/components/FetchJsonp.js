import React, { Component } from "react";

import fetchJsonp from "fetch-jsonp";

class FetchJsonp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  getData = () => {
    let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
    fetchJsonp(api)
      .then(response => {
        return response.json();
      })
      .then(json => {
        let list = json.result;
        this.setState({
          list: list
        });
      })
      .catch(ex => {
        console.log("parsing failed", ex);
      });
  };
  render() {
    return (
      <div>
        <div>
          <h2> 获取服务器数据 </h2>
          <button onClick={this.getData}> 获取api接口数据jsonp </button>
          <ul>
            {this.state.list.map((v, i) => {
              return <li key={i}>{v.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FetchJsonp;
