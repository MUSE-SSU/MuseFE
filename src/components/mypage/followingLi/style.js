import styled from "styled-components";
import { motion } from "framer";

export const FollowButton = styled(motion.button)`
    background-color: var(--g-color-blue);
    border: none;
    border-radius: 20px;
    color: var(--g-color-white);
    font-family: "Helvetica";
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    text-align: center;
    margin: 0;
    padding: 2px 12px 2px 12px;
    line-height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.8;
    }
`;

export const UnFollowButton = styled(motion.button)`
    width: 120px;
    max-width: 100px;
    height: 30px;
    background-color: var(--g-color-gray200);
    border: none;
    border-radius: 20px;
    color: var(--g-color-white);
    font-family: "Helvetica";
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.8;
    }
`;

export const FollowingModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0 6px 0;
    width: 100%;
`;

export const FollowingInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const FollowingNickname = styled.h1`
    font-family: Helvetica;
    font-weight: 900;
    font-size: 20px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 8px;
    width: 48px;
    height: 48px;
    object-fit: fill;
`;
