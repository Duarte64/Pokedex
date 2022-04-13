import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import handlePokemonFetch from "../../services/handlePokemonFetch";

import { PokeInfo } from '../../components/PokeInfo';
import { TypeLabel } from '../../components/TypeLabel';
import { PokeDetails } from '../../components/PokeDetails';

export default function Pokemon() {

    const pokemonParam = useParams();
    const [pokemonInfo, setPokemonInfo] = useState([]);

    useEffect(() => {
        async function getPokemon(pokemonParam) {
            const pokemon = await handlePokemonFetch(pokemonParam.id);
            setPokemonInfo([pokemon]);
        }

        getPokemon(pokemonParam);
    }, [pokemonParam]);

    return(
        pokemonInfo.map((pokemon) => 
        <PokeInfo mainType={pokemon.types[0].type.name} key={pokemon.name}>
            <section style={{padding: '8px 24px'}}>
                <h2>{pokemon.name}</h2>
                <p style={{fontSize: '20px'}}>#{pokemon.id}</p>
            </section>
            <div style={{display: 'flex', alignItem:'center'}}>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon Official Artwork." />
            </div>
            <PokeDetails>
                <p>{pokemon.types.map(type => <TypeLabel type={type.type.name}>{type.type.name}</TypeLabel>)}</p>
                <h3 style={{fontWeight: 'bolder', margin: '16px 0px'}}>About</h3>
                <div style={{justifyContent: 'space-evenly'}}>
                    <p style={{width: '33%'}}>Height: {pokemon.height}</p>
                    <p style={{borderLeft: '1px solid black', borderRight: '1px solid black', width: '33%',height: '60px', padding: '17px 0px'}}>Weight: {pokemon.weight}</p>
                    <section style={{width: '33%'}}>
                        {pokemon.abilities.map(ability => <p>{ability.ability.name}</p>)}
                    </section>
                </div>
                <h3 style={{fontWeight: 'bolder', margin: '16px 0px'}}>Base Stats</h3>
                <div style={{display: 'flex', flexFlow:'column wrap', alignItems: 'left'}}>
                    {pokemon.stats.map(status => <p>{status.stat.name}: {status.base_stat}</p>)}
                </div>
            </PokeDetails>
        </PokeInfo>)   
    )
}