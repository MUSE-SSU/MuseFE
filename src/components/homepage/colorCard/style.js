import styled from "styled-components";
import { motion } from "framer";

export const Logo = styled.h1`
    font-size: var(--g-text-font-size-7);
    font-family: R-FLEX-BLACK;
    text-decoration: none !important;
`;

export const ColorName = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 24px;
    text-decoration: none !important;
`;

export const ColorHexa = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 20px;
    text-decoration: none !important;
`;

export const MainContainer = styled(motion.div)`
    cursor: pointer;
    width: 228px;
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
`;

export const Test = styled.div`
    border-radius: 50% 50% 0 0;
    width: 280px;
    height: 170px;
    background-color: ${(props) => props.color};
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 12px;
`;
