import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "300px",
  	color: "#fff",
  	backgroundColor: "#505050"
}

export default class Contact extends React.Component {

  render() {
  	return (
      <div id="contact" class="container-fluid" style={myStyle}>
        <h1>Contact</h1>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
      </div>
    );
  }
}