import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { motion } from "framer";
import { Modal } from "gestalt";
import "./style.css";
export const CardContainer = styled(motion.div)`
    width: 300px;
    z-index: -1;
    max-height: 600px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    margin: 0;
    @media (max-width: 320px) {
        width: 300px;
        max-height: 600px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ImageContainer = styled.div`
    width: 300px;
    max-height: 600px;
    border-radius: 16px;
    overflow: hidden;
`;

export const ImageContainerRect = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
`;

export const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    vertical-align: top;
    justify-content: center;
    overflow: hidden;
    object-fit: fill;
    position: relative;
`;

export const InfoContainer = styled.figcaption`
    width: 94%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const PostStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
`;

export const Avatar = styled.img`
    width: 24px;
    height: 24px;
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
    padding: 0 48px 0 48px;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;

export const ModalMainContainer = styled.div``;
export const ModalCommentContainer = styled.div`
    padding: 0 48px 0 48px;
`;
export const ModalImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    background-color: black;
`;
export const ModalImage = styled.img``;

export const Writer = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 600;
`;

export const Title = styled.h1`
    text-overflow: ellipsis;
    font-size: var(--g-text-font-size-6);
    font-weight: 900;
    font-family: R-FLEX-BLACK, Helvetica;
`;

export const Date = styled(Writer)`
    font-size: var(--g-text-font-size-3);
    font-weight: 400;
`;

export const ModalAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const ReactModal = styled(Modal)`
    background-color: black;
    padding: 0;
`;

export const CommentWriter = styled.h1`
    font-size: 14px;
    font-weight: 600;
`;

export const Comment = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

export const OtherPostsImg = styled.img`
    border-radius: 12px;
    width: 260px;
    cursor: pointer;
    object-fit: contain;
`;

export const LoadingBack = styled.div`
    background-color: transparent;
`;

export const ListItem = styled.div``;

export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin: 12px 0 12px 0;
`;

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

export const FollowButton = styled(motion.button)`
    width: 80px;
    max-width: 100px;
    height: 30px;
    background-color: var(--g-color-blue);
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
    padding-left: 48px;
    align-items: flex-start;
`;

export const Content = styled.p`
    font-weight: 400;
    font-family: Helvetica;
    font-size: var(--g-text-font-size-5);
`;

export const Url = styled.a`
    font-weight: 900;
    font-family: Helvetica;
    font-size: var(--g-text-font-size-4);
    text-decoration: underline;
`;
