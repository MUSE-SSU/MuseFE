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
} from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { HomeContainer } from "./style";

function Home() {
    return (
        <HomeContainer>
            <GlobalNavbar />
            <GlobalBanner name="main" />
            <GlobalPostButton />
            <WeeklyColorContainer />
            <PreviewContainer name="reference" />
            <PreviewContainer name="contest" />
        </HomeContainer>
    );
}

export default Home;
