import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    getMyPageSavedPosts,
    getMyPageOwnerPosts,
    getMyPageOwnerInfo,
} from "../../api";
import { updateUser, profileImageUpload } from "../../actions/updateUser";
import {
    GlobalNavbar,
    NicknameUpdateButton,
    FollowingModal,
    FollowerModal,
    Card,
} from "../../components";
import StackGrid from "react-stack-grid";
import {
    Avatar,
    MainContainer,
    MyPageContainer,
    OwnerInfoContainer,
    OwnerNicknameContainer,
    OwnerNickname,
    IntroduceContainer,
    OwnerFollower,
    FollowButton,
    FollowContainer,
    FollowCountContainer,
    MyPostContainer,
    Introduce,
    DisplayOrderButton,
    DisplayOrderButton2,
    OrderButtonContainer,
    PostContainer,
    FollowedButton,
    FollowButtonContainer,
    InstagramID,
    ButtonH1,
    Badge,
    FollowText,
} from "./style";

import { Spinner, Box, Flex, Icon } from "gestalt";

function MyPage() {
    const getUserNickname = useSelector((state) => state.userInfo.nickname);
    const url = window.location.pathname;
    const urlParts = url.replace(/\/\s*$/, "").split("/")[2];
    const [isOwner, setIsOwner] = useState();
    const [isLoginUserFollow, setIsLoginUserFollow] = useState();
    const [ownerInfo, setOwnerInfo] = useState([]);
    const [followingCount, setFollowingCount] = useState();
    const [followingLists, setFollowingLists] = useState([]);
    const [followerCount, setFollowerCount] = useState();
    const [followerLists, setFollowerLists] = useState([]);
    const [ownerPosts, setOwnerPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const [displayOwnerPosts, setDisplayOwnerPosts] = useState(true);
    const [submit, setSubmit] = useState(false);

    // 로딩 스피너 관련
    const [loading, setLoading] = useState(true);
    const [showSpinner, setShowSpinner] = useState(true);

    //재렌더링 방지
    const [apiCall, setApiCall] = useState(false);

    //팔로우
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
                follower: ownerInfo.nickname,
            }),
        }).then(() => {
            setIsLoginUserFollow(!isLoginUserFollow);
            isLoginUserFollow === false
                ? setFollowerCount(followerCount + 1)
                : setFollowerCount(followerCount - 1);
            setSubmit(!submit);
            setApiCall(!apiCall);
        });
    };

    const followingParams = (followingCount) => {
        setFollowingCount(followingCount);
    };
    const followerParams = (followerCount) => {
        setFollowerCount(followerCount);
    };

    //마이페이지 주인 정보 불러오기
    const getOwnerInfo = () => {
        getMyPageOwnerInfo(
            urlParts,
            setIsOwner,
            setIsLoginUserFollow,
            setOwnerInfo,
            setFollowingCount,
            setFollowerCount,
            setFollowingLists,
            setFollowerLists
        );
    };
    const getOwnerPosts = async () => {
        const data = await getMyPageOwnerPosts(urlParts);
        console.log(data);
        setOwnerPosts(data);
    };
    const getSavedPosts = async () => {
        const data = await getMyPageSavedPosts(getUserNickname);
        setSavedPosts(data);
    };

    // 정렬
    const likesOrder = () => {
        setDisplayOwnerPosts(false);
        getSavedPosts();
    };

    const ownerOrder = () => {
        setDisplayOwnerPosts(true);
        setOwnerPosts([]);
        getOwnerPosts();
    };

    useEffect(() => {
        getOwnerPosts();
        getOwnerInfo();
        setTimeout(() => {
            setLoading(false);
            setShowSpinner(false);
        }, 1000);
    }, [apiCall, followingCount, followerCount]);

    return (
        <div>
            {loading ? (
                <Box height="100vh" width="100%">
                    <Flex
                        width="100%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Spinner show={showSpinner} />
                    </Flex>
                </Box>
            ) : (
                <MainContainer>
                    <GlobalNavbar />
                    <MyPageContainer>
                        <Box width="100%">
                            <OwnerInfoContainer>
                                <Avatar src={ownerInfo.avatar} />
                                <OwnerNicknameContainer>
                                    <OwnerNickname>
                                        {ownerInfo.nickname}
                                    </OwnerNickname>
                                    {ownerInfo.badge > 0 && (
                                        <Badge badge={ownerInfo.badge}>
                                            MUSE
                                        </Badge>
                                    )}
                                </OwnerNicknameContainer>
                                {isOwner && (
                                    <NicknameUpdateButton
                                        avatar={ownerInfo.avatar}
                                        nickname={ownerInfo.nickname}
                                        selfIntroduce={ownerInfo.self_introduce}
                                        instagram={ownerInfo.insta_id}
                                    />
                                )}
                                {!isOwner ? (
                                    isLoginUserFollow == false ? (
                                        <FollowButton
                                            whileTap={{
                                                scale: 0.9,
                                            }}
                                            hovered="Red100Hovered"
                                            background="blue"
                                            color="white"
                                            onClick={handleFollow}
                                        >
                                            <FollowText isMargin="0">
                                                팔로우
                                            </FollowText>
                                        </FollowButton>
                                    ) : (
                                        <FollowButton
                                            whileTap={{
                                                scale: 0.9,
                                            }}
                                            hovered="Gray100Hovered"
                                            background="gray100"
                                            color="black"
                                            onClick={handleFollow}
                                        >
                                            <FollowText isMargin="6">
                                                팔로잉
                                            </FollowText>
                                            <Icon icon="check" size="12" />
                                        </FollowButton>
                                    )
                                ) : (
                                    <></>
                                )}
                                <IntroduceContainer>
                                    <Introduce>
                                        {ownerInfo.self_introduce}
                                    </Introduce>
                                    <InstagramID
                                        onClick={() => {
                                            const redirectInsta = ownerInfo.insta_id.split(
                                                "@"
                                            )[1];
                                            window.open(
                                                `https://www.instagram.com/${redirectInsta}/`
                                            );
                                        }}
                                    >
                                        {ownerInfo.insta_id}
                                    </InstagramID>
                                </IntroduceContainer>

                                <FollowContainer>
                                    <FollowButtonContainer>
                                        <FollowerModal
                                            followerCount={followerCount}
                                            followerLists={followerLists}
                                            followerParams={followerParams}
                                            isOwner={isOwner}
                                            submit={submit}
                                        />
                                    </FollowButtonContainer>
                                    <FollowButtonContainer>
                                        <FollowingModal
                                            followingParams={followingParams}
                                            isOwner={isOwner}
                                            followingCount={followingCount}
                                            followingLists={followingLists}
                                        />
                                    </FollowButtonContainer>
                                </FollowContainer>
                            </OwnerInfoContainer>
                        </Box>
                    </MyPageContainer>
                    <PostContainer>
                        <MyPostContainer>
                            <OrderButtonContainer>
                                {isOwner ? (
                                    <>
                                        <DisplayOrderButton
                                            onClick={ownerOrder}
                                        >
                                            {" "}
                                            <ButtonH1>내 게시물</ButtonH1>
                                        </DisplayOrderButton>
                                        <DisplayOrderButton2
                                            onClick={likesOrder}
                                        >
                                            {" "}
                                            <ButtonH1>저장된 게시물</ButtonH1>
                                        </DisplayOrderButton2>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </OrderButtonContainer>

                            {displayOwnerPosts ? (
                                loading ? (
                                    <Box height="100vh" width="100%">
                                        <Flex
                                            width="100%"
                                            height="100%"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Spinner show={showSpinner} />
                                        </Flex>
                                    </Box>
                                ) : (
                                    <StackGrid
                                        columnWidth={300}
                                        gutterWidth={4}
                                        duration={0}
                                        monitorImagesLoaded={true}
                                        style={{ width: "100%" }}
                                    >
                                        {ownerPosts?.map((post) => (
                                            <Card
                                                thumb={post?.thumb_img}
                                                image={post?.image}
                                                title={post?.title}
                                                idx={post?.idx}
                                                liked={post?.liked}
                                                avatar={post?.writer_avatar}
                                                writer={post?.writer}
                                                views={post?.views}
                                                likes={post?.likes}
                                            />
                                        ))}
                                    </StackGrid>
                                )
                            ) : loading ? (
                                <Box height="100vh" width="100%">
                                    <Flex
                                        width="100%"
                                        height="100%"
                                        alignItems="start"
                                        justifyContent="center"
                                    >
                                        <Spinner show={showSpinner} />
                                    </Flex>
                                </Box>
                            ) : (
                                <StackGrid
                                    columnWidth={300}
                                    gutterWidth={4}
                                    duration={0}
                                    monitorImagesLoaded={true}
                                    style={{ width: "100%" }}
                                >
                                    {savedPosts?.map((post) => (
                                        <Card
                                            thumb={post.thumb_img}
                                            image={post.image}
                                            title={post.title}
                                            idx={post.idx}
                                            liked={post.liked}
                                            avatar={post.writer_avatar}
                                            writer={post.writer}
                                            views={post.views}
                                            likes={post.likes}
                                        />
                                    ))}
                                </StackGrid>
                            )}
                        </MyPostContainer>
                    </PostContainer>
                </MainContainer>
            )}
        </div>
    );
}

export default MyPage;
