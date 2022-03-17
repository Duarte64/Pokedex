import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 16px auto 32px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;

    ul {
        list-style: none;
        color: black;
        display: flex;
        flex-flow: row wrap;
        display: inline;

        li {
            color: #F57D31;
            display: inline;
            margin: 5px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        .listActive {
            background-color: #F57D31;
            color: white;
            padding: 2px 8px;
        }
    }
`;
