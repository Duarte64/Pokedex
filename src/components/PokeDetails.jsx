import styled from "styled-components";

export const PokeDetails = styled.div`
    width: 99%;
    margin: 0px auto;
    background-color: white;
    color: black;
    border-radius: 16px;
    padding: 16px;
    text-align: center;
    text-transform: capitalize;

    div {
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        section {
            display: flex;
            flex-flow: column;
        }
    }
`;