import React from 'react'

export default class FruitItem extends React.Component { 
  constructor(props) {
  	super(props);
  	this.state ={
  	  isChecked: this.props.isChecked
  	}
  }
  toggleChange() {
  	this.setState({
      isChecked: !this.state.isChecked
  	}, function() { console.log(this.state) }
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
      </div>
    );
  }
}
FruitItem.propTypes = {
  cname: React.PropTypes.string,
  lname: React.PropTypes.string,
  price: React.PropTypes.number,
  isChecked: React.PropTypes.bool
}
FruitItem.defaultProps = {
  cname: '',
  lname: '',
  price: 0,
  isChecked: false
}