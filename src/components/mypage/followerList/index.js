import React, { useState, useEffect } from "react";
import {
    FollowButton,
    FollowerNickname,
    UnFollowButton,
    FollowerModalContainer,
    FollowerInfoContainer,
    Avatar,
} from "./style";

function FollowerListLi(props) {
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState(true);
    const handleHistoryPushNickname = () => {
        window.location.href = `/my-page/${props.nickname}`;
    };

    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/account/forced_cancel_follower/`, {
            method: "POST",
            headers: {
                Authorization: token,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: props.nickname,
            }),
        }).then(() => {
            setIsLoginUserFollowed(!isLoginUserFollowed);
            props.followerParams(props.followerCount - 1);
        });
    };
    return (
        <FollowerModalContainer>
            {isLoginUserFollowed == true ? (
                <>
                    <FollowerInfoContainer onClick={handleHistoryPushNickname}>
                        <Avatar src={props.avatar} />
                        <FollowerNickname>{props.nickname}</FollowerNickname>
                    </FollowerInfoContainer>
                    {props.isOwner === true && (
                        <FollowButton onClick={handleFollow}>
                            팔로우 끊기
                        </FollowButton>
                    )}
                </>
            ) : (
                <></>
            )}
        </FollowerModalContainer>
    );
}

export default FollowerListLi;
