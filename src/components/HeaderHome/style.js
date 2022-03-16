import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 24px;

    input {
        border: none;
        height: 40px;
        width: 20%;
        border-radius: 20px;

        &:focus, &:focus{
            border: blue;
            outline: none;
        }
    }
`;