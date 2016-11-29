import React from 'react'
import FruitItems from '../components/fruit-items'
import Checkout from './checkout'

var myStyle = {
	  fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "750px",
  	color: "#000",
  	backgroundColor: "#FFCC00"
}

export default class Fruits extends React.Component {
  render() {
    const showFruits = this.props.fruits.map(fruit => 
      <FruitItems addNew={this.props.addNew} buyFruits={this.props.buyFruits} key={fruit.id} id={fruit.id} cname={fruit.cname} lname={fruit.lname} price={fruit.price} isChecked={fruit.isChecked}/> );
  	return (
      <div id="fruits" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Fruit</h1>
            </div>
          </div>
        </div>
        <div class="row">
          {showFruits}
        </div>
      </div>
    );
  }
}
Fruits.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  buyFruits: React.PropTypes.array,
  addNew: React.PropTypes.func
}
Fruits.defaultProps = {
  fruits: [],
  buyFruits: []
}
