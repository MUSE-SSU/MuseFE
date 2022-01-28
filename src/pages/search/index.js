import React from "react";
import {
    GlobalNavbar,
    SearchContainer,
    GlobalPostButton,
    GlobalInfoButton,
} from "../../components";
import { MainContainer } from "./style";
function Search() {
    return (
        <MainContainer>
            <GlobalNavbar />
            <SearchContainer />
            <GlobalPostButton />
            <GlobalInfoButton />
        </MainContainer>
    );
}

export default Search;
