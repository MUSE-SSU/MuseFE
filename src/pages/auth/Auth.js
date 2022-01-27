import React, { useEffect } from "react";

function Auth() {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
    const MUSE_DOMAIN = process.env.REACT_APP_MUSE_DOMAIN;
    const redirectUri = `${MUSE_DOMAIN}/redirect-login`;

    useEffect(() => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${redirectUri}&response_type=code&prompt=login`;
    });

    return <></>;
}

export default Auth;
