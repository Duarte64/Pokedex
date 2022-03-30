import handleErrors from "./utils/handleErrors";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function({...params}) {
    console.log(params);
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${params.offset}&limit=${params.limit}`);
    handleErrors(apiResponse.status);
    const pokemonPageList = await apiResponse.json();
    const pokemonInfos = pokemonPageList.results.map(link => link.url);
    const pokemonList = await Promise.all(pokemonInfos.map(url =>  fetch(url).then(result => result.json())));
    return pokemonList;
}