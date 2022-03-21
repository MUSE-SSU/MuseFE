import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    MainContainer,
    TosSection,
    HeaderText,
    ContentText,
    TosTitle,
    TosDetail,
    TitleContainer,
} from "./style";
import { getPrivacy, getTos, getGuide, getPolicy } from "../../../api";
import { Spinner, IconButton } from "gestalt";

function TosContainer() {
    const [tos, setTos] = useState();
    const [privacy, setPrivacy] = useState();
    const [policy, setPolicy] = useState();
    const [guide, setGuide] = useState();
    // show button 관련
    const [showSpinner, setShowSpinner] = useState(false);
    const [showTos, setShowTos] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);
    const [showGuide, setShowGuide] = useState(false);

    useEffect(() => {
        setShowSpinner(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

        const loadPrivacy = async () => {
            const privacyData = await getPrivacy();
            setPrivacy(privacyData);
        };
        const loadTos = async () => {
            const tosData = await getTos();
            setTos(tosData);
        };
        const loadGuide = async () => {
            const guideData = await getGuide();
            setGuide(guideData);
        };
        const loadPolicy = async () => {
            const policyData = await getPolicy();
            setPolicy(policyData);
        };
        loadTos();
        loadPrivacy();
        loadGuide();
        loadPolicy();
        setShowSpinner(false);
    }, []);
    return (
        <MainContainer>
            <TosSection>
                <Spinner show={showSpinner} />
                {showSpinner === false && (
                    <>
                        <TitleContainer>
                            <HeaderText>이용약관</HeaderText>
                            {showTos === false ? (
                                <IconButton
                                    icon="arrow-down"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowTos(!showTos);
                                    }}
                                />
                            ) : (
                                <IconButton
                                    icon="arrow-up"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowTos(!showTos);
                                    }}
                                />
                            )}
                        </TitleContainer>

                        {tos !== undefined && showTos === true ? (
                            tos.map((idx) => (
                                <TosDetail>
                                    <TosTitle>{idx.title}</TosTitle>
                                    <ContentText>{idx.content}</ContentText>
                                </TosDetail>
                            ))
                        ) : (
                            <></>
                        )}

                        <TitleContainer>
                            <HeaderText>개인정보 처리방침</HeaderText>
                            {showPrivacy === false ? (
                                <IconButton
                                    icon="arrow-down"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowPrivacy(!showPrivacy);
                                    }}
                                />
                            ) : (
                                <IconButton
                                    icon="arrow-up"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowPrivacy(!showPrivacy);
                                    }}
                                />
                            )}
                        </TitleContainer>
                        {privacy !== undefined && showPrivacy === true ? (
                            privacy?.map((idx) => (
                                <TosDetail>
                                    <TosTitle>{idx.title}</TosTitle>
                                    <ContentText>{idx.content}</ContentText>
                                </TosDetail>
                            ))
                        ) : (
                            <></>
                        )}

                        <TitleContainer>
                            <HeaderText>MUSE 정책</HeaderText>
                            {showPolicy === false ? (
                                <IconButton
                                    icon="arrow-down"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowPolicy(!showPolicy);
                                    }}
                                />
                            ) : (
                                <IconButton
                                    icon="arrow-up"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowPolicy(!showPolicy);
                                    }}
                                />
                            )}
                        </TitleContainer>
                        {policy !== undefined && showPolicy === true ? (
                            policy.map((idx) => (
                                <TosDetail>
                                    <TosTitle>{idx.title}</TosTitle>
                                    <ContentText>{idx.content}</ContentText>
                                </TosDetail>
                            ))
                        ) : (
                            <></>
                        )}
                        <TitleContainer>
                            <HeaderText>MUSE 이용안내</HeaderText>
                            {showGuide === false ? (
                                <IconButton
                                    icon="arrow-down"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowGuide(!showGuide);
                                    }}
                                />
                            ) : (
                                <IconButton
                                    icon="arrow-up"
                                    iconColor="darkGray"
                                    onClick={() => {
                                        setShowGuide(!showGuide);
                                    }}
                                />
                            )}
                        </TitleContainer>
                        {guide !== undefined && showGuide === true ? (
                            guide.map((idx) => (
                                <TosDetail>
                                    <TosTitle>{idx.title}</TosTitle>
                                    <ContentText>{idx.content}</ContentText>
                                </TosDetail>
                            ))
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </TosSection>
        </MainContainer>
    );
}

export default TosContainer;
