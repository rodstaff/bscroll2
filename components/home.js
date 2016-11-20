import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "1000px",
  	color:  "#000",
  	backgroundColor: "#66b3ff"
}

export default class Turtles extends React.Component {

  render() {
  	return (

      <div id="home" class="container-fluid" style={myStyle}>
        <h1>Home</h1>
        <p>The quick brown fox jumps over the lazy dog. God yzal eht revo spmuj xof nworb kciuq eht.</p>
        <p>The quick brown fox jumps over the lazy dog. God yzal eht revo spmuj xof nworb kciuq eht.</p>
      </div>
    );
  }
}

