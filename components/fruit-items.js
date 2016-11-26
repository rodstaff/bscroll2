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
    const myStyle = {
      border: "1px double black",
      borderRadius: 15,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2
    };
    return (
      <div class="col-xs-3 text-center" style={myStyle}>
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
        <div class="checkbox">
          <label><input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange.bind(this)}/>Buy</label>
        </div>
        {"picked in order = "} {this.state.isChecked ? newFruitsList.push({cname:cname, price: price}) : testNumber}
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