import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 8px;

    p {
        font-size: 22px;
        color: ${({theme}) => theme.mainTheme.font};
        margin-left: 32px;
    }

    input {
        width: 70%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        padding: 0px 24px;
        margin-right: -1px;

        &:focus {
            outline: none;
        }
    }

    select {
        width: 80px;
        border-radius: 20px;
        margin-left: 24px;
    }

    input, select {
        border: none;
        height: 40px;
        font-size: 20px;
        text-align: center;
    }

    button {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: white;
        border: none;
    }

    img {
        margin: 4px 4px 0px 0px;
        max-width: 20px;
    }

    @media screen and (max-width: 1024px) {
        p {
            margin-left: 0px;
            margin-top: 24px;
        }
    }
`;