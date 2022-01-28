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

import "./style.css";
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

export const InputText = styled.input`
    background-color: var(--g-color-gray100);
    padding: 16px;
    border: none;
    width: 90%;
    height: 48px;
    border-radius: 24px;
    margin-bottom: 12px;
`;

export const InputFile = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`;

export const SubmitButton = styled.button`
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

export const InputForm = styled.form`
    display: flex;
    width: 100%;
`;

export const ImageContainer = styled.div``;

export const ImagePreview = styled.img`
    border-radius: 16px;
    object-fit: scale-down;
    width: 100%;
`;

export const ImagePreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 12px 10px 24px;
    width: 100%;
    max-width: 50%;
`;

export const ImagePreviewSkeleton = styled.label`
    display: flex;
    justify-content: center;
    margin: 10px 12px 10px 24px;
    height: 500px;
    align-items: center;
    max-width: 50%;
    width: 100%;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
`;

export const ImagePreviewSkeletonPlusIcon = styled(FiPlus)`
    stroke-width: 4;
    font-size: 24px;
`;

export const InputTextarea = styled.textarea`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    width: 90%;
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

export const InputPre = styled.pre`
    display: flex;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 50%;
    justify-content: space-between;
    margin: 10px 24px 10px 12px;
`;

export const InfoContainerSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const InfoContainerSection2 = styled.div``;

export const IconContainer = styled.div`
    margin: 24px;
    display: block;
    z-index: 100;
    position: fixed;
    right: 0;
    bottom: 0;
    @media (max-width: 425px) {
        margin: 24px 12px 24px 12px;
    }
`;

export const MobileImageContainer = styled.div``;

export const MobileImagePreview = styled.img`
    border-radius: 16px;
    object-fit: scale-down;
    width: 100%;
`;

export const MobileImagePreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 12px 4px 12px;
    width: 100%;
    max-width: 50%;
`;

export const MobileImagePreviewSkeleton = styled.label`
    display: flex;
    justify-content: center;
    margin: 4px 12px 4px 12px;
    height: 300px;
    align-items: center;
    max-width: 80%;
    width: 80%;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
`;

export const MobileImagePreviewSkeletonPlusIcon = styled(FiPlus)`
    stroke-width: 4;
    font-size: 24px;
`;
export const MobileInputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MobileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    padding: 12px;
`;

export const MobileHashtagContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const MobileInfoContainerSection1 = styled(InfoContainerSection1)`
    align-items: center;
`;

export const MobileInputPre = styled(InputPre)`
    align-items: center;
`;
export const ReactHashTags = styled(ReactTags)``;
