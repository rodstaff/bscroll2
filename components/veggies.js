import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "700px",
  	color: "#fff",
  	backgroundColor: "blue"
}

export default class Veggies extends React.Component {

  render() {
  	return (
      <div id="veggies" class="container-fluid" style={myStyle}>
        <h1>Vegetables</h1>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
      </div>
    );
  }
}
