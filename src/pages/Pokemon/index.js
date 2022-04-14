import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import handlePokemonFetch from "../../services/handlePokemonFetch";

import balance from '../../assets/icons/balance.svg';
import scale from '../../assets/icons/scale.svg';

import normalizeStatName from "../../utils/normalizeStatName";

import { 
    PokeInfoArea, 
    PokeBasicInfos, 
    TypeLabel, 
    PokeCompleteInfos,
    StyledInfoArea,
    StatusArea
} from './style';
//import { PokeDetails } from './style';

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
        <PokeInfoArea mainType={pokemon.types[0].type.name} key={pokemon.name}>
            <PokeBasicInfos>
                <p>#{pokemon.id}</p>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon Official Artwork." />
            </PokeBasicInfos>
            <PokeCompleteInfos>
                <p>{pokemon.types.map(type => <TypeLabel type={type.type.name}>{type.type.name}</TypeLabel>)}</p>
                <h3>About</h3>
                <StyledInfoArea>
                    <div>
                        <p><img src={balance} alt="Balance" /> {pokemon.weight} kg</p>
                        <legend>Weight</legend>
                    </div>
                    <div>
                        <p><img src={scale} alt="Scale" /> {pokemon.height} m</p>
                        <legend>Height</legend>
                    </div>
                    <div>
                        {pokemon.abilities.map(ability => <p>{ability.ability.name}</p>)}
                        <legend>Moves</legend>
                    </div> 
                </StyledInfoArea>
                <h3>Base Stats</h3>
                <StatusArea mainType={pokemon.types[0].type.name}>
                    {pokemon.stats.map(status =>
                        <p>
                            <span>{normalizeStatName(status.stat.name)}</span> {status.base_stat}
                        </p>
                    )}                   
                </StatusArea>
            </PokeCompleteInfos>
        </PokeInfoArea>)   
    )
}