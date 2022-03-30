/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import PokeCard from './PokeCard';

import {PagesContext} from '../providers/FetchPageProvider';

import handleFetch from '../services/handleFetch';
import HeaderHome from './HeaderHome';
//import after from 'underscore';

export default function PokeArea() {
  
  const {pages} = useContext(PagesContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemons = await handleFetch({pages});
    setPokemons([...pokemons]);
  }, [pages]);

    return (
        <>
            <HeaderHome />
            {pokemons.map((pokemon) => (<PokeCard key={pokemon.name} pokemon={pokemon}/>))}
        </>
    )
}
