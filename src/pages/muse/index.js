import React, { useState, useCallback, useEffect, useRef } from "react";
import { GlobalNavbar, GlobalBanner } from "../../components";
import {
    MusePage,
    ImageData,
    ImageListContainer,
    MainContainer,
    MuseNumber,
    MuseContainer,
    ImageContainer,
    MuseInfoContainer,
    ButtonContainer,
    InfoText,
    WeekContainer,
    ImageListContainerAlign,
} from "./style";
import { Card } from "../../components";
import { IconButton } from "gestalt";
import * as style from "./style";
import axios from "axios";
function Muse() {
    useEffect(() => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        axios.get(`${API_DOMAIN}/post/muse`).then((res) => {
            try {
                setDatas(res.data);
                console.log(res.data);
                console.log(res.data);
            } catch (e) {
                console.error(e);
            }
        });
    }, []);
    const [datas, setDatas] = useState(null);
    const [show, setShow] = useState(false);
    const constraintsRef = useRef(null);
    return (
        <>
            <MusePage>
                <GlobalNavbar />

                <ImageListContainer
                    drag="x"
                    dragConstraints={{
                        left: datas?.length * -100,
                        right: datas?.length * 100,
                    }}
                >
                    {datas !== null &&
                        datas.map((data) => (
                            <Card
                                currentMusePage
                                ref={constraintsRef}
                                image={data.post.thumbnail}
                                idx={data.post.idx}
                                week={data.post.week}
                                rect="rect"
                                statusBarVisible={false}
                            />
                        ))}
                </ImageListContainer>
                {/* <style.MusePage>
                <ButtonContainer left="6%">
                    <IconButton
                        icon="arrow-back"
                        onClick={() => {
                            if (datas !== null && current === 0) {
                                setCurrent(datas.length - 1);
                            } else {
                                setCurrent(current - 1);
                            }
                        }}
                    />
                </ButtonContainer>
                <MainContainer>
                    {datas !== null && (
                        <MuseContainer>
                            <Card
                                image={datas[current].post.image}
                                title={datas[current].post.title}
                                idx={datas[current].post.idx}
                                liked={datas[current].post.liked}
                                avatar={datas[current].post.writer_avatar}
                                writer={datas[current].post.writer}
                                views={datas[current].post.views}
                                likes={datas[current].post.likes}
                                badge={datas[current].post.badge}
                                isMuse={true}
                            />
                            <MuseInfoContainer>
                                <MuseNumber>WEEK{current + 1}</MuseNumber>
                                <InfoText>
                                    작가: {datas[current].post.writer}
                                </InfoText>
                                <InfoText
                                    onClick={() => {
                                        const redirectInstagram = datas[
                                            current
                                        ].profile.insta_id.split("@")[1];
                                        window.open(
                                            `https://www.instagram.com/${redirectInstagram}/`
                                        );
                                    }}
                                    cursor="pointer"
                                >
                                    인스타그램:
                                    {datas[current].profile.insta_id}
                                </InfoText>
                                <InfoText>
                                    소개:
                                    {datas[current].profile.self_introduce}
                                </InfoText>
                            </MuseInfoContainer>
                        </MuseContainer>
                    )}
                </MainContainer>
                <ButtonContainer right="6%">
                    <IconButton
                        icon="arrow-forward"
                        onClick={() => {
                            if (
                                datas !== null &&
                                current === datas.length - 1
                            ) {
                                setCurrent(0);
                            } else {
                                setCurrent(current + 1);
                            }
                        }}
                    />
                </ButtonContainer>
            </style.MusePage> */}
            </MusePage>
        </>
    );
}

export default Muse;
