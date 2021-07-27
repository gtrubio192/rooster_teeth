import React, { setState, useState } from 'react';

const Tile = ({dogBreed, image}) => {
  return (
    <div className="tile">
      {dogBreed}
    </div>
  )
}

export default Tile;