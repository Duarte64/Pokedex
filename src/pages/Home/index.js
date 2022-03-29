import { ThemeProvider } from 'styled-components';

//import HeaderHome from '../../components/HeaderHome'

import pokemonThemes from '../../assets/styles/themes/pokeTypes';
import PokeArea from '../../components/PokeArea';

import Pagination from '../../components/Pagination'
import { PokemonPage } from '../../components/PokemonPage';

import FetchPageProvider from '../../providers/FetchPageProvider';

export default function Home() {


  return (

    <ThemeProvider theme={pokemonThemes}>
        <PokemonPage>
            <FetchPageProvider>
                <PokeArea/>
                <Pagination />
            </FetchPageProvider>
        </PokemonPage>
    </ThemeProvider>
  );
}