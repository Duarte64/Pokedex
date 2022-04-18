import styled from 'styled-components';

export const PokeInfoArea = styled.div`
    background-color: ${({theme, mainType}) => theme.colors[mainType].main};
    border-radius: 16px;
    width: 95%;
    min-width: 368px;
    max-width: 1480px;
    margin: 0px auto;
    margin-bottom: 16px;
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
        max-width: 350px;

        @media screen and (max-width: 480px) {
            max-width: 310px;
        }
    }

    h2 {
        font-size: 32px;
        margin-bottom: 16px;
    }
`;

export const PokeCompleteInfos = styled.div`
    width: 50%;
    margin: 0px auto;
    min-width: 350px;
    border-radius: 16px;
    padding: 16px;
    background-color: ${({theme}) => theme.mainTheme.background};
    text-align: center;
    color: ${({theme}) => theme.mainTheme.font};
    font-weight: 300;
    font-size: 18px;

    @media screen and (max-width: 640px) {
        width: 99%;
    }
`;

export const StyledInfoArea = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;

    div{

        height: 80px;
        display: flex;
        flex-flow: column;
        justify-content: end;
        width: 33%;

        &:nth-child(1) {
            p {
                margin-bottom: 6px;
            }
        }

        &:nth-child(2) {
            border-right: 1px solid #777777;
            border-left: 1px solid #777777;

            p {
                margin-bottom: 6px;
            }
        }

        &:nth-child(3) {
            text-transform: capitalize;
        }

    }

    legend {
        font-size: 14px;
        color: ${({theme}) => theme.mainTheme.tertiaryFont};
        margin: 2px auto;
    }

    img {
        height: 30px;
        margin-right: 12px;
        filter: ${({theme}) => theme.mainTheme.filter};
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 480px) {
        justify-content: space-between;
    }
`;

export const StatusArea = styled.div`

    div {
        width: 100%;
        display: flex;
    }

    span {
        font-weight: bold;
        text-transform: uppercase;
        color: ${({theme, mainType}) => theme.colors[mainType]?.main};
        border-right: 1px solid black;
        width: 60px;
        text-align: left;
    }

    p {
        width: 120px;
        display: flex;
        justify-content: space-between;
        margin-right: 8px;
    }

    .slider {
        -webkit-appearance: none;
        width: 80% !important;
        height: 10px;
        margin: auto;
        border: 2px solid ${({theme, mainType}) => theme.colors[mainType]?.main};;
        border-radius: 16px;

        &::-webkit-progress-bar {
            background-color: white;
        }

        &::-webkit-progress-value {
            background: ${({theme, mainType}) => theme.colors[mainType]?.main};
        }
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
