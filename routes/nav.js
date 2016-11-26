import React from 'react'

var myStyle = {
    color:  "#fff",
}
export default class Nav extends React.Component {
  render() {
    return (

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="" style={myStyle}>MENU</span>
        </button>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#fruits">Fruits</a></li>
        <li><a href="#checkout">Checkout</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

);}}
