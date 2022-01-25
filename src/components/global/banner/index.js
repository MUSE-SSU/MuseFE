import React, { useState, useEffect } from "react";
import {
    Banner,
    Label,
    Highlight,
    Paragraph,
    Span,
    PostButtonContainer,
    LargeBanner,
} from "./style";
import { ContestPostButton } from "../../../components";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

function GlobalBanner(props) {
    const [bannerTitle, setBannerTitle] = useState();
    const [bannerContent, setBannerContent] = useState();

    const getBanner = () => {
        return fetch(`${API_DOMAIN}/banner/?type=${props.name}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBannerTitle(data.title);
                setBannerContent(data.content);
            });
    };

    useEffect(() => {
        getBanner();
    }, []);

    return (
        <div>
            {props.name === "muse" ? (
                <LargeBanner>
                    <Label>
                        New <Highlight>MUSE</Highlight> <br />
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
                    <Label>
                        Who's your <Highlight>MUSE?</Highlight>
                    </Label>
                    <Paragraph>
                        영감을 나누는 공간 <Span>MUSE</Span>
                    </Paragraph>
                    {props.name === "contest" && (
                        <PostButtonContainer>
                            <ContestPostButton />
                        </PostButtonContainer>
                    )}
                </Banner>
            )}
        </div>
    );
}

export default GlobalBanner;
