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

function Tos(props) {
    useEffect(() => {
        console.log(props.title);
    }, []);
    return (
        <>
            <h1>{props.title}</h1>
            <h1>asd;fkj</h1>
        </>
    );
}
function RulesModal() {
    const isLogged = useSelector((state) => state.authReducer.authData);

    const [agree, setAgree] = useState(false);
    const [tosData, setTosData] = useState([]);

    const getTos = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(`${API_DOMAIN}/notice/?type=tos`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTosData(data);
                console.log(tosData);
            });
    };

    useEffect(() => {
        getTos();
    }, []);

    const onClickAgree = () => {
        setAgree(!agree);
        console.log(isLogged);
    };
    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                accessibilityModalLabel="MUSE 이용약관"
                heading="MUSE 이용약관"
                onDismiss={onDismiss}
                size="md"
                footer={
                    <Flex alignItems="center" justifyContent="end">
                        <Box marginEnd={4}>
                            {agree == true ? (
                                <Link to="/register">
                                    <Button
                                        color="blue"
                                        text="다음으로 넘어가기"
                                    />
                                </Link>
                            ) : (
                                <></>
                            )}
                        </Box>
                    </Flex>
                }
            >
                <Box margin={12}>
                    <Box marginBottom={8}>
                        {/* <Text>{title}</Text> */}
                        {tosData.map((tos) => (
                            <Tos title={tos.title} />
                        ))}
                        <button
                            onClick={() => {
                                console.log(tosData.title);
                            }}
                        >
                            dsakfjd
                        </button>
                    </Box>
                    <Checkbox
                        checked={agree}
                        id="secret"
                        label="동의합니다."
                        subtext="위 약관을 모두 확인하였으며 동의합니다."
                        name="languages"
                        onClick={onClickAgree}
                    />
                </Box>
            </Modal>
        );
    };

    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
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
