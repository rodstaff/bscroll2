import React from 'react'
import BuyFruits from '../components/buy-fruits'

var myStyle = {
  fontFamily: "Dosis",
    paddingTop: "50px",
    height: "500px",
    color: "#000",
    backgroundColor: "#79d279"
}

export default class Checkout extends React.Component {
  render() {
    const fruits = this.props.buyFruits;
    {console.log(fruits)}
    const listFruits = fruits.map(fruit => <BuyFruits key={fruit.id} id={fruit.id} cname={fruit.cname} price={fruit.price}/> );
    {console.log(listFruits)}
    return (
      <div id="checkout" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Checkout</h1>
            </div>
          </div>
        </div>
        <div class="row">
          {listFruits}
        </div>
      </div>
    );
  }
}
Checkout.propTypes = {
  fruits: React.PropTypes.array,
  buyFruits: React.PropTypes.array
}
Checkout.defaultProps = {
  fruits: [],
  buyFruits: []
}