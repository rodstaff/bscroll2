import React from 'react'
import Nav from './nav'
import Home from '../components/home'
import Fruits from '../components/fruits'
import Veggies from '../components/veggies'
import Contact from '../components/contact'
import Fruits from '../data/fruits'
import Veggies from '../data/veggies'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
      veggies: this.props.veggies
    };
  }
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
App.defaultProps = {
  fruits: Fruits,
  veggies: Veggies
}