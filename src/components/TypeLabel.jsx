import styled from "styled-components";

export const TypeLabel = styled.span`
    background-color: ${({theme, type}) => theme.colors[type].main};
    color: white;
    padding: 4px 12px;
    border-radius: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0px 8px;
`;