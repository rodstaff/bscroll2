import React from 'react'
import Pic from '../public/images/fruitsVegs.jpeg'
//import Pic from '../public/images/backImage'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "1000px",
  	color:  "#000",
  	backgroundColor: "blue",
//    backgroundImage: url('') 
}

export default class Home extends React.Component {
  render() {
  	return (

      <div id="home" class="container-fluid" style={myStyle}>
        <h1>Home</h1>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
        <img src={Pic} width="478px"/>
      </div>
    );
  }
}

