import styled from "styled-components";
import { motion } from "framer";

export const Banner = styled.div`
    max-width: 1440px;
    height: 360px;
    background-color: var(--g-color-blue-overlay);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100vw;
    align-items: center;
    font-size: 24px;
    flex-direction: row;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (max-width: 425px) {
        font-size: 12px;
    }
`;

export const BannerInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 4vw;
    width: 50%;
`;

export const BannerImg = styled(motion.img)`
    width: 110%;
    height: auto;
`;
export const BannerImgContainer = styled.div``;
export const LargeBanner = styled.div`
    height: 480px;
    width: 100vw;
    max-width: 1440px;
    height: 90vh;
    background-color: var(--g-color-blue-overlay);
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    font-size: 24px;
    flex-direction: column;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (max-width: 425px) {
        font-size: 12px;
    }
`;
export const Label = styled.h1`
    text-align: center;
    color: black;
    font-family: R-FLEX-BLACK;
    font-size: 3em;
`;
export const Paragraph = styled.h2`
    margin-top: 24px;
    color: black;
    font-family: Noto-Sans-KR-Black;
    font-weight: 900;
    font-size: 1.2em;
`;
export const Highlight = styled.span`
    color: var(--g-color-blue);
    font-family: R-FLEX-BLACK;
`;

export const Span = styled.span`
    color: black;
    font-family: R-FLEX-BLACK;
    font-weight: 900;
    font-size: 1.2em;
`;

export const PostButtonContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 72px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;
