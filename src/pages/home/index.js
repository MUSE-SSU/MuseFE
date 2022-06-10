import React, { useState, useEffect } from "react";
import {
    Navbar,
    GlobalBanner,
    GlobalPostButton,
    Container,
    PostButton,
    PreviewContainer,
    WeeklyColorContainer,
    GlobalNavbar,
    GlobalInfoButton,
    GlobalToast,
} from "../../components";
import { useMediaQuery as MediaQuery } from "react-responsive";
import { HomeContainer, HomeInfoContainer } from "./style";

function Home() {
    const isDesktop = MediaQuery({
        query: "(min-width: 1024px) and (max-width: 2560px)",
    });
    return (
        <HomeContainer>
            <HomeInfoContainer>
                <GlobalNavbar />
                <GlobalBanner name="main" />
                <GlobalPostButton />
                <GlobalInfoButton />
                <WeeklyColorContainer isDesktop={isDesktop} />
                <PreviewContainer name="reference" />
                <PreviewContainer name="contest" />
                <GlobalToast />
            </HomeInfoContainer>
        </HomeContainer>
    );
}

export default Home;
