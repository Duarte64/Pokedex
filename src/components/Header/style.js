import styled from "styled-components";

export const Container = styled.header`
    width: 95%;
    min-width: 368px;
    max-width: 1600px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 4px;
    
    img {
        cursor: pointer;
        max-width: 56px;
    }

    .filtered {
        filter: ${({theme}) => theme.mainTheme.filter};
    }
    
    a {
        text-decoration: none;
        display: flex;
        cursor: pointer;

        h1 {
            color: ${({theme}) => theme.mainTheme.font};
            font-size: 40px;
        }

        img {
            max-width:100%;
            margin: 0px 15px;
        }
    }

    @media screen and (max-width: 780px) {
        width: 95%;
    }
`;
