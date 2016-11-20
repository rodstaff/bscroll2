import React from 'react'
import Nav from './nav'
import Sections from './sections'
import Home from '../components/home'
import Users from '../components/users'
import Turtles from '../components/turtles'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Users />
        <Turtles />
      </div>
    );
  }
}