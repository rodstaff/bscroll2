import React from 'react'

export default class FruitItem extends React.Component { 
  render() {
  	const { cname, lname, price } = this.props;
    return (
    // 'xs' has no width breakpoints so it is always 12/3=4 columns
      <div class="col-xs-3 text-center">
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
        <div class="checkbox">
          <label><input type="checkbox" value=""/>Buy</label>
         </div>
      </div>
    );
  }
}