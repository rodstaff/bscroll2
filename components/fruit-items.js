import React from 'react'

var newFruitsList = [],
    testNumber = 0;

export default class FruitItems extends React.Component { 
  constructor(props) {
  	super(props);
  	this.state ={
  	  isChecked: this.props.isChecked
  	}
  }
  toggleChange() {
  	this.setState({
      isChecked: !this.state.isChecked
  	}//, function() { console.log(this.state) }
  	);
  }
  render() {
  	const { cname, lname, price, isChecked } = this.props;
    return (
      <div class="col-xs-3 text-center">
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
        <div class="checkbox">
          <label><input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange.bind(this)}/>Buy</label>
        </div>
        {this.state.isChecked ? newFruitsList.push({cname:cname, price: price}) : testNumber=0}
        {this.props.newFruitsList}{console.log(newFruitsList)}
      </div>
    );
  }
}
FruitItems.propTypes = {
  cname: React.PropTypes.string,
  lname: React.PropTypes.string,
  price: React.PropTypes.number,
  isChecked: React.PropTypes.bool
}
FruitItems.defaultProps = {
  cname: '',
  lname: '',
  price: 0,
  isChecked: false
}