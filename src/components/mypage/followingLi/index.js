import React, { useState, useEffect } from "react";
import {
    UnFollowButton,
    FollowButton,
    FollowingModalContainer,
    FollowingNickname,
    FollowingInfoContainer,
    Avatar,
} from "./style";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Flex } from "gestalt";

function FollowingListLi(props) {
    const [isUserFollowed, setIsUserFollowed] = useState(true);
    const getUserNickname = useSelector((state) => state.userInfo.nickname);
    const [submit, setSubmit] = useState(false);
    const history = useHistory();

    const handleHistoryPushNickname = () => {
        window.location.href = `/my-page/${props.nickname}`;
    };
    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/account/follow/`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: props.nickname,
            }),
        }).then(() => {
            setIsUserFollowed(!isUserFollowed);
            setSubmit(!submit);
        });
    };
    return (
        <FollowingModalContainer>
            <FollowingInfoContainer>
                <Avatar src={props.avatar} />
                <FollowingNickname onClick={handleHistoryPushNickname}>
                    {props.nickname}
                </FollowingNickname>
            </FollowingInfoContainer>
            {props.isOwner === true &&
                (isUserFollowed === true ? (
                    <UnFollowButton onClick={handleFollow}>
                        팔로잉 취소
                    </UnFollowButton>
                ) : (
                    <FollowButton onClick={handleFollow}>팔로우</FollowButton>
                ))}
        </FollowingModalContainer>
    );
}

export default FollowingListLi;
