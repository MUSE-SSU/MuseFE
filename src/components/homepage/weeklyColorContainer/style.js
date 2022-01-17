import styled from "styled-components";
import { motion } from "framer";

export const MainContainer = styled.div`
    padding: 36px 80px 36px 80px;
    @media (max-width: 320px) {
        padding: 4px 12px 4px 12px;
    }
    @media (max-width: 375px) and (min-width: 321px) {
        padding: 6px 12px 6px 12px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        padding: 8px 12px 8px 12px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        padding: 12px 12px 12px 12px;
    }
    @media (max-width: 1024px) and (min-width: 769px) {
        padding: 18px 12px 18px 12px;
    }
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
    display: flex;
    justify-content: space-between;
`;
