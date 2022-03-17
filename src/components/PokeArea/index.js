/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import PokeCard from '../../components/PokeCard';

import normalizeWords from '../../utils/normalizeWords';
import normalizeNumbers from '../../utils/normalizeNumbers';

import {PagesContext} from '../../providers/FetchPageProvider';

export default function PokeArea() {
  
  const {pages} = useContext(PagesContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    handleFetch();
  }, [pages]);

  async function handleFetch() {
    const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pages.offset}&limit=${pages.limit}`).then(response => response.json());

    const pokemonInfos = pokemonList.results.map(link => link.url);
    const pokemonsFinalList = await Promise.all(pokemonInfos.map(url =>  fetch(url).then(result => result.json())));
    setPokemons([...pokemonsFinalList]);
  }

    return (
        <>
            {pokemons.map((pokemon) => pokemon.is_default ? (

                <PokeCard key={pokemon.name} types={pokemon.types} mainType={pokemon.types[0].type.name}>
            
                    <p className='pokemonId'>#{normalizeNumbers(pokemon.id)}</p>
            
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`${pokemon.name} front sprite`}/>
                    
                    <p className='pokemonName'>{<span>{normalizeWords(pokemon.name)}</span>}</p>
            
                </PokeCard>
            ) : '')}
        </>
    )
}
