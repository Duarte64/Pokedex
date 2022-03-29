/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import PokeCard from './PokeCard';

import {PagesContext} from '../providers/FetchPageProvider';

import handleFetch from '../services/handleFetch';
import HeaderHome from './HeaderHome';
import after from 'underscore';

export default function PokeArea() {
  
  const {pages} = useContext(PagesContext);

  const [pokemons, setPokemons] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const pokemons = await handleFetch({pages});
    setPokemons([...pokemons]);
  }, [pages]);

  const onComplete = after(pokemons.length, () => {
    setLoading(false);
    console.log("loaded");
  });

    return (
        <>
            <HeaderHome />
            {pokemons.map((pokemon) => (<PokeCard key={pokemon.name} pokemon={pokemon} onComplete={onComplete}/>))}
        </>
    )
}
