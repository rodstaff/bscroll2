import React from 'react'
import Pic from '../public/images/fruitsVegs.jpeg'

let myStyle = {
	  fontFamily: "Dosis",
  	paddingTop: "300px",
  	height: "700px",
  	color:  "#fff",
    backgroundImage: `url(${Pic})`,
    backgroundSize: 'cover'
}

export default class Home extends React.Component {
  render() {
  	return (

      <div id="home" class="container-fluid" style={myStyle}>
        <div class="text-center home">

          <h1>A convenient place to buy your seeds online!</h1>
          <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>

        </div>
      </div>
    );
  }
}

