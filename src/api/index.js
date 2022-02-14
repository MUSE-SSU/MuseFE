import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import moment from "moment";
import { Box, Flex, Spinner } from "gestalt";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const KAKAO_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
const token = JSON.parse(localStorage.getItem("token"));
/*------------------------------------------------------------------------------------------------*/
// 로그인 및 회원가입
export const kakaoLogin = (authorizeCodeFromKakao) => {
    return fetch(`${API_DOMAIN}/account/`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            type: "login",
            code: authorizeCodeFromKakao,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            try {
                if (data.result === false) {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "회원가입 해주세요",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                return data;
            } catch (e) {
                console.error(e);
            }
        });
};

export const kakaoRegister = (authorizeCodeFromKakao) => {
    return fetch(`${API_DOMAIN}/account/`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            code: authorizeCodeFromKakao,
            type: "register",
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            try {
                if (data.result === false) {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "이미 회원가입 되어있습니다.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else if (data.result === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "회원가입이 완료되었습니다",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                return data;
            } catch (e) {
                console.error(e);
            }
        });
};

/*------------------------------------------------------------------------------------------------*/
// 유저 관련
export const getUserInfo = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/account/`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: token,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const updateUser = (formData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/account/update/`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => {
            useHistory.push(`/my-page/${data.nickname}`);
            return data;
        });
};

/*------------------------------------------------------------------------------------------------*/
// 포스트 관련
export const uploadPost = (data) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/post/`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: data,
    });
};

export const detailPost = (postIdxUrl) => {
    if (localStorage.getItem("token") === undefined) {
        return fetch(`${API_DOMAIN}/posts/display/detail/${postIdxUrl}/`, {})
            .then((res) => res.json())
            .then((data) => {
                return data;
            });
    }
    fetch(`${API_DOMAIN}/posts/display/detail/${postIdxUrl}/`, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const updatePost = (formData, postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/posts/update/${postIdx}/`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: formData,
    });
};

export const deletePost = (postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/post/${postIdx}/`, {
        method: "DELETE",
        headers: {
            Authorization: token,
        },
    });
};
/*------------------------------------------------------------------------------------------------*/
// 댓글관련
export const CommentUpload = (idx, currentComments) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/comment/`, {
        method: "POST",
        headers: {
            Authorization: token,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            post_idx: idx,
            comment: currentComments,
        }),
    });
};

export const updateComment = (comment, commentIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/comment/${commentIdx}/`, {
        method: "PATCH",
        header: {
            Authorization: token,
        },
        body: comment,
    });
};

export const deleteComment = (commentIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/comment/${commentIdx}/`, {
        method: "DELETE",
        headers: { Authorization: token },
    });
};

/*------------------------------------------------------------------------------------------------*/
//좋아요 및 저장 관련
export const sendIsLiked = (postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/post/${postIdx}/like/`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
    });
};

export const sendIsSaved = (postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/post/${postIdx}/bookmark/`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
    });
};
