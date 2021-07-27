import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './components/Tile';
import './App.css';

const App = () => {
  let [allDoggos, setAllDoggos] = useState([]);
  let [allDoggoPics, setAllDoggoPics] = useState([]);
  let [dogTiles, setDogTiles] = useState([]);

  useEffect(() => {
    handlePageLoad();
  }, []);

  useEffect(() => {
    if(allDoggos.length > 0) {
      handleDogImages();
    }
  }, [allDoggos]);

  const handlePageLoad = async () => {
    try {
      let doggos = await axios.get('https://dog.ceo/api/breeds/list/all');
      doggos = Object.keys(doggos.data.message);
      setAllDoggos(doggos);
    } catch (err) {
      alert('we got a doggo error ', err);
    }
  }

  const getPic = async (dogName) => {
    // individual dog pic
    let url = `https://dog.ceo/api/breed/${dogName}/images/random`
    const { data } = await axios.get(url);
    // setAllDoggoPics(dogPics => [...dogPics, data.message]);
    setDogTiles(dogs => [...dogs, {name: dogName, image: data.message}]);
  }

  const handleDogImages = async () => {
    const dogPics = allDoggos.map(getPic);
    await Promise.all(dogPics);
  }

  return (
    <div className="App">
      {
        dogTiles.map(({name, image}) => <Tile dogBreed={name} image={image}/>)
      }
      
    </div>
  );
}

export default App;
