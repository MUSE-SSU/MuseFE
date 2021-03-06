import styled from "styled-components";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { motion } from "framer";
export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    max-width: 1440px;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;

export const FollowButton = styled(motion.button)`
    border-radius: 24px;
    min-width: 60px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:focus {
        border: none;
    }
    &:active {
        background-color: var(--g-colorGray100Active);
    }
    &:hover {
        //background-color: var(--g-colorRed100Hovered);
        background-color: ${(props) => `var(--g-color${props.hovered})`};
    }
    transition: transform 85ms ease-out;
    margin-bottom: 8px;
    min-height: 40px;
    padding: 8px 12px 8px 12px;
    background-color: ${(props) => `var(--g-color-${props.background})`};
    color: ${(props) => `${props.color}`};
    cursor: pointer;
    font-weight: 700;
`;
export const FollowText = styled.p`
    font-weight: 700;
    margin-right: ${(props) => `${props.isMargin}px`};
`;

export const MyPageContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
export const Avatar = styled.img`
    width: 144px;
    height: 144px;
    border-radius: 50%;
`;

export const OwnerInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const OwnerNicknameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 12px;
`;

export const OwnerNickname = styled.h1`
    font-weight: 600;
    font-size: var(--g-text-font-size-6);
    display: inline;
`;

export const OwnerFollower = styled(motion.p)`
    font-weight: 600;
    font-size: var(--g-text-font-size-4);
    text-align: center;
`;

export const FollowCountContainer = styled(motion.div)`
    background-color: var(--g-color-gray100);
    padding: 6px 18px 6px 18px;
    margin: 0px 6px 0px 6px;
    display: flex;

    justify-content: center;
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
        background-color: var(--g-color-blue);
        color: var(--g-color-white);
    }
`;

export const FollowButtonContainer = styled.div`
    margin: 0 4px 0 4px;
`;
export const OrderButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 724px) {
        flex-direction: column;
    }
`;

export const DisplayOrderButton = styled.div`
    margin: 0 3px 24px 3px;
    padding: 12px 100px 12px 100px;
    display: flex;
    justify-content: center;
    width: 360px;
    border-radius: 0px;
    background-color: var(--g-color-gray100);
    color: black;
    &:hover {
        background-color: var(--g-color-gray150);
    }
    @media (max-width: 724px) {
        width: 320px;
    }
    @media (max-width: 386px) {
        width: 300px;
    }
`;

export const DisplayOrderButton2 = styled(DisplayOrderButton)``;

export const FollowContainer = styled.div`
    display: flex !important;
    flex-direction: row;
    align-items: center;
`;

export const ProfileUpdateButton = styled(FollowButton)`
    background-color: var(--g-color-gray100);
    color: black;
    border: none;
    border-radius: 36px;
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    text-align: center;
    margin: 0 0 0 12px;
    padding: 8px 16px 8px 16px;
    line-height: 33px;
    &:hover {
        opacity: 0.8;
    }
`;

export const UpdateIcon = styled(HiOutlinePencilAlt)`
    font-size: 24px;
    margin-left: 6px;
    cursor: pointer;
    &:hover {
        color: var(--g-color-blue);
    }
`;

export const GridContainer = styled.div``;

export const ListItem = styled.div``;

export const MyPostContainer = styled.div`
    margin: 36px 80px 36px 80px;
    @media (max-width: 425px) {
        margin: 24px 6px 24px 6px;
    }
`;
export const ButtonH1 = styled.h1`
    font-weight: 900;
    font-size: 1em;
`;

export const Introduce = styled.h2`
    font-family: Helvetica;
    font-weight: 500;
    font-size: var(--g-text-font-size-4);
    margin-bottom: 12px;
    height: auto;
    word-break: break-word;
`;

export const IntroduceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60vw;
    padding: 24px 12px 24px 12px;
    flex-direction: column;
    @media (max-width: 1023px) {
        width: 80vw;
    }
`;

export const PostContainer = styled.div``;

export const Badge = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-1);
    color: white;
    background-color: ${(props) => `var(--g-color-badge${props.badge})`};
    padding: 2px 4px 2px 4px;
    border-radius: 16px;
    margin-left: 4px;
`;

export const InstagramID = styled.p`
    cursor: pointer;
    font-family: Helvetica;
    font-size: var(--g-text-font-size-3);
    font-weight: 600;
`;
