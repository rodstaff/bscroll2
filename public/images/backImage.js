import React from 'react';
import BackgroundImage from 'react-background-image-loader';

  export default () => {
    const localImage = './fruitsVegs.jpeg';
    return(
      <BackgroundImage img={localImage} />
    );
  }