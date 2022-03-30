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
        console.log('fui chamado');
        if (event.target.value > actualPage) {
            setActualPage((prevState) => prevState + 1);
            setPageBehavior({offset: pageBehavior.offset + pageBehavior.limit, limit: pageBehavior.limit});
        } else if (event.target.value < actualPage) {
            setActualPage((prevState) => prevState - 1);
            setPageBehavior({offset: pageBehavior.offset - pageBehavior.limit, limit: pageBehavior.limit});
        }
    }, []);

    useEffect(async () => {
        const listPokemons = await handlePokemonListFetch(pageBehavior);
        setPokemons([...listPokemons]);
      }, [pageBehavior]);

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