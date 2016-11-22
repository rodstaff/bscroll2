import React from 'react'

export default class FruitItem extends React.Component { 
  render() {
  	const { cname, lname } = this.props;
    return (
      <div class="col-sm-3 text-center">
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
      </div>
    );
  }
}