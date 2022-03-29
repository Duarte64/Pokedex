import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 16px auto 32px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 420px) {
        font-size: 16px;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;

        li {
            color: #484848;
            display: inline;
            margin: 7px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        
        .listActive {
            background-color: #484848;
            color: white;
            padding: 2px 8px;
        }
        
        .dots:hover {
            cursor: default;
            text-decoration: none;
        
        }
    }
`;
