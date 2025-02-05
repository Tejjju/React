import React, {Component} from 'react'
import CBCPropEx from './propsex/CBCPropEx'

export default class App extends Component{
  render(){
    return(
    <div>
      <CBCPropEx
      username="ramya"
      age={20}
      hobbies={["playing","dancing"]}
      address={{city:"jangaon",area:"Rameshwaram"}}
      sendFun={function(){alert("hi i am ramya")}}
      />
    </div>
    )
  }
}