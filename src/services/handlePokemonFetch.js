import handleErrors from "./utils/handleErrors";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(pokemonNameOrId) {
    try {
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        handleErrors(apiResponse.status);
        const pokemonSearch = await apiResponse.json();
        return pokemonSearch;  
    } catch(err) {
        throw new Error('Erro 404!');
    }
}