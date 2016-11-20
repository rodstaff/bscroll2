import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "500px",
  	color: "#000",
  	backgroundColor: "#FFCC00"
}

export default class Fruits extends React.Component {
  
  render() {
  	return (
      <div id="fruits" class="container-fluid" style={myStyle}>
        <h1>Fruits</h1>
        <p>The quick brown fox jumps over the lazy dog. God yzal eht revo spmuj xof nworb kciuq eht.</p>
      </div>
    );
  }
}
