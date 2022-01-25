import React, { useState } from "react";
import "gestalt/dist/gestalt.css";
import {
    Box,
    Button,
    Checkbox,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
} from "gestalt";
import { Link } from "react-router-dom";
import { RulesModal, Logo } from "../../../components";
import { motion } from "framer";
function LoginModal(props) {
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(998);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                size={300}
                accessibilityModalLabel="MUSE 이용약관"
                onDismiss={onDismiss}
            >
                <Flex justifyContent="center" alignItems="center">
                    <Box paddingX={8} paddingY={8} overflow="hidden">
                        <Box marginBottom={8} marginTop={8}>
                            <Flex justifyContent="center">
                                <Box marginBottom={3}>
                                    <Logo />
                                </Box>
                            </Flex>
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                                gap="6"
                            >
                                <RulesModal />
                                <Link to="/auth">
                                    <Button
                                        size="lg"
                                        color="blue"
                                        text="로그인"
                                    />
                                </Link>
                            </Flex>
                            <Box marginTop={3}>
                                <Text
                                    size="sm"
                                    align="center"
                                    weight="normal"
                                    color="gray"
                                >
                                    {" "}
                                    1초 회원가입 후 이용 가능합니다
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Modal>
        );
    };

    return (
        <React.Fragment>
            <Button text="로그인" onClick={() => setShouldShow(true)} />
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default LoginModal;
