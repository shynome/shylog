import React = require('react');
import glamorous from 'glamorous'
const Nav = glamorous.nav({
  '& a':{
    display:'inline-block',
    textTransform:'capitalize',
  }
})
export const header = <nav>
  <a href="./articles">articles</a>
  <a href="./timeline">timeline</a>
  <a href="./about">about</a>
</nav>