import React = require('react');
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
const tabs = {
  '/articles':{
    name:'随笔', component:()=><div>随笔</div>,
  },
  '/demo':{
    name:'小项目', component:()=><div>项目列表</div>
  },
  '/about':{
    name:'关于我', component:()=><div>自我介绍</div>
  }
}
export class View extends React.Component<any,void>{
  route = (props:RouteComponentProps<any>)=>{
    let url = props.match.url.replace(/\/$/,'')
    let component = tabs[url].component
    return React.createElement(component,props)
  }
  render(){
    return (
    <Router><div>
      <nav>
        { Object.keys(tabs).map((path)=><Link to={path} key={path} >{tabs[path].name}</Link>) }
      </nav>
      <Route path="/:path" component={this.route}></Route>
    </div></Router>
    )
  }
}