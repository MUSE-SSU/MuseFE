import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actionType from "../../../constants/actionTypes";
import { Layer, Box, Toast, Text, IconButton, Button } from "gestalt";
import { Container, IconContainer } from "./style";
function GlobalToast() {
    const history = useHistory();
    const dispatch = useDispatch();
    const isFirst = useSelector((state) => state.authReducer.isFirst);
    const getUserNickname = useSelector((state) => state.userInfo.nickname);
    const [show, setShow] = useState(true);

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
        </>
    );
}

export default GlobalToast;
