import React, { useEffect } from "react";

function Auth() {
    const { Kakao } = window;
    const MUSE_DOMAIN = process.env.REACT_APP_MUSE_DOMAIN;
    const redirectUri = `${MUSE_DOMAIN}/redirect-login`;
    const handleAuthorize = () => {
        Kakao.Auth.authorize({
            redirectUri: redirectUri,
        });
    };

    useEffect(() => {
        handleAuthorize();
    });

    return <></>;
}

export default Auth;
