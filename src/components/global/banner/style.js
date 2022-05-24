import styled from "styled-components";
import { motion } from "framer";

export const Banner = styled.div`
    max-width: 1440px;
    height: 36vh;
    background-color: white;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
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

export const BannerInfoContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    z-index: 300;
`;

export const BannerImg = styled(motion.img)`
    position: absolute;
    top: 50%;

    margin-top: -978px;
`;
export const BannerImgContainer = styled(motion.div)`
    position: absolute;
`;

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
export const Label = styled(motion.h1)`
    text-align: center;
    color: ${(props) => `var(--g-color-${props.color})`};
    font-family: R-FLEX-BLACK;
    font-size: 3em;
`;
export const Paragraph = styled(motion.h2)`
    margin-top: 24px;
    color: ${(props) => `var(--g-color-${props.color})`};
    font-family: Noto-Sans-KR-Black;
    font-weight: 900;
    font-size: 1.2em;
`;
export const Highlight = styled(motion.span)`
    color: ${(props) => `var(--g-color-${props.color})`};
    font-family: R-FLEX-BLACK;
`;

export const Span = styled.span`
    color: ${(props) => `var(--g-color-${props.color})`};
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

export const OverlayContainer = styled.div`
    background: rgba(0, 0, 0, 0.55);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
`;
