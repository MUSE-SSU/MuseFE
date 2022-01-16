import React, { useEffect } from "react";
import { GlobalNavbar, GlobalBanner, ContestContainer } from "../../components";
function Contest() {
    return (
        <div>
            <GlobalNavbar />
            <GlobalBanner name="contest" />
            <ContestContainer name="cur-contest" />
        </div>
    );
}

export default Contest;
