import styled from "styled-components";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { motion } from "framer";
export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    max-width: 1440px;
    justify-content: center;
    flex-direction: column;
`;
export const MyPageContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 92vw;
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
    font-weight: 900;
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

export const FollowButton = styled(motion.button)`
    background-color: var(--g-color-blue);
    border: none;
    border-radius: 36px;
    color: var(--g-color-white);
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    padding: 0 16px 0 16px;
    line-height: 36px;
    &:hover {
        opacity: 0.8;
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

export const DisplayOrderButton = styled(FollowButton)`
    margin: 0 3px 24px 3px;
    padding: 12px 100px 12px 100px;
    width: 360px;
    border-radius: 0px;
    background-color: var(--g-color-gray100);
    color: black;
    @media (max-width: 724px) {
        width: 320px;
    }
    @media (max-width: 386px) {
        width: 300px;
    }
`;

export const DisplayOrderButton2 = styled(FollowButton)`
    margin: 0 3px 24px 3px;
    padding: 12px 100px 12px 100px;
    background-color: transparent;
    border-radius: 0px;
    width: 360px;
    background-color: var(--g-color-gray100);
    color: black;
    @media (max-width: 724px) {
        width: 320px;
    }
    @media (max-width: 386px) {
        width: 300px;
    }
`;

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
    font-weight: 600;
    font-size: var(--g-text-font-size-5);
    margin-bottom: 12px;
`;

export const Pre = styled.pre`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    padding: 24px 12px 24px 12px;
`;

export const FollowedButton = styled(FollowButton)`
    background-color: var(--g-color-gray100);
    color: black;
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
`;
