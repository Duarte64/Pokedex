import Router from './routes';
import GlobalStyles from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import whiteTheme from './assets/styles/themes/whiteTheme';
import blackTheme from './assets/styles/themes/blackTheme';

import { useState } from 'react';

function App() {

    const [theme, setTheme] = useState(true);
    console.log(theme);
    
    return (
        <>
            <ThemeProvider theme={theme ? whiteTheme : blackTheme}>
                <GlobalStyles />
                <Router setTheme={setTheme} theme={theme}/>
            </ThemeProvider>
        </>
    );
}

export default App;
