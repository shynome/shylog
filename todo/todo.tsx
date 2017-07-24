import React = require('react');
import glamorous,{ ThemeProvider } from 'glamorous'
enum TaskState {
  finish = 'finish',
  todo = 'todo',
}
class Task {
  state:TaskState = TaskState.todo
  name:string = ''
}
import { theme } from './theme';
export class View extends React.Component<any,void>{
  static Form = glamorous.form({})
  Input = ()=>
  <View.Form action="get">
    <input type="search" placeholder="search word"/>
    <input type="submit"/>
  </View.Form>
  static List = glamorous.ul({})
  List = ()=>
  <View.List>
    <li>list</li>
    <li>list</li>
  </View.List>
  static Main = glamorous.div({
    body:{
      background:theme.main.bg,
      color:theme.main.color,
    },
    '&':{
      maxWidth:800,
      margin:'0 auto',
      background:theme.darker.bg,
    }
  })
  render(){
    const { Input,List } = this
    return(
    <View.Main>
      <Input></Input>
      <List></List>
    </View.Main>
    )
  }
}