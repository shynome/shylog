import React = require('react');
import glamorous from 'glamorous'
const Styled = glamorous.div({
  position:'absolute', textAlign:'center',
  top:0, left: 0, width:'100%', height:'100%',
  '& .table':{
    display:'table', height:'100%', width:'100%',
    '& .middle':{
      display:'table-cell', verticalAlign:'middle',
      fontSize:'96px',  /* textTransform:'uppercase',  */
    }
  },
  '& span':{
    transition:'all 1s',
  }
})
import { App } from './App'
export const getRandomColorNumber = ()=>Math.floor(Math.random()*256)
export const getRandomColor = ()=>Array.from(' '.repeat(3)).map(getRandomColorNumber)
export default class Index extends React.Component<void,any>{
  words = 'shynome'
  state = { next:0 }
  render(){
    setTimeout(()=>this.setState((state)=>({
      ...state,
      next:state.next+1,
    })),1000)
    return (
    <Styled>
      <div className="table">
        <div className="middle">
          {
          Array.from(this.words).map((word,index)=>(
          <span key={index} style={{ color:`rgb(${getRandomColor().join(',')})` }}>{word}</span>
          ))
          }
        </div>
      </div>
    </Styled>
    )
  }
}