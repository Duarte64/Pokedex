import { ThemeProvider } from 'styled-components';

import pokemonThemes from '../../assets/styles/themes/pokeTypes';
import PokeArea from '../../components/PokeArea';
import HeaderHome from '../../components/HeaderHome';
import { PokemonPage } from '../../components/PokemonPage';
export default function Home() {


  return (
    <ThemeProvider theme={pokemonThemes}>
        <PokemonPage>
            <HeaderHome />
            <PokeArea />
        </PokemonPage>
    </ThemeProvider>
  );
}