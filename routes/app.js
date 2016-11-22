import React from 'react'
import Nav from './nav'
import Home from '../components/home'
import Fruits from '../components/fruits'
import Veggies from '../components/veggies'
import Contact from '../components/contact'
import FruitsData from '../data/fruits'
import VeggiesData from '../data/veggies'

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
  fruits: FruitsData,
  veggies: VeggiesData
}