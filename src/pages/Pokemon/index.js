import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import handlePokemonFetch from "../../services/handlePokemonFetch";

export default function Pokemon() {

    const pokemonParam = useParams();
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        async function getPokemon(pokemonParam) {
            const pokemon = await handlePokemonFetch(pokemonParam.id);
            setPokemonInfo(pokemon);
        }

        getPokemon(pokemonParam);
    }, [pokemonParam]);

    return(
        <>
            <p>{pokemonInfo?.id}</p>
            <p>{pokemonInfo?.name}</p>
            <p>{pokemonInfo?.base_experience}</p>
            <p>{pokemonInfo?.height}</p>
            <p>{pokemonInfo?.order}</p>
            <p>{pokemonInfo?.weight}</p>
        </>
    )
}