import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { motion } from "framer";
import { WithContext as ReactTags } from "react-tag-input";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
} from "gestalt";

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
    border-radius: 50%;
    background-color: var(--g-color-blue);
    margin-bottom: 12px;
    cursor: pointer;
    z-index: 100;
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
    border-radius: 50%;
    background-color: var(--g-color-white);
    color: var(--g-color-blue);
`;
export const CustomModal = styled(Modal)`
    overflow: visible;
    .modal-body {
    }
    .modal-content {
        border: none;
        border-radius: 16px;
    }
`;

export const CustomInput = styled.input`
    background-color: var(--g-color-gray100);
    padding: 16px;
    border: none;
    width: 100%;
    height: 48px;
    border-radius: 24px;
    margin-bottom: 12px;
`;

export const CustomInputFile = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`;

const FileButton = styled.button``;

export const CustomButton = styled.button`
    width: 84px;
    height: 36px;
    border: none;
    color: white;
    padding: 4px 16px 4px 16px;
    background-color: var(--g-color-blue);
    margin-top: 36px;
    border-radius: 40px;
    &:hover {
        opacity: 0.7;
    }
`;

export const CustomForm = styled.form`
    display: flex;
    width: 100%;
`;

export const ImageContainer = styled.div``;

export const ImgPreview = styled.img`
    border-radius: 16px;
    object-fit: scale-down;
    width: 100%;
`;

export const ImgPreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 24px 10px 24px;
    width: 100%;
    max-width: 50%;
`;

export const ImgPreviewSkeleton = styled.label`
    display: flex;

    justify-content: center;
    margin: 10px 24px 10px 24px;
    height: 500px;
    align-items: center;
    width: 100%;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
`;

export const ImgPreviewSkeletonPlusButton = styled(FiPlus)`
    stroke-width: 4;
    font-size: 24px;
`;

export const CustomTextarea = styled.textarea`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    width: 100%;
    border: none;
    height: 120px;
    margin: 12px 0 12px 0;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
    padding: 16px;
    &:focus {
        outline: none;
    }
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
    justify-content: space-between;
    margin: 10px 24px 10px 24px;
`;

export const InfoContainerSection1 = styled.div``;
export const InfoContainerSection2 = styled.div``;

export const IconContainer = styled.div`
    margin: 24px;
    display: block;
    z-index: 100;
    position: fixed;
    right: 0;
    bottom: 0;
`;

export const RadioInput = styled.input`
    width: auto;
    height: auto;
`;

export const RadioInputContainer = styled.div`
    padding: 16px;
    border: none;
    width: 80%;
    margin: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 12px;
`;

export const Hashtag = styled.h1`
    color: tomato;
`;

export const ReactHashTags = styled(ReactTags)``;
