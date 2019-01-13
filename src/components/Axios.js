import React, { Component } from "react";

import axios from "axios";

class Axios extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      list:[]
    };
  }
  getData = () => {
    let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
    axios
      .get(api)
      .then(response => {
      let list = response.data.result; 
        this.setState({
          list:list
        }) 
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }
  
  render() {
    return (
      <div>
        <div>
          <h2> axios获取服务器数据 </h2> 
          <button onClick={this.getData}> 获取api接口数据 </button>
          <ul>
            {
              this.state.list.map((v,i) =>{
               return <li key={i}>{v.title}</li>
              })
            } 
          </ul>
        </div> 
      </div>
    );
  }
}

export default Axios;
