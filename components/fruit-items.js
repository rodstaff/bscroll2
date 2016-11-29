import React from 'react'

var newFruitsList = [],
    testNumber = 0;
const myStyle = {
      border: "1px double black",
      borderRadius: 15,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2
};

export default class FruitItems extends React.Component { 
  render() {
    const { id, cname, lname, price, isChecked, buyFruits } = this.props;
    return (
      <div class="col-xs-3 text-center" style={myStyle}>
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
      </div>
    );
  }
}
FruitItems.propTypes = {
  id: React.PropTypes.number,
  cname: React.PropTypes.string,
  lname: React.PropTypes.string,
  price: React.PropTypes.number,
  addNew: React.PropTypes.func,
  buyFruits: React.PropTypes.array
}
FruitItems.defaultProps = {
  id: 0,
  cname: '',
  lname: '',
  price: 0,
  buyFruits: []
}