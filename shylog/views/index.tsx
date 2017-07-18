import React = require('react');
import { Header, } from 'semantic-ui-react'
import glamorous from 'glamorous'
const Styled = glamorous.div({
  '& h1':{
    'color':'red',
    '&:hover':{
      'color':'yellow',
    },
    '@media screen and (min-width:1200px)':{
      '&':{
        'color':'blue'
      }
    }
  }
})
export default ()=>
<Styled>
  <h1>welcome to shylog , it's building</h1>
</Styled>