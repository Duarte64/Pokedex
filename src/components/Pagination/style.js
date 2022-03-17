import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;

    ul {
        list-style: none;
        color: black;
        display: flex;
        flex-flow: row wrap;
        display: inline;

        li {
            display: inline;
            margin: 5px;

            &:hover {
                cursor: pointer;
            }
        }

        .listActive {
            background-color: black;
            color: white;
        }
    }
`;
