import React from 'react'
import bkimage from '../public/images/fruitsVegs.jpeg'

export default class Image extends React.Component {  
  render() {
    let { mode, src, height, width, style, ...props } = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let important = {
      backgroundImage: url(bkimage),
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

    return <div {...props} style={{...style, ...important}} />
  }
}