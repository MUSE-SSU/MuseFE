import React, { useState, useCallback, useEffect, useRef } from "react";
import { GlobalNavbar, GlobalBanner } from "../../components";
import {
    MusePage,
    ImageData,
    ImageListContainer,
    InfoContainer,
    ImageListContainerAlign,
    Paragraph,
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
    const constraintsRef = useRef(null);
    console.log(datas?.length);
    return (
        <>
            <MusePage ref={constraintsRef}>
                <GlobalNavbar />
                <InfoContainer>
                    Here's our MUSE
                    <Paragraph>당신의 뮤즈를 찾아보세요!</Paragraph>
                </InfoContainer>
                <ImageListContainer drag="x" dragConstraints={constraintsRef}>
                    {datas !== null &&
                        datas.map((data) => (
                            <Card
                                currentMusePage
                                isDrag
                                ref={constraintsRef}
                                thumb={data.post.thumb_img}
                                image={data.post.image}
                                idx={data.post.idx}
                                week={data.post.week}
                                rect="rect"
                                statusBarVisible={false}
                                title={data.post.title}
                                liked={data.post.liked}
                                avatar={data.post.writer_avatar}
                                writer={data.post.writer}
                                views={data.post.views}
                                likes={data.post.likes}
                                badge={data.post.badge}
                            />
                        ))}
                </ImageListContainer>
            </MusePage>
        </>
    );
}

export default Muse;
