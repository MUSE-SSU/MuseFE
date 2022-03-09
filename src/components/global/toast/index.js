import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actionType from "../../../constants/actionTypes";
import {
    Layer,
    Box,
    Toast,
    Text,
    IconButton,
    Button,
    CompositeZIndex,
    FixedZIndex,
} from "gestalt";
import {
    Container,
    IconContainer,
    ToastMainContainer,
    ToastContainer,
} from "./style";
function GlobalToast(props) {
    const history = useHistory();
    const TOAST_ZINDEX = new FixedZIndex(999);
    const toastZIndex = new CompositeZIndex([TOAST_ZINDEX]);
    const dispatch = useDispatch();
    const isFirst = useSelector((state) => state.authReducer.isFirst);
    const getUserNickname = useSelector((state) => state.userInfo.nickname);
    const [show, setShow] = useState(true);
    useEffect(() => {
        console.log(props.type);
    });
    const handleRoute = () => {
        history.push(`/my-page/${getUserNickname}`);
        dispatch({ type: actionType.CHECK_IS_FIRST });
    };

    const handleClose = () => {
        setShow(false);
        dispatch({ type: actionType.CHECK_IS_FIRST });
    };
    return (
        <>
            {isFirst === true && show === true && (
                <Layer>
                    <Box
                        dangerouslySetInlineStyle={{
                            __style: {
                                bottom: 50,
                                left: "50%",
                                transform: "translateX(-50%)",
                            },
                        }}
                        fit
                        paddingX={1}
                        position="fixed"
                    >
                        <Toast
                            text={
                                <Container>
                                    <Text inline weight="bold">
                                        프로필을 완성시켜 보세요!
                                    </Text>
                                    <IconContainer>
                                        <IconButton
                                            size="sm"
                                            icon="arrow-up-right"
                                            onClick={handleRoute}
                                        />
                                    </IconContainer>
                                </Container>
                            }
                            button={
                                <IconButton
                                    size="sm"
                                    icon="cancel"
                                    iconColor="white"
                                    onClick={handleClose}
                                />
                            }
                        />
                    </Box>
                </Layer>
            )}
            {show === true && props.type === "isNotLogin" && (
                <Layer zIndex={toastZIndex}>
                    <Box
                        dangerouslySetInlineStyle={{
                            __style: {
                                bottom: 50,
                                left: "50%",
                                transform: "translateX(-50%)",
                            },
                        }}
                        fit
                        paddingX={1}
                        position="fixed"
                    >
                        <ToastMainContainer
                            initial={{
                                y: 300,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                        >
                            <Toast
                                text={
                                    <ToastContainer>
                                        <Text inline weight="bold">
                                            정말 삭제하실 건가요?
                                        </Text>
                                    </ToastContainer>
                                }
                                button={
                                    <IconContainer>
                                        <IconButton
                                            onClick={() => {
                                                console.log(props.type);
                                            }}
                                            size="sm"
                                            icon="trash-can"
                                            bgColor="darkGray"
                                        />
                                    </IconContainer>
                                }
                            />
                        </ToastMainContainer>
                    </Box>
                </Layer>
            )}
        </>
    );
}

export default GlobalToast;
