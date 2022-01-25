import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: center;
`;

export const HeaderText = styled.h1`
    font-size: 2.5em;
    font-family: R-FLEX-BLACK, helvetica;
    font-weight: 900;
`;

export const ContentText = styled.p`
    white-space: pre-wrap;
    font-weight: 600;
    font-family: helvetica;
`;

export const TosSection = styled.div`
    margin-top: 24px;
    word-break: break-all;
    width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
`;

export const TitleContainer = styled.div`
    display: flex;
    margin-top: 24px;
    margin-bottom: 24px;
    flex-direction: row;
`;

export const TosTitle = styled.h1`
    font-family: "Helvetica";
    font-size: 1.8em;
    font-weight: 900;
    margin: 24px 0 0;
`;

export const TosDetail = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    word-break: break-all;
    width: 768px;
`;
