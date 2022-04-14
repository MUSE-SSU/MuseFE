import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { motion } from "framer";
import { Modal } from "gestalt";
import "./style.css";

export const REACTFRAGMENT = styled(motion.div)``;
export const CardContainer = styled(motion.div)`
    width: 300px;
    max-height: 600px;

    background-color: ${(props) => props.color};
    cursor: pointer;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ImageContainer = styled.div`
    width: ${(props) => (props.isMuse === true ? "50%" : `${props.size}px`)};
    max-height: ${(props) => (props.isMuse === true ? "" : `600px`)};
    border-radius: 16px;
    overflow: hidden;
`;

export const CardContainerRect = styled(CardContainer)`
    width: 300px;
    height: 300px;
    z-index: 3;
    @media (max-width: 320px) {
        width: 72px;
        height: 112px;
        border-radius: 6px;
    }
    @media (max-width: 375px) and (min-width: 321px) {
        border-radius: 8px;
        width: 86px;
        height: 126px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        border-radius: 8px;
        width: 98px;
        height: 138px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        border-radius: 12px;
        width: 178px;
        height: 218px;
    }
    @media (max-width: 1024px) and (min-width: 769px) {
        width: 228px;
        height: 268px;
    }
    @media (min-width: 1440px) {
        width: 316px;
        height: 356px;
    }
`;

export const ImageContainerRect = styled(motion.div)`
    width: 300px;
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    @media (max-width: 320px) {
        width: 72px;
        height: 112px;
        border-radius: 6px;
    }
    @media (max-width: 375px) and (min-width: 321px) {
        border-radius: 8px;
        width: 86px;
        height: 126px;
    }
    @media (max-width: 425px) and (min-width: 376px) {
        border-radius: 8px;
        width: 98px;
        height: 138px;
    }
    @media (max-width: 768px) and (min-width: 426px) {
        border-radius: 12px;
        width: 178px;
        height: 218px;
    }
    @media (max-width: 1024px) and (min-width: 769px) {
        width: 228px;
        height: 268px;
    }
    @media (min-width: 1440px) {
        width: 316px;
        height: 356px;
    }
`;

export const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    vertical-align: top;
    justify-content: center;
    overflow: hidden;
    object-fit: fill;
    cursor: pointer;
    position: relative;
    -webkit-user-drag: none;
`;

export const InfoContainer = styled.figcaption`
    width: 94%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const PostStatusContainerRect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) and (min-width: 426px) {
        display: none;
    }
`;

export const PostWriter = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
`;

export const EyeIcon = styled(FiEye)`
    font-size: 14px;
    margin: 0 2px 0 2px;
`;
export const LikesIcon = styled(BiHeart)`
    font-size: 14px;
    margin: 0 2px 0 2px;
`;

export const FullImageContainer = styled.img`
    width: 600px;
    height: 600px;
`;

export const WriterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    @media (max-width: 425px) {
        display: none;
    }
`;

export const Avatar = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 8px;
`;

export const CustomSpan = styled.span`
    font-size: 14px;
    display: flex;
`;

//Modal Styling

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-height: 100vh;
    overflow-y: auto;
`;

export const ModalHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ModalWriterInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 48px 48px 48px;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    @media (max-width: 425px) {
        padding: 0 12px 0 12px;
    }
`;

export const CancelContainer = styled.div`
    margin-top: 12px;
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const ModalWriterInfoContainerMobile = styled(ModalWriterInfoContainer)`
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: space-between;
    padding: 12px 0 12px 0;
`;

export const ModalMainContainer = styled.div``;
export const ModalCommentContainer = styled.div`
    padding: 0 48px 0 48px;
    @media (max-width: 425px) {
        padding: 0 12px 0 12px;
    }
`;
export const ModalImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    background-color: black;
`;
export const ModalImage = styled.img`
    max-width: 100vw;
    overflow-x: hidden;
`;

export const Writer = styled.h1`
    font-size: var(--g-text-font-size-5);
    cursor: pointer;
    font-weight: 600;
    @media (max-width: 375px) {
        font-size: var(--g-text-font-size-4);
    }
`;

export const Title = styled.h1`
    text-overflow: ellipsis;
    font-size: var(--g-text-font-size-6);
    font-weight: 900;
    font-family: R-FLEX-BLACK, Helvetica;
    margin-bottom: 12px;
`;

export const Date = styled(Writer)`
    font-size: var(--g-text-font-size-3);
    font-weight: 400;
`;

export const ModalAvatar = styled.img`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 8px;
    @media (max-width: 375px) {
        width: 36px;
        height: 36px;
    }
`;

export const ReactModal = styled(Modal)`
    background-color: black;
    padding: 0;
`;

export const CommentWriter = styled.h1`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

export const Comment = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

export const OtherPostsImg = styled.img`
    border-radius: 12px;
    width: 300px;
    cursor: pointer;
    object-fit: contain;
`;

export const ListItem = styled.div``;

export const BadgePreview = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-1);
    color: white;
    background-color: ${(props) => `var(--g-color-badge${props.badge})`};
    padding: 2px 4px 2px 4px;
    border-radius: 16px;
    margin-left: 2px;
`;

export const BadgeDetail = styled(BadgePreview)`
    display: flex;
    height: 50%;
    padding: 2px 6px 2px 6px;
    align-items: center;
    margin-left: 4px;
`;

export const UnFollowButton = styled(motion.button)`
    width: 80px;
    max-width: 100px;
    height: 30px;
    background-color: #efefef;
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
export const ModalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 0 48px 0 48px;
    align-items: flex-start;
    max-width: 900px;
    @media (max-width: 425px) {
        padding: 0 12px 0 12px;
    }
`;

export const Content = styled.p`
    font-weight: 600;
    font-family: Helvetica;
    font-size: var(--g-text-font-size-4);
`;

export const Url = styled.a`
    font-weight: 900;
    font-family: Helvetica;
    font-size: var(--g-text-font-size-4);
    text-decoration: underline;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 50%;
    white-space: nowrap;
`;

export const Hashtag = styled.div`
    background-color: var(--g-color-gray100);
    border-radius: 16px;
    padding: 4px 12px 4px 12px;
    display: flex;
    margin: 12px 4px 12px 4px;
    cursor: pointer;
    height: 36px;
    width: 9vw;
    min-width: 98px;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: var(--g-color-gray150);
    }
`;

export const HashtagName = styled.h1`
    font-family: Helvetica;
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    //background-color: var(--g-colorGray100);
    background-color: ${(props) => `var(--g-color-${props.background})`};
    color: ${(props) => `${props.color}`};
    cursor: pointer;
    font-weight: 700;
`;

export const FollowText = styled.p`
    font-weight: 700;
    margin-right: ${(props) => `${props.isMargin}px`};
`;
export const ToastContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 244px;
`;
export const ToastMainContainer = styled(motion.div)``;
export const IconContainer = styled.div``;
