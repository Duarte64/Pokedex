import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import handlePokemonFetch from "../../services/handlePokemonFetch";

import balance from '../../assets/icons/balance.svg';
import scale from '../../assets/icons/scale.svg';
import rightArrow from '../../assets/images/rightArrow.png'

import normalizeStatName from "../../utils/normalizeStatName";

import { 
    PokeInfoArea, 
    PokeBasicInfos, 
    TypeLabel, 
    PokeCompleteInfos,
    StyledInfoArea,
    StatusArea,
    PokemonAditionalInfos
} from './style';

import normalizeData from "../../utils/normalizeData";
import normalizeWords from "../../utils/normalizeWords";
import handleEvolutionChainFetch from "../../services/handleEvolutionChainFetch";

export default function Pokemon() {

    const pokemonParam = useParams();
    
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemonChainEvolution, setPokemonChainEvolution] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon(pokemonParam) {
            try {
                const pokemon = await handlePokemonFetch(pokemonParam.id);
                setPokemonInfo([pokemon]);
                const chainEvoluiton = await handleEvolutionChainFetch(pokemon);
                setPokemonChainEvolution(chainEvoluiton);
            } catch {
                navigate('/404');
            }
        }

        getPokemon(pokemonParam);
    }, [pokemonParam, navigate]);

    return(
        pokemonInfo.map((pokemon) => 
        <>
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
                                    max={200} 
                                    value={Number(status.base_stat)}
                                    disabled 
                                />
                            </div>
                        )}                   
                    </StatusArea>
                </PokeCompleteInfos>
            </PokeInfoArea>
            <PokemonAditionalInfos mainType={pokemon.types[0].type.name} key={`${pokemon.name}/${pokemon.id}`}>
                <h2>Evolution Chain</h2>
                <div>
                    {pokemonChainEvolution.map((pokemon, index) => 
                        <>
                        <section>
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`}   onClick={() => navigate(`/pokemon/${pokemon.id}`)}/> 
                            <legend>{normalizeWords(pokemon.name)}</legend>
                        </section>
                        <section>
                            {index !== pokemonChainEvolution.length-1 && 
                                <>
                                    <img className='teste' src={rightArrow} alt='Evolves to'/>
                                </>
                            } 
                        </section>
                        </>
                    )}
                </div>
            </PokemonAditionalInfos>
        </>
        )   
    )
}