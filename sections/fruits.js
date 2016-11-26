import React from 'react'
import FruitItems from '../components/fruit-items'
import Checkout from './checkout'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "500px",
  	color: "#000",
  	backgroundColor: "#FFCC00"
}

export default class Fruits extends React.Component {
  render() {
    const showFruits = this.props.fruits.map(fruit => 
      <FruitItems key={fruit.id} cname={fruit.cname} lname={fruit.lname} price={fruit.price} isChecked={fruit.isChecked}/> );
  	return (
      <div>
      <div id="fruits" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Fruits</h1>
            </div>
          </div>
        </div>
        <div class="row">
          {showFruits}
        </div>
      </div>
        <Checkout fruits={this.props.newFruitsList} />
        {console.log(this.props.newFruitsList)}
      </div>
    );
  }
}
Fruits.propTypes = {
  fruits: React.PropTypes.array.isRequired
}
Fruits.defaultProps = {
  fruits: []
}
