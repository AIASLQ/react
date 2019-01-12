import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:"Footer数据"
        }
    }

    run=(param)=>{
        alert(param);
    }
    render() { 
        return (
            <div>
                <div></div>
            </div>
        );
    }
}
 
export default Footer;