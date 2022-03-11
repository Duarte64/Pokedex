import styled from 'styled-components';

//${({theme, mainType}) => theme.colors[mainType].main}

export const Container = styled.div`

    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");
    font-family: 'Inter', sans-serif;
    text-align: center;
    border: 2px solid ${({theme, mainType}) => theme.colors[mainType].main};
    margin: 16px;
    border-radius: 40px;
    width: 200px;
    color: white;
    background-color: #E5E5E5;

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
        padding: 0px 30px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }
`;