import styled from 'styled-components';

export const PokeInfoArea = styled.div`
    background-color: ${({theme, mainType}) => theme.colors[mainType].main};
    border-radius: 16px;
    width: 70%;
    min-width: 368px;
    margin: 0px auto;
    margin-bottom: 32px;
    padding: 8px;
    display: flex;
    flex-flow: row wrap;

    h3 {
        margin: 32px 0px 16px 0px;
        color: ${({theme, mainType}) => theme.colors[mainType].main};
    }
`; 

export const PokeBasicInfos = styled.div`
    width: 50%;
    margin: 0px auto;
    min-width: 350px;
    padding: 16px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-transform: capitalize;
    text-align: left;

    img {
        max-width: 310px;
    }
`;

export const PokeCompleteInfos = styled.div`
    width: 50%;
    margin: 0px auto;
    min-width: 350px;
    border-radius: 16px;
    padding: 16px;
    background-color: white;
    text-align: center;
    color: black;
    font-weight: 300;
    font-size: 18px;
`;

export const StyledInfoArea = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;

    div{

        &:nth-child(2) {
            width: 33%;
            border-right: 1px solid #777777;
            border-left: 1px solid #777777;
        }

        &:nth-child(3) {
            text-transform: capitalize;
        }

    }
    legend {
        font-size: 14px;
        color: #999999;
        margin: 2px auto;
    }

    img {
        height: 30px;
    }

    @media screen and (max-width: 480px) {
        justify-content: space-between;
    }
`;

export const StatusArea = styled.div`
    
    span {
        font-weight: bold;
        text-transform: uppercase;
        color: ${({theme, mainType}) => theme.colors[mainType]?.main};
    }

`;

export const TypeLabel = styled.span`
background-color: ${({theme, type}) => theme.colors[type].main};
color: white;
padding: 4px 12px;
border-radius: 16px;
font-weight: bold;
text-transform: uppercase;
margin: 0px 8px;
`;
