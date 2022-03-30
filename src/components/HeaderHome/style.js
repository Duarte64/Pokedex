import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    display: flex;
    flex-flow: row wrap;

    input {
        width: 60%;
        border: none;
        height: 40px;
        border-radius: 20px;
        font-size: 20px;
        margin-right: 24px;
        text-align: center;
    }

    button {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: white;
        border: none;
    }
`;