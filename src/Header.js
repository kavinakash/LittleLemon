import React from 'react';
import Nav from './Nav.js';

function Header() {
  return (
    <header>
      <head>
          <meta name="description" content='Little lemon restaurant - food'/>
          <meta name="og:title" content="Little Lemon "/>
          <meta name="og:description" content="Little lemon located in chicago"/>
          <meta name="og:image" content="little_lemon\public\images\logo.png"/>
      </head>
          <img src='little_lemon\public\images\logo.png' alt="logo"/>
          <Nav />
    </header>
  )
}

export default Header
