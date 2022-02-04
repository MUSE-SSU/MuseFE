import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");
    const [isOwner, setIsOwner] = useState();
    const [isLoginUserFollow, setIsLoginUserFollow] = useState();
    const [ownerInfo, setOwnerInfo] = useState([]);
    const [followingCount, setFollowingCount] = useState();
    const [followingLists, setFollowingLists] = useState([]);
    const [followerCount, setFollowerCount] = useState();
    const [followerLists, setFollowerLists] = useState([]);
    const [ownerPosts, setOwnerPosts] = useState([]);
    const [introduce, setIntroduce] = useState("");
    const [cover, setCover] = useState();
    const [displayOwnerPosts, setDisplayOwnerPosts] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [badge, setBadge] = useState(0);

    // 로딩 스피너 관련
    const [loading, setLoading] = useState();
    const [showSpinner, setShowSpinner] = useState(false);

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
            if (isLoginUserFollow == false) {
                setFollowerCount(followerCount + 1);
            }
            if (isLoginUserFollow == true) {
                setFollowerCount(followerCount - 1);
            }
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
        setLoading(true);
        setShowSpinner(true);
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/, "").split("/");
        urlParts.shift();
        if (urlParts === null || undefined) {
            urlParts = getUserNickname;
        }
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(`${API_DOMAIN}/account/${urlParts[1]}/my_page/`, {
            method: "GET",
            headers: {
                Authorization: `${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsOwner(data.is_owner);
                setIsLoginUserFollow(data.is_login_user_follow);
                setOwnerInfo(data.owner_info);
                setFollowingCount(data.following_count);
                setFollowingLists(data.following_list);
                setFollowerCount(data.follower_count);
                setFollowerLists(data.follower_list);
            })
            .finally(() => {
                setLoading(false);
                setShowSpinner(false);
                console.log(isOwner);
            });
    };

    const getOwnerPosts = () => {
        setLoading(true);
        setShowSpinner(true);
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/, "").split("/");
        urlParts.shift();
        console.log(urlParts);
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(`${API_DOMAIN}/account/${urlParts[1]}/owner_post/`, {
            method: "GET",
            headers: {
                Authorization: `${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOwnerPosts(data);
            })
            .finally(() => {
                setLoading(false);
                setShowSpinner(false);
            });
    };

    const getSavedPosts = () => {
        setLoading(true);
        setShowSpinner(false);
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/, "").split("/");
        urlParts.shift();
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(
            `${API_DOMAIN}/account/${urlParts[1]}/owner_bookmark_post/`,
            {
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setOwnerPosts(data);
            })
            .finally(() => {
                setLoading(false);
                setShowSpinner(false);
            });
    };
    // ----------------------------------------------------------------정렬--------------------------------------------------------
    const likesOrder = () => {
        setDisplayOwnerPosts(false);
        setOwnerPosts([]);
        getSavedPosts();
    };

    const ownerOrder = () => {
        setDisplayOwnerPosts(true);
        setOwnerPosts([]);
        getOwnerPosts();
    };

    // --------------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        getOwnerPosts();
    }, []);
    useEffect(() => {
        getOwnerInfo();
    }, [apiCall, followingCount, followerCount]);

    return (
        <div>
            {loading === true ? (
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
                                {isOwner == true && (
                                    <NicknameUpdateButton
                                        avatar={ownerInfo.avatar}
                                        nickname={ownerInfo.nickname}
                                        selfIntroduce={ownerInfo.self_introduce}
                                        instagram={ownerInfo.insta_id}
                                    />
                                )}
                                {isOwner === false ? (
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
                                {isOwner == true ? (
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

                            {displayOwnerPosts === true ? (
                                loading === true ? (
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
                                        {ownerPosts.map((post) => (
                                            <Card
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
                                )
                            ) : loading === true ? (
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
                                    {ownerPosts.map((post) => (
                                        <Card
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
