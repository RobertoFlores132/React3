import './App.css';
import Searchbox from './components/Searchbox.js'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Residentlist from './components/Residentlist';


function App() {

  const [ location, setLocation ] = useState ({})

  useEffect(() => {
      const random = Math.floor(Math.random()*126) + 1
      axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocation(res.data))
  }, []);
  console.log(location)
  return (
  <div className="App">
    <div className='header'>
      <h1>Rick And Morty</h1>
    </div>
     <Searchbox setLocation={setLocation}/>
     <div className='dimension-info'>
       <div>
        <p><b>Name:</b> {location.name}</p>
        <p><b>Type:</b> {location.type}</p>
        <p><b>Dimension:</b> {location.dimension}</p>
        <p><b>Population:</b> {location.residents?.length}</p>
      </div>
     </div>
     <Residentlist residents={location?.residents}/>
  </div>
  );
}

export default App;
