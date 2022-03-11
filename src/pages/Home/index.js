/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import { ThemeProvider } from 'styled-components';

//Styles
import pokemonThemes from '../../assets/styles/themes/pokeTypes';
import PokeCard from '../../components/PokeCard';
import { PokemonPage } from '../../components/PokemonPage'
//Utils
import normalizeWords from '../../utils/normalizeWords';
import normalizeNumbers from '../../utils/normalizeNumbers';

export default function Home() {
  
  const [pokemons, setPokemons] = useState([]);

  const [nextFetch, setFetch] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);

  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    const pokemonList = await fetch(nextFetch).then(response => response.json());
    setFetch(pokemonList.next);

    const pokemonInfos = pokemonList.results.map(link => link.url);
    const pokemonsFinalList = await Promise.all(pokemonInfos.map(url =>  fetch(url).then(result => result.json())));
    setPokemons((prevState) => [...prevState, ...pokemonsFinalList]);
  }
  console.log();

  return (
    <ThemeProvider theme={pokemonThemes}>
        <PokemonPage>
            {pokemons.map((pokemon) => (

                <PokeCard key={pokemon.order} types={pokemon.types} mainType={pokemon.types[0].type.name}>

                    <p className='pokemonId'>#{normalizeNumbers(pokemon.id)}</p>

                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`${pokemon.name} front sprite`}/>
                    
                    <p className='pokemonName'>{<span>{normalizeWords(pokemon.name)}</span>}</p>

                </PokeCard>
            ))}
        </PokemonPage>
        <button onClick={handleFetch}>Ver Mais</button>
    </ThemeProvider>
  );
}