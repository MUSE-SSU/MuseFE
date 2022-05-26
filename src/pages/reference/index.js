import React, { useEffect } from "react";
import {
    GlobalNavbar,
    GlobalBanner,
    GlobalPostButton,
    ReferenceContainer,
    GlobalInfoButton,
} from "../../components";
function Archives() {
    return (
        <>
            <GlobalNavbar />
            <ReferenceContainer type="reference" />
            <GlobalPostButton />
            <GlobalInfoButton />
        </>
    );
}

export default Archives;
