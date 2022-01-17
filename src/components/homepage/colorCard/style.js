import styled from "styled-components";
import { motion } from "framer";

export const Logo = styled.h1`
    font-size: var(--g-text-font-size-7);
    font-family: R-FLEX-BLACK;
    text-decoration: none !important;
    @media (max-width: 767px) {
        display: none;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 24px;
    }
`;

export const ColorName = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 24px;
    text-decoration: none !important;
    @media (max-width: 375px) {
        font-size: 4px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        font-size: 8px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 18px;
    }
`;

export const ColorHexa = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 20px;
    text-decoration: none !important;
    @media (max-width: 320px) {
        font-size: 4px;
    }
    @media (max-width: 375px) and (min-width: 320px) {
        font-size: 6px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        font-size: 8px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 14px;
    }
`;

export const MainContainer = styled(motion.div)`
    cursor: pointer;
    width: 17vw;
    height: 300px;
    overflow: hidden;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover ${ColorHexa} {
        color: ${(props) => `${props.color}`};
    }
    &:hover ${ColorName} {
        color: ${(props) => `${props.color}`};
    }
    &:hover ${Logo} {
        color: ${(props) => `${props.color}`};
    }

    @media (max-width: 320px) {
        width: 56px;
        height: 80px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 375px) and (min-width: 321px) {
        width: 68px;
        height: 80px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        width: 78px;
        height: 88px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        width: 148px;
        height: 188px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 1163px) and (min-width: 769px) {
        width: 194px;
        height: 220px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 1314px) and (min-width: 1162px) {
        width: 196px;
        height: 280px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Test = styled.div`
    border-radius: 50% 50% 0 0;
    width: 280px;
    height: 170px;
    background-color: ${(props) => props.color};
    @media (max-width: 320px) {
        margin-left: 2px;
        justify-content: center;
        height: 80px;
    }
    @media (max-width: 375px) and (min-width: 320px) {
        width: 100px;
        height: 100px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        width: 140px;
        height: 140px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        width: 200px;
        height: 140px;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 12px;
    @media (max-width: 320px) {
        margin-left: 2px;
        justify-content: flex-start;
        height: 80px;
    }
    @media (max-width: 375px) and (min-width: 321px) {
        margin-left: 2px;
        justify-content: center;
        height: 80px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        margin-left: 2px;
        justify-content: center;
        height: 80px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        margin-left: 2px;
        justify-content: center;
        height: 80px;
    }
`;
