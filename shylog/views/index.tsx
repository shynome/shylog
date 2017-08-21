import React = require('react');
import { App } from './App'
export default class Index extends React.Component<void,any>{
  words = 'shynome'
  state = { next:0 }
  next = ()=>this.setState((state)=>({
    ...state,
    next:state.next+1,
  }))
  render(){
    this.state.next ? setTimeout(this.next,3000) : this.next()
    return (
    <div>
      shynome
    </div>
    )
  }
}