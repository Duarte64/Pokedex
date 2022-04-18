import handlePokemonFetch from "./handlePokemonFetch";

export default async function handleEvolutionChainFetch(pokemon) {
    try {
        const species = await (await fetch(pokemon.species.url)).json();
        const evolutionChain = await fetch(species['evolution_chain'].url);
        const pokemonEvolutionChain = await evolutionChain.json();
        let pokemonChain = [pokemonEvolutionChain.chain.species.name];
        let chain = pokemonEvolutionChain.chain;
        while (chain?.['evolves_to']) {
            chain = chain['evolves_to'][0];
            if (chain?.species?.name !== undefined) {
                pokemonChain.push(chain?.species?.name);
            }
        }
        const pokemonsAsObjects = await Promise.all(pokemonChain.map(async (pokemon) => {
            return await handlePokemonFetch(pokemon);
        }));
        return pokemonsAsObjects;
    } catch(err) {
        throw new Error('Erro 404!');
    }
};