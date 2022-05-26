import React, { useEffect } from "react";
import {
    GlobalNavbar,
    GlobalBanner,
    ContestContainer,
    GlobalInfoButton,
} from "../../components";
function Contest() {
    return (
        <div>
            <GlobalNavbar />
            <GlobalBanner name="contest" />
            <ContestContainer type="cur-contest" />
            <GlobalInfoButton name="cur-contest" />
        </div>
    );
}

export default Contest;
