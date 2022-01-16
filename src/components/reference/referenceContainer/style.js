import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { Dropdown as GDropdown } from "gestalt";
import { BiHeart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { Modal } from "react-bootstrap";
import { motion } from "framer";

export const MainContainer = styled.div`
    padding: 0 72px 36px 72px;
    @media (max-width: 320px) {
        padding: 10px;
    }
`;
export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin: 12px 0 12px 0;
`;
export const GridContainer = styled.div``;
export const ListItem = styled.div``;
export const CustomDropdown = styled(Dropdown)`
    position: relative;
    margin: 12px 0 12px 0;
    .btn {
        border-radius: 24px;
    }
    .btn-primary {
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
    }
    .btn-success {
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
    }
    .btn-success:hover {
        background-color: var(--g-color-blue);
    }
    #dropdown-menu-align-end {
        width: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        color: var(--g-olor-blue);
    }
    .dropdown-menu {
        min-width: auto;
        background-color: white;
    }
    .dropdown-item {
        display: flex;
        justify-content: center;
        font-weight: 600;
        &:hover {
            background-color: var(--g-color-blue);
        }
    }

    .btn-check:focus + &,
    &:focus {
        background-color: transparent;
        box-shadow: none;
    }
    .btn-check:focus + .btn-primary,
    .btn-primary:focus {
        box-shadow: none;
    }
    .btn-check:checked + .btn-primary:focus,
    .btn-check:active + .btn-primary:focus,
    .btn-primary:active:focus,
    .btn-primary.active:focus,
    .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: none;
    }
`;

export const GestaltDropdown = styled(GDropdown)`
    position: relative;
    z-index: 1000;
`;

export const CardContainer = styled(motion.div)`
    width: 300px;
    max-height: 600px;
    cursor: pointer;
    margin: 0;
    @media (max-width: 320px) {
        width: 300px;
        max-height: 600px;
    }
`;
export const FourSquareCardContainer = styled(motion.div)`
    width: 300px;
    height: 280px;
    cursor: pointer;
    margin: 0;
    @media (max-width: 320px) {
        width: 300px;
        height: 280px;
    }
`;

export const ImageContainerDiv = styled.div`
    width: 300px;
    max-height: 600px;
    border-radius: 16px;
    overflow: hidden;
`;

export const ImageContainer = styled(motion.img)`
    width: 100%;
    max-height: 600px;
    vertical-align: top;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
`;

export const InfoContainer = styled.figcaption`
    width: 100%;
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

export const CustomModal = styled(Modal)`
    .modal-dialog {
        display: flex;
        justify-content: center;
    }
    .modal-content {
        width: 80vw;
        height: 90vh;
    }
    .modal-header {
    }
    .modal-body {
        width: 80vw;
        height: 90vh;
    }
    .modal-footer {
        width: 80vw;
        height: 100%;
    }
`;

export const FullImageContainer = styled.img`
    width: 600px;
    height: 600px;
`;

export const BlackContainer = styled.div`
    background-color: black;
    position: absolute;
    width: 754px;
    height: 784px;
    top: 0px;
    left: 0px;
    z-index: -2;
`;

export const WriterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Avatar = styled.img`
    width: 18px;
    height: 18px;
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
`;

export const ModalImageContainer = styled.div`
    width: 60%;
    height: 720px;
    display: flex;
    justify-content: center;
    margin-right: 32px;
`;
export const ModalImage = styled.img`
    object-fit: scale-down;
    height: 100%;
`;

export const ModalInfoContainer = styled.div`
    display: flex;
    width: 30%;

    flex-direction: row;
`;

export const Writer = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 600;
`;

export const ModalAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const ModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const ModalContent = styled.div`
    width: 60%;
    min-height: 200px;
    background-color: white;
    padding: 25px;
`;
