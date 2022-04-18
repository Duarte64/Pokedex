import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 16px auto 32px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;

    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;

        li {
            color: #484848;
            display: inline;
            margin: 7px;
            background-color: #DFDFDF;
            width: 40px;
            height: 40px;
            text-align: center;
            padding: 4px 0px;
            border-radius: 16px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        .reduced {
            width: 35px;
            height: 35px;
            padding: 2px 0px;
            border-radius: 8px;
            margin-top: 10px;
            letter-spacing: -4px;
            text-align: center;
            
            @media screen and (max-width: 720px) {
                display: none;
            }

        }
        
        .listActive {
            background-color: #484848;
            color: white;
        }

        .noneList {
            background-color: ${({theme}) => theme.mainTheme.background};
            color: ${({theme}) => theme.mainTheme.font};
            width: 30px;
            height: 10px;
            margin: 0px;
            padding: 20px 0px;

            &:hover {
                text-decoration: none;
                cursor: default;
            }
        }
    }
`;
