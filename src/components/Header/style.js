import styled from "styled-components";

export const Container = styled.header`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    
    img {
        cursor: pointer
    }
    
    a {
        text-decoration: none;
        display: flex;
        cursor: pointer;

        h1 {
            color: black;
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
