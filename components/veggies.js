import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "700px",
  	color: "#fff",
  	backgroundColor: "#505050"
}

export default class Veggies extends React.Component {

  render() {
  	return (
      <div id="veggies" class="container-fluid" style={myStyle}>
        <h1>Vegetables</h1>
        <p>The quick brown fox jumps over the lazy dog. God yzal eht revo spmuj xof nworb kciuq eht.</p>
      </div>
    );
  }
}