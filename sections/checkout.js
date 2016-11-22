import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "300px",
  	color: "#000",
  	backgroundColor: "#79d2a6"
}

export default class Checkout extends React.Component {

  render() {
  	return (
      <div id="checkout" class="container-fluid" style={myStyle}>
        <h1>Checkout</h1>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
      </div>
    );
  }
}
Checkout.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  veggies: React.PropTypes.array.isRequired
}
Checkout.defaultProps = {
  fruits: [],
  veggies: []
}