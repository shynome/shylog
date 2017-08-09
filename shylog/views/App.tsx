import React = require('react')
import { header } from './header';
import { footer } from './footer';
export class App extends React.Component<any,any>{
  render() {
    return (
    <div>
      { header }
      {this.props.children}
      { footer }
    </div>
    )
  }
}