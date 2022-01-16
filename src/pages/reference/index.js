import React, { useEffect } from "react";
import {
    GlobalNavbar,
    GlobalBanner,
    GlobalPostButton,
    ReferenceContainer,
} from "../../components";
function Archives() {
    return (
        <div>
            <GlobalNavbar />
            <GlobalBanner />
            <ReferenceContainer name="reference" />
            <GlobalPostButton />
        </div>
    );
}

export default Archives;
