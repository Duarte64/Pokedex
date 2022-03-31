import handleErrors from "./utils/handleErrors";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(pokemonNameOrId) {
    console.log(pokemonNameOrId);
    try {
        console.log('entrei');
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        handleErrors(apiResponse.status);
        const pokemonSearch = await apiResponse.json();
        return pokemonSearch;  
    } catch(err) {
        console.log(err);
        return [];
    }
}