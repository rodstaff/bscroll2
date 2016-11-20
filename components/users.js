import React from 'react'

var myStyle = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
  	height: "500px",
  	color: "#fff",
  	backgroundColor: "#79d2a6"
}

export default class Users extends React.Component {
  
  render() {
  	return (
      <div id="users" class="container-fluid" style={myStyle}>
        <h1>Users</h1>
        <p>The quick brown fox jumps over the lazy dog. God yzal eht revo spmuj xof nworb kciuq eht.</p>
      </div>
    );
  }
}
