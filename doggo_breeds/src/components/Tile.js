import React from 'react';

const Tile = ({dogBreed, image}) => {
  return (
    <div className="tile" key={dogBreed}>
      <div className="tile-overlay">
        {dogBreed.toUpperCase()}
      </div>
      <div className="tile-image-wrapper">
        <img className="tile-image" src={image} />
      </div>
    </div>
  );
}

export default Tile;