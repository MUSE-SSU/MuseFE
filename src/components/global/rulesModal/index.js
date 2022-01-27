import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { CheckboxContainer, BoldRouter } from "./style";

function RulesModal() {
    const [tosAgree, setTosAgree] = useState(false);
    const [privacyAgree, setPrivacyAgree] = useState(false);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                heading="약관동의"
                onDismiss={onDismiss}
                size="sm"
                footer={
                    <Flex alignItems="center" justifyContent="end">
                        <Box marginEnd={4}>
                            {tosAgree === true && privacyAgree === true ? (
                                <Link to="/register">
                                    <Button
                                        color="blue"
                                        text="다음으로 넘어가기"
                                    />
                                </Link>
                            ) : (
                                <Button
                                    disabled
                                    color="lightGray"
                                    text="다음으로 넘어가기"
                                />
                            )}
                        </Box>
                    </Flex>
                }
            >
                <Box margin={12}>
                    <CheckboxContainer>
                        <Checkbox
                            checked={tosAgree}
                            label="이용약관(필수)"
                            onClick={() => {
                                setTosAgree(!tosAgree);
                            }}
                        />
                        <BoldRouter
                            onClick={() => {
                                window.open("/info");
                            }}
                        >
                            [자세히 보기]
                        </BoldRouter>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <Checkbox
                            checked={privacyAgree}
                            label="개인정보 수집 및 이용 동의(필수)"
                            onClick={() => {
                                setPrivacyAgree(!privacyAgree);
                            }}
                        />
                        <BoldRouter
                            onClick={() => {
                                window.open("/info");
                            }}
                        >
                            [자세히 보기]
                        </BoldRouter>
                    </CheckboxContainer>
                </Box>
            </Modal>
        );
    };

    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(999);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    return (
        <React.Fragment>
            <Button
                size="lg"
                text="회원가입"
                onClick={() => setShouldShow(true)}
            />
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default RulesModal;
