import { ThemeProvider } from 'styled-components';

import pokemonThemes from '../../assets/styles/themes/pokeTypes';
import PokeArea from '../../components/PokeArea';
import { PokemonPage } from '../../components/PokemonPage'


export default function Home() {


  return (
    <ThemeProvider theme={pokemonThemes}>
        <PokemonPage>
            <PokeArea />
        </PokemonPage>
    </ThemeProvider>
  );
}