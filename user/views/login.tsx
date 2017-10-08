//用于注册和登录
import *as React from 'react';
import { Tab, Button, Input, Form } from 'semantic-ui-react';
const { Pane } = Tab
const { Field } = Form
const enum ActionType { login, sign }
export default class extends React.Component {
  login = (e)=>{
    debugger
  }
  sign = ()=>{

  }
  render(){
    return <div style={{ maxWidth:400, margin:'40px auto' }}>
      <Tab panes={[
        { menuItem:'login in', render:()=>(<Pane>
          <Form method="post" action="./login" onSubmit={this.login}>
            <Field><Input iconPosition="left" icon="user" placeholder="username" name="username"></Input></Field>
            <Field><Input iconPosition="left" icon="lock" placeholder="password" type="password" name="password"></Input></Field>
            <Button type="submit">login in</Button>
          </Form>
        </Pane>)},
        { menuItem: 'sign up', render:()=>(<Pane>
          <Form method="post" action="./sign" onSubmit={this.sign}>
            <Field><Input iconPosition="left" icon="user" placeholder="username" name="username"></Input></Field>
            <Field><Input iconPosition="left" icon="lock" placeholder="password" type="password" name="password"></Input></Field>
            <Field><Input iconPosition="left" icon="lock" placeholder="password confirm" type="password" name="password_confirm"></Input></Field>
            <Button type="submit">sign up</Button>
          </Form>
        </Pane>)}
      ]}></Tab>
    </div>
  }
}