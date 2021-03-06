import styled from "styled-components";
import { motion } from "framer";
import { IconButton } from "gestalt";
export const MusePage = styled(motion.div)`
    overflow: hidden;
    width: 100vw;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120%;
    @media (max-width: 425px) {
        align-items: center;
    }
`;

export const InfoContainer = styled(motion.div)`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--g-text-font-size-7);
    font-family: R-FLEX-BLACK;
`;

export const Paragraph = styled(motion.h2)`
    margin-top: 12px;
    color: ${(props) => `var(--g-color-${props.color})`};
    font-family: Noto-Sans-KR-Black;
    font-weight: 900;
    font-size: 0.4em;
`;

export const ImageListContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    align-items: center;
    height: 60vh;
    background-color: transparent;
    z-index: 999;
`;

export const ImageData = styled.img`
    width: 500px;
    height: 500px;
`;

export const MuseNumber = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-7);
    @media (max-width: 425px) {
        font-size: var(--g-text-font-size-5);
    }
    color: black;
`;
export const InfoText = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-size: var(--g-text-font-size-5);
    @media (max-width: 425px) {
        font-size: var(--g-text-font-size-3);
    }
    font-weight: 900;
    cursor: ${(props) => props.cursor};
`;
export const MuseInfoContainer = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    margin-left: 12px;
    @media (max-width: 425px) {
        width: 54%;
        margin: 0;
    }
`;

export const MuseContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    justify-content: center;
    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const MainContainer = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    z-index: 999;
`;
