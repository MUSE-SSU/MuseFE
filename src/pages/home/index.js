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
} from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { HomeContainer, HomeInfoContainer } from "./style";

function Home() {
    return (
        <HomeContainer>
            <HomeInfoContainer>
                <GlobalNavbar />
                <GlobalBanner name="main" />
                <GlobalPostButton />
                <GlobalInfoButton />
                <WeeklyColorContainer />
                <PreviewContainer name="reference" />
                <PreviewContainer name="contest" />
            </HomeInfoContainer>
        </HomeContainer>
    );
}

export default Home;
