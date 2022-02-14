import styled from "styled-components";
import { IconButton } from "gestalt";
export const MusePage = styled.div`
    overflow: hidden;
    width: 100vw;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 94vh;
`;

export const MuseNumber = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-7);
    color: black;
`;
export const InfoText = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-size: var(--g-text-font-size-5);
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
`;
export const MuseContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
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
