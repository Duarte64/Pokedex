import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: #F7F7F7;
        font-size: 16px;
        color: #FFFFFF;
    }

    button {
        cursor: pointer;
    }
`;