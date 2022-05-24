import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer";

export const HomeContainer = styled.div`
    width: 100vw;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    background-color: #fcfcff;
`;

export const HomeInfoContainer = styled.div`
    background-color: white;
    width: 100%;
    min-height: 180vh;
    overflow: hidden;
`;
