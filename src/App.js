import Router from './routes';
import GlobalStyles from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import pokemonThemes from './assets/styles/themes/pokeTypes';

function App() {
  return (
    <>
        <ThemeProvider theme={pokemonThemes}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    </>
  );
}

export default App;
