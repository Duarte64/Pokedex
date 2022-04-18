import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: ${({theme}) => theme.mainTheme.background};
        font-size: 16px;
        color: ${({theme}) => theme.mainTheme.secondaryFont};
    }

    button {
        cursor: pointer;
    }
`;