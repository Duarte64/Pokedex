import styled from "styled-components";

export const PokeInfo = styled.div`
    width: 25%;
    min-width: 360px;
    margin: 32px auto;
    background-color: ${({theme, mainType}) => theme.colors[mainType].main};
    border-radius: 20px;
    padding: 6px 4px;
    font-weight: 300;

    img {
        margin: 0px auto;
        max-width: 330px;
    }

    h2 {
        text-transform: capitalize;
        font-size: 32px;
    }

    section {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        color: ${({theme, mainType}) => theme.colors[mainType].main};
    }
`;