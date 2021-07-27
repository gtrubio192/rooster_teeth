import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './components/Tile';
import './App.css';

const App = () => {
  let [allDoggos, setAllDoggos] = useState([]);
  let [dogTiles, setDogTiles] = useState([]);
  let [filteredDoggos, setDoggoFilter] = useState([]);
  let [isFiltered, setFilteredResults] = useState(false);

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
    let url = `https://dog.ceo/api/breed/${dogName}/images/random`;
    const { data } = await axios.get(url);
    setDogTiles(dogs => [...dogs, {name: dogName, image: data.message}]);
  }

  const handleDogImages = async () => {
    const dogPics = allDoggos.map(getPic);
    await Promise.all(dogPics);
  }

  const handleInput = (e) => {
    let searchFilter = e.target.value;
    if(searchFilter.trim().length > 0) {
      let results = dogTiles.filter(dog => dog.name.includes(searchFilter));
      setDoggoFilter(results);
      setFilteredResults(true);
    }
    else {
      setFilteredResults(false);
    }
  }

  return (
    <div className="App">
      <header className="input-wrapper">
        <input
          placeholder="Search by dog breed"
          className="breed-input" type="text"
          onChange={handleInput}
        />
      </header>
      <div className="tiles-wrapper">
        {
          isFiltered
          ? filteredDoggos.map(({name, image}) => <Tile dogBreed={name} image={image}/>)
          : dogTiles.map(({name, image}) => <Tile dogBreed={name} image={image}/>)
        }
      </div>
    </div>
  );
}

export default App;
