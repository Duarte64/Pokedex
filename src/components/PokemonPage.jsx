import styled from "styled-components";

export const PokemonPage = styled.div`
    width: 90%;
    max-width: 1920px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: auto;

    @media screen and (max-width:480px) {
        width: 100%;
    }
`;