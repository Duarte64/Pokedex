import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }

    body {
        background: #222222;
        font-size: 16px;
        color: #FFFFFF;
    }

    button {
        cursor: pointer;
    }
`;