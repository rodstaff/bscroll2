import React from 'react'
import Nav from './nav'
import Home from '../components/home'
import Fruits from '../components/fruits'
import Veggies from '../components/veggies'
import Contact from '../components/contact'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Fruits />
        <Veggies />
        <Contact />
      </div>
    );
  }
}