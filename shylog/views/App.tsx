import React = require('react')
import { header } from './header';
import { footer } from './footer';
import glamorous from 'glamorous';
const AppStyle = glamorous.div({
  maxWidth: 600,
  width: '96%',
  
})
export class App extends React.Component<any,any>{
  render() {
    return (
    <div>
      { header }
      { this.props.children }
      { footer }
    </div>
    )
  }
}