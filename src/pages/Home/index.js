import { ThemeProvider } from 'styled-components';

import pokemonThemes from '../../assets/styles/themes/pokeTypes';
import PokeArea from '../../components/PokeArea';
import HeaderHome from '../../components/HeaderHome'
import Pagination from '../../components/Pagination'
import { PokemonPage } from '../../components/PokemonPage';

import FetchPageProvider from '../../providers/FetchPageProvider';

export default function Home() {


  return (
    <ThemeProvider theme={pokemonThemes}>
        <PokemonPage>
            <HeaderHome />
            <FetchPageProvider>
                <PokeArea />
                <Pagination />
            </FetchPageProvider>
        </PokemonPage>
    </ThemeProvider>
  );
}