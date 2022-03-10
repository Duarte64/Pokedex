/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

//Styles
import PokeCard from './components/PokeCard';
import {PokemonPage} from './components/PokemonPage';

//Utils
import normalizeWords from './utils/normalizeWords';
import normalizeNumbers from './utils/normalizeNumbers';

function App() {
  
  const [pokemons, setPokemons] = useState([]);

  const [nextFetch, setFetch] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);

  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    const pokemonList = await fetch(nextFetch).then(response => response.json());
    setFetch(pokemonList.next);

    const pokemonInfos = pokemonList.results.map(link => link.url);
    console.log(pokemonInfos);
    const pokemonsFinalList = await Promise.all(pokemonInfos.map(url =>  fetch(url).then(result => result.json())));
    setPokemons((prevState) => [...prevState, ...pokemonsFinalList]);
  }

  return (
    <PokemonPage>
        {pokemons.map((pokemon) => (
            <PokeCard key={pokemon.order} mainType={pokemon.types[0].type.name}>
                <p className="pokemonId">#{normalizeNumbers(pokemon.id)}</p>
                <p>{<span>{normalizeWords(pokemon.name)}</span>}</p>
                {pokemon.types.map(type => (
                    <p className="pokemonTypeText">{normalizeWords(type.type.name)}</p>
                ))}
                <img src={pokemon.sprites.other.home.front_default} alt={`${pokemon.name} front sprite`}/>
            </PokeCard>
        ))}
        <button onClick={handleFetch}>Ver Mais</button>
    </PokemonPage>
  );
}

export default App;
