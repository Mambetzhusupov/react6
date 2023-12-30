import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?_limit=20')
        .then(response => response.json())
        .then(data => setPokemons(data.results))
    }

    getPokemons()
  }, [])

  return (
    <div className="App">
      <h1>POKEMON CARDS</h1>
      <PokemonCard pokemons={pokemons}/>
    </div>
  );
}

export default App;
