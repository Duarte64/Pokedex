/* eslint-disable react-hooks/exhaustive-deps */
import PokeCard from './PokeCard';


export default function PokeArea({pokemons}) {

    return (
        <>
            {pokemons.map((pokemon) => (<PokeCard key={pokemon.name} pokemon={pokemon}/>))}
        </>
    )
}
