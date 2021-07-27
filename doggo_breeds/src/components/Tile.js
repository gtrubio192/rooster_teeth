import React, { setState, useState } from 'react';

const Tile = ({dogBreed, image}) => {
  return (
    <div className="tile">
      <div className="tile-overlay">
        {dogBreed}
      </div>
      <div className="tile-image-wrapper">
        <img className="tile-image" src={image} />
      </div>
      
    </div>
  )
}

export default Tile;