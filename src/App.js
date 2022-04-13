import Router from './routes';
import Header from './components/Header';
import GlobalStyles from './assets/styles/global';

function App() {
  return (
    <>
        <GlobalStyles />
        <Header/>
        <Router />
    </>
  );
}

export default App;
