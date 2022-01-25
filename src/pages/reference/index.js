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
        <div>
            <GlobalNavbar />
            <GlobalBanner />
            <ReferenceContainer name="reference" />
            <GlobalPostButton />
            <GlobalInfoButton />
        </div>
    );
}

export default Archives;
