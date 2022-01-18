import styled from "styled-components";
import { motion } from "framer";

export const MainContainer = styled.div`
    max-width: 1440px;
    padding: 48px;
    @media (max-width: 479px) {
        padding: 12px;
    }
    @media (max-width: 767px) and (min-width: 480px) {
        padding: 18px;
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        padding: 24px;
    }
    @media (max-width: 2561px) and (min-width: 1024px) {
        padding: 48px;
    }
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`;
export const ColorContainerName = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 2.5em;
    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

export const ColorContainer = styled.div`
    margin-top: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
