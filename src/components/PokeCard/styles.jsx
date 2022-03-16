import styled from 'styled-components';

//${({theme, mainType}) => theme.colors[mainType].main}

export const Container = styled.div`
    text-align: center;
    border: 4px solid ${({theme, mainType}) => theme.colors[mainType].main};
    margin: 16px;
    border-radius: 40px;
    width: 200px;
    color: white;
    background-color: #E5E5E5;
    font-weight: 400;
    letter-spacing: 0.75px;

    img {
        width: 150px;
    }

    .pokemonId {
        margin: 0px;
        display: inline-block;
        width: 120px;
        padding: 5px 0px;
        background-color: ${({theme, mainType}) => theme.colors[mainType].main}; 
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .pokemonName {
        margin: 0px;
        background-color: ${({theme, mainType}) => theme.colors[mainType].main};
        display: inline-block;
        padding: 5px 25px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }

    @media screen and (max-width:480px) {
        margin: 16px 6px;
        width: 175px;
        font-size: 12px;

        img {
            width: 120px;
        } 
        
        .pokemonId {
            width: 100px;
            padding: 3px 0px;
        }

        .pokemonName {
            padding: 3px 25px;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
        }

    }
`;