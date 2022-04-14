import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    border: 3px solid ${({theme, mainType}) => theme.colors[mainType].main};
    margin: 16px;
    border-radius: 20px;
    width: 200px;
    background-color: #FFFFFF;
    color: white;
    letter-spacing: 0.75px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: 8px 8px 10px rgba(0,0,0,0.15);
    }

    img {
        width: 170px;
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