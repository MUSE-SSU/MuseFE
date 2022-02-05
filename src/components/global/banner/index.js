import React, { useState, useEffect } from "react";
import {
    Banner,
    Label,
    Highlight,
    Paragraph,
    Span,
    PostButtonContainer,
    LargeBanner,
    Container,
    BannerImg,
    BannerInfoContainer,
    BannerImgContainer,
    OverlayContainer,
} from "./style";
import { useAnimation } from "framer";
import { ContestPostButton } from "../../../components";
import { Overlay } from "react-bootstrap";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

function GlobalBanner(props) {
    const animation = useAnimation();
    const animation2 = useAnimation();
    const [bannerTitle, setBannerTitle] = useState();
    const [bannerContent, setBannerContent] = useState();

    async function sequence() {
        await animation.start({
            opacity: 0,
            transition: { duration: 0.3 },
        });
        await animation2.start({
            opacity: 0,
            transition: { duration: 0.3 },
        });
        await animation.start({
            opacity: 1,
        });
        await animation2.start({
            opacity: 1,
        });
    }

    return (
        <Container>
            {props.name === "muse" ? (
                <LargeBanner>
                    <Label color="black">
                        New <Highlight color="blue">MUSE</Highlight> <br />
                        Comming...
                    </Label>
                    {props.name === "contest" && (
                        <PostButtonContainer>
                            <ContestPostButton />
                        </PostButtonContainer>
                    )}
                </LargeBanner>
            ) : (
                <Banner>
                    <BannerInfoContainer animate={sequence}>
                        <Label
                            color="white"
                            animate={animation}
                            initial={{ opacity: 0 }}
                        >
                            Who's your <Highlight color="white">MUSE</Highlight>
                        </Label>
                        <Paragraph
                            animate={animation2}
                            initial={{ opacity: 0 }}
                        >
                            영감을 나누는 공간 <Span>MUSE</Span>
                        </Paragraph>
                        {props.name === "contest" && (
                            <PostButtonContainer>
                                <ContestPostButton />
                            </PostButtonContainer>
                        )}
                    </BannerInfoContainer>

                    <BannerImgContainer>
                        <BannerImg
                            initial={{ scale: 1.3 }}
                            animate={{ rotate: 720 }}
                            transition={{ duration: 200 }}
                            src={"/fixed.png"}
                        />
                    </BannerImgContainer>
                    <OverlayContainer />
                </Banner>
            )}
        </Container>
    );
}

export default GlobalBanner;
