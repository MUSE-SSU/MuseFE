import styled from "styled-components";
import { motion } from "framer";

export const MainContainer = styled.div`
    max-width: 1440px;
    padding: 12px;

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
    display: ${(props) => (props.display === "grid" ? "grid" : "flex")};
    justify-content: space-between;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
`;
