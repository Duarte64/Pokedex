import { useState, useEffect, useCallback } from 'react';

import { ThemeProvider } from 'styled-components';

import HeaderHome from '../../components/HeaderHome'
import PokeArea from '../../components/PokeArea';
import Pagination from '../../components/Pagination'
import { PokemonPage } from '../../components/PokemonPage';

import pokemonThemes from '../../assets/styles/themes/pokeTypes';

import handlePokemonListFetch from '../../services/handlePokemonListFetch';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [pageBehavior, setPageBehavior] = useState({offset: 0, limit: 20});
    const [actualPage, setActualPage] = useState(1);

    const handlePage = useCallback((event) => {    
        setActualPage(Number(event.target.value));
    }, []);

    useEffect(() => {
        setPageBehavior({offset: ((actualPage-1) * 20), limit: 20})
    }, [actualPage]);

    useEffect(() => {
        async function handleThis() {
            const listPokemons = await handlePokemonListFetch(pageBehavior);
            setPokemons([...listPokemons]);
        }
        handleThis();
      }, [pageBehavior]);

      console.log(actualPage);

  return (

    <ThemeProvider theme={pokemonThemes}>
        <PokemonPage>
            <HeaderHome />
            <PokeArea pokemons={pokemons}/>
            <Pagination actualPage={actualPage} handlePage={handlePage}/>
        </PokemonPage>
    </ThemeProvider>
  );
}