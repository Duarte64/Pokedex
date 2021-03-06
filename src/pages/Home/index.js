import { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import HeaderHome from '../../components/HeaderHome'
import PokeCard from '../../components/PokeCard';
import Pagination from '../../components/Pagination'
import { PokemonPage } from '../../components/PokemonPage';

import handlePokemonListFetch from '../../services/handlePokemonListFetch';
import handlePokemonFetch from '../../services/handlePokemonFetch';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [pageLimit, setPageBehavior] = useState(20);
    const [actualPage, setActualPage] = useState(1);

    const handlePage = useCallback((event) => {   
        window.scroll(0,0); 
        const value = Number(event.target.value);
        setActualPage(value);
    }, []);

    const handleLimit = useCallback((event) => {    
        setPageBehavior(event.target.value);
        setActualPage(1);
    }, []);

    const handleSearch = useCallback(async (event) => {
        const pokemon = await handlePokemonFetch(event.target.value);
        setPokemons([pokemon]);
    }, []);

    useEffect(() => {
        async function handleThis() {
            const listPokemons = await handlePokemonListFetch(pageLimit, actualPage);
            setPokemons([...listPokemons]);
        }
        handleThis();
    }, [pageLimit, actualPage]);

    return (
        <PokemonPage>
            <HeaderHome handleSearch={handleSearch} handleLimit={handleLimit}/>
            {pokemons.map((pokemon) => 
                (pokemon.is_default === true && 
                    <Link to={`/pokemon/${pokemon.id}`} key={pokemon.name}>
                        <PokeCard key={pokemon.name} pokemon={pokemon}/>
                    </Link>)
            )}
            <Pagination pageNumbers={Math.ceil(898/pageLimit)} actualPage={actualPage} handlePage={handlePage}/>
        </PokemonPage>
    );
}