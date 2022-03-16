import styled from 'styled-components';

//${({theme, mainType}) => theme.colors[mainType].main}

export const Container = styled.div`
    text-align: center;
    border: 2px solid ${({theme, mainType}) => theme.colors[mainType].main};
    margin: 16px;
    border-radius: 40px;
    width: 200px;
    color: white;
    background-color: #E5E5E5;
    font-weight: 400;

    img {
        width: 150px;
    }

    .pokemonId {
        margin: 0px;
        display: inline-block;
        width: 120px;
        background-color: ${({theme, mainType}) => theme.colors[mainType].main}; 
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .pokemonName {
        margin: 0px;
        background-color: ${({theme, mainType}) => theme.colors[mainType].main};
        display: inline-block;
        padding: 0px 25px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }

    @media screen and (max-width:480px) {
        margin: 6px;
        width: 175px;
        font-size: 12px;

        img {
            width: 120px;
        } 

        .pokemonName {
            padding: 0px 15px;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
        }

    }
`;