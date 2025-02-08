import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
       
        super();
        this.state={msg:"Hi This is My page, click to get greetings"
            ,flag:true
        }
        
    }
    changeMsg=()=>{
        this.setState({msg:"Welcome to my page",flag:false})
    }
  render() {
    let applyStyle=this.state.flag?'msg1':"msg2";
    return (
      <div>
      <h1 className={applyStyle}>{this.state.msg}</h1>
      <button onClick={this.changeMsg}>Click to get greetings</button></div>
    )
  }
}