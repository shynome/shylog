import React = require('react');
import glamorous from 'glamorous'
const Nav = glamorous.nav({
  '& a':{
    display:'inline-block',
    textTransform:'capitalize',
    background:'red'
  }
})
export const header = <Nav>
  <a href="./articles">articles</a>
  <a href="./timeline">timeline</a>
  <a href="./about">aboutxxxxxxxxx</a>
</Nav>