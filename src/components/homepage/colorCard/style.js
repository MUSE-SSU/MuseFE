import styled from "styled-components";
import { motion } from "framer";

export const Logo = styled.h1`
    font-size: var(--fs-250);
    font-family: R-FLEX-BLACK;
    text-decoration: none !important;
    @media (max-width: 479px) {
        font-size: var(--fs-70);
    }
    @media (max-width: 767px) and (min-width: 480px) {
        font-size: var(--fs-100);
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        font-size: var(--fs-150);
    }
    @media (min-width: 1024px) {
        font-size: var(--fs-200);
    }
`;

export const ColorName = styled.h1`
    width: 18vw;
    font-family: R-FLEX-BLACK;
    font-size: var(--fs-200);
    text-decoration: none !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 479px) {
        font-size: var(--fs-70);
    }
    @media (max-width: 767px) and (min-width: 480px) {
        font-size: var(--fs-70);
    }
    @media (max-width: 1024px) and (min-width: 768px) {
        font-size: var(--fs-150);
    }
    @media (min-width: 1025px) {
        font-size: var(--fs-200);
    }
`;

export const ColorHexa = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 20px;
    text-decoration: none !important;
    @media (max-width: 479px) {
        display: none;
    }
    @media (max-width: 767px) and (min-width: 480px) {
        font-size: 0.5em;
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        font-size: var(--fs-70);
    }
    @media (min-width: 1024px) {
        font-size: var(--fs-100);
    }
`;

export const MainContainer = styled(motion.div)`
    cursor: pointer;
    width: 18vw;
    max-width: 260px;
    height: 20vh;
    max-height: 280px;
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
    //모바일
    @media (max-width: 479px) {
        height: 20vh;
    }

    //태블릿
    @media (max-width: 767px) and (min-width: 480px) {
    }

    //노트북
    @media (max-width: 1023px) and (min-width: 768px) {
    }

    //데스크탑 & 대형노트북
    @media (min-width: 1024px) {
        width: 18vw;
        height: 30vh;
        overflow: hidden;
        border: 3px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Test = styled.div`
    border-radius: 50% 50% 0 0;
    width: 30vw;
    height: 30vh;
    max-width: 480px;
    max-height: 480px;
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
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 320px) {
        margin-left: 4px;
        justify-content: flex-start;
    }
    @media (max-width: 375px) and (min-width: 321px) {
        margin-left: 4px;
        justify-content: center;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        margin-left: 4px;
        justify-content: center;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        margin-left: 4px;
        justify-content: center;
    }
`;
