import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../../actions/auth";
import { userInfo } from "../../actions/userInfo";
import { useHistory } from "react-router-dom";

function Success() {
    const authorizeCodeFromKakao = window.location.search.split("=")[1];
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(async () => {
        // 카카오 로그인 페이지 -> 로그인 -> 코드 발급 -> 코드 있으면 백엔드에 전송
        if (authorizeCodeFromKakao !== null) {
            console.log("authorizeCodeFromKakao TRUE");
            try {
                await dispatch(kakaoLogin(authorizeCodeFromKakao));
                // 서버에 전송 -> 받아와야됨(token) -> userInfo디스패치

                history.push("/");
            } catch (e) {
                console.error(e);
            }
        }
    }, []);
    return <></>;
}

export default Success;
