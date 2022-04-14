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
            background-color: #EEEEEE;
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
        
        .listActive {
            background-color: #484848;
            color: white;
        }

        .noneList {
            background-color: #F7F7F7;
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
