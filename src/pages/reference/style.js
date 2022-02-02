import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer";
export const PostButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    margin: 0;
    border: none;
    padding: 0;
    border: none;
    left: 93%;
    top: 78%;
    border-radius: 50%;
    background-color: var(--g-color-blue);
    cursor: pointer;
`;

export const PlusButton = styled(FiPlus)`
    width: 36px;
    height: 36px;
    margin: 0;
    color: var(--g-color-white);
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    stroke-width: 3;
`;

export const QaButton = styled(BsFillQuestionCircleFill)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    margin: 0;
    border: none;
    padding: 0;
    border: none;
    cursor: pointer;
    left: 93%;
    top: 86%;
    border-radius: 50%;
    background-color: var(--g-color-white);
    color: var(--g-color-blue);
`;
export const CustomModal = styled(Modal)`
    overflow: visible;
`;

export const CustomInput = styled.input`
    background-color: var(--g-color-gray100);
    padding: 16px;
    border: none;
    width: 80%;
    height: 36px;
    border-radius: 24px;
    margin: 12px;
`;

export const CustomInputFile = styled.input`
    padding: 0px;
    width: 80%;
`;

export const CustomButton = styled.button`
    border: none;
    color: white;
    padding: 4px 16px 4px 16px;
    background-color: var(--g-color-blue);
    border-radius: 16px;
    &:hover {
        opacity: 0.7;
    }
`;

export const CustomForm = styled.form`
    display: flex;
`;

export const ImageContainer = styled.div``;

export const ImgPreview = styled.img`
    max-width: 50%;
    width: 100%;
    border-radius: 16px;
`;

export const CustomTextarea = styled.textarea`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    width: 80%;
    border: none;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
    padding: 16px;
`;

export const Pre = styled.pre`
    display: flex;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    justify-content: flex-start;
`;

export const MainContainer = styled.div``;
