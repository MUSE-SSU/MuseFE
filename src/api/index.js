import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import moment from "moment";
import { Box, Flex, Spinner } from "gestalt";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
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
                if (!data.result) {
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
                if (!data.result) {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "이미 회원가입 되어있습니다.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else if (data.result) {
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
    return fetch(`${API_DOMAIN}/account/`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: token,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const updateUser = (formData) => {
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
    } else {
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
    }
};

export const getPost = (idx) => {
    return fetch(`${API_DOMAIN}/post/${idx}/`, {
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

export const GetPosts = (type, page, options, posts, setPosts, setError) => {
    axios
        .get(`${API_DOMAIN}/post/?type=${type}&page=${page}&order=${options}`)
        .then((res) => {
            try {
                setError(res.data?.message);
                const fetchedData = res.data;
                const mergedData = posts.concat(...fetchedData);
                setPosts(mergedData);
            } catch (e) {
                console.error(e);
            }
        });
};

export const getPostWithoutToken = (idx) => {
    return fetch(`${API_DOMAIN}/post/${idx}/`, {
        method: "GET",
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

// 추천 게시물 불러오기
export const getRecommendedPosts = (idx, page) => {
    return fetch(`${API_DOMAIN}/post/${idx}/recommend/?page=${page}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            try {
                return data;
            } catch (e) {
                console.error(e);
            }
        });
};
/*------------------------------------------------------------------------------------------------*/
// 댓글관련
export const commentUpload = (idx, currentComments) => {
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

export const getComments = (idx) => {
    return fetch(`${API_DOMAIN}/comment/${idx}/`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
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

export const GetColorWeek = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(`${API_DOMAIN}/post/color_of_week/`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return data;
};
/*------------------------------------------------------------------------------------------------*/
//팔로우 관련
export const follow = (writer) => {
    return fetch(`${API_DOMAIN}/account/follow/`, {
        method: "POST",
        headers: {
            Authorization: `${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            follower: writer,
        }),
    });
};

/*------------------------------------------------------------------------------------------------*/
// 약관 관련
export const getPrivacy = () => {
    return fetch(`${API_DOMAIN}/notice/?type=privacy`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const getTos = () => {
    return fetch(`${API_DOMAIN}/notice/?type=tos`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const getGuide = () => {
    return fetch(`${API_DOMAIN}/notice/?type=guide`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const getPolicy = () => {
    return fetch(`${API_DOMAIN}/notice/?type=policy`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const getMyPageSavedPosts = (userNickname) => {
    return fetch(`${API_DOMAIN}/account/${userNickname}/owner_bookmark_post/`, {
        method: "GET",
        headers: {
            Authorization: token !== null ? token : null,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const getMyPageOwnerPosts = (userNickname) => {
    return fetch(`${API_DOMAIN}/account/${userNickname}/owner_post/`, {
        method: "GET",
        headers: {
            Authorization: token !== null ? token : null,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const getMyPageOwnerInfo = (
    urlParts,
    setIsOwner,
    setIsLoginUserFollow,
    setOwnerInfo,
    setFollowingCount,
    setFollowerCount,
    setFollowingLists,
    setFollowerLists
) => {
    return fetch(`${API_DOMAIN}/account/${urlParts}/my_page/`, {
        method: "GET",
        headers: {
            Authorization: token !== null ? token : null,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setIsOwner(data.is_owner);
            setIsLoginUserFollow(data.is_login_user_follow);
            setOwnerInfo(data.owner_info);
            setFollowingCount(data.following_count);
            setFollowingLists(data.following_list);
            setFollowerCount(data.follower_count);
            setFollowerLists(data.follower_list);
            console.log("완료");
        });
};
