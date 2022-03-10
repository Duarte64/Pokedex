import styled from 'styled-components';

export const Container = styled.div`

    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");

    font-family: 'Inter', sans-serif;
    width: 150px;
    min-width: 180px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 25px;
    color: #FFFFFF;
    background-color: ${({mainType}) => mainType === 'grass' ? `#38D4B9` : `blue`};

    p {
        margin: 0px;
    }
    
    span {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .pokemonTypeText {
        padding: 4px 8px;
        border-radius: 10px;
        background-color: #6BDCC8;
    }

    img {
        width: 125px;
        height: auto;
    }

    & + & {
        margin-top: 16px;
    }
`;