//用于注册和登录
import *as React from 'react';
import { Tab, Button, Input, Form } from 'semantic-ui-react';
const { Pane } = Tab
const { Field } = Form
export default class extends React.Component {
  login = ()=>(<Pane>
    <Form method="POST" action="./login">
      <Field><Input iconPosition="left" icon="user" placeholder="username"></Input></Field>
      <Field><Input iconPosition="left" icon="lock" placeholder="password"></Input></Field>
      <Button type="submit">login in</Button>
    </Form>
  </Pane>)
  sign = ()=>(<Pane>
    <Form>
      <Field><Input iconPosition="left" icon="user" placeholder="username"></Input></Field>
      <Field><Input iconPosition="left" icon="lock" placeholder="password"></Input></Field>
      <Field><Input iconPosition="left" icon="lock" placeholder="password confirm"></Input></Field>
      <Button type="submit">sign up</Button>
    </Form>
  </Pane>)
  panes = [
    { menuItem:'login in', render:this.login },
    { menuItem:'sign up', render:this.sign }
  ]
  render(){
    return <div style={{ maxWidth:400, margin:'40px auto' }}>
      <Tab panes={this.panes}></Tab>
    </div>
  }
}