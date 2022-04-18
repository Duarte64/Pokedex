import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    min-width: 360px;
    margin: 0px auto;
    text-align: center;
    color:  ${({theme}) => theme.mainTheme.font};
    margin-top: 10vh;
    margin-bottom: 5vh;
    
    img {
        width: 400px;
    }

    a {
        text-decoration: none;
        font-size: 18px;
        color: blue;
        text-decoration: underline;
    }

    @media screen and (max-width: 480px) {
        img {
            width: 250px;
        }
    }
`;