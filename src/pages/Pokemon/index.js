import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    StatusArea,
} from './style';

import normalizeData from "../../utils/normalizeData";
import normalizeWords from "../../utils/normalizeWords";

export default function Pokemon() {

    const pokemonParam = useParams();
    
    const [pokemonInfo, setPokemonInfo] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon(pokemonParam) {
            try {
                const pokemon = await handlePokemonFetch(pokemonParam.id);
                setPokemonInfo([pokemon]);
            } catch {
                navigate('/404');
            }
        }

        getPokemon(pokemonParam);
    }, [pokemonParam, navigate]);

    return(
        pokemonInfo.map((pokemon) => 
            <PokeInfoArea mainType={pokemon.types[0].type.name} key={pokemon.name}>
                <PokeBasicInfos>
                    <p>#{pokemon.id}</p>
                    <h2>{normalizeWords(pokemon.name, true)}</h2>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon Official Artwork." />
                </PokeBasicInfos>
                <PokeCompleteInfos>
                    <p>
                        {pokemon.types.map(type => 
                            <TypeLabel key={type.type.name} type={type.type.name}>{type.type.name}</TypeLabel>)
                        }
                    </p>
                    <h3>About</h3>
                    <StyledInfoArea>
                        <div>
                            <p><img src={balance} alt="Balance" /> {normalizeData(pokemon.weight)} kg</p>
                            <legend>Weight</legend>
                        </div>
                        <div>
                            <p><img src={scale} alt="Scale" /> {normalizeData(pokemon.height)} m</p>
                            <legend>Height</legend>
                        </div>
                        <div>
                            {pokemon.abilities.map((ability,index) => index < 2 &&
                                <p key={ability.ability.name}>
                                    {normalizeWords(ability.ability.name, true)}
                                </p>
                            )}
                            <legend>Moves</legend>
                        </div> 
                    </StyledInfoArea>
                    <h3>Base Stats</h3>
                    <StatusArea mainType={pokemon.types[0].type.name}>
                        {pokemon.stats.map(status =>
                            <div key={status.stat.name}>
                                <p>
                                    <span>{normalizeStatName(status.stat.name)}</span> {status.base_stat}
                                </p>
                                <progress 
                                    className="slider" 
                                    max={250} 
                                    value={Number(status.base_stat)}
                                    disabled 
                                />
                            </div>
                        )}                   
                    </StatusArea>
                </PokeCompleteInfos>
            </PokeInfoArea>
        )   
    )
}