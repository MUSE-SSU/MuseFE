import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { useMediaQuery as MediaQuery } from "react-responsive";
import "react-router-modal/css/react-router-modal.css";
import Swal from "sweetalert2";
import { sendIsLiked, sendIsSaved } from "../../../actions/post";
import StackGrid from "react-stack-grid";
import { useHistory } from "react-router-dom";
import {
    uploadCommentPost,
    deletePost,
    deleteComment,
} from "../../../actions/post";
import moment from "moment";
import {
    CardContainer,
    CardContainerRect,
    Image,
    ImageContainerRect,
    PostWriter,
    LikesIcon,
    InfoContainer,
    EyeIcon,
    PostStatusContainerRect,
    WriterContainer,
    CustomSpan,
    ImageContainer,
    ModalImage,
    ModalImageContainer,
    Comment,
    FollowText,
    Writer,
    Date,
    CancelContainer,
    ModalAvatar,
    ReactModal,
    ModalWriterInfoContainer,
    Title,
    Hashtag,
    HashtagName,
    OtherPostsImg,
    CommentWriter,
    Avatar,
    ListItem,
    ToastMainContainer,
    BadgePreview,
    BadgeDetail,
    ModalMainContainer,
    ModalCommentContainer,
    ModalInfoContainer,
    Content,
    Url,
    OtherPostsContainer,
    ModalWriterInfoContainerMobile,
    FollowButton,
    IconContainer,
    ToastContainer,
} from "./style";
import {
    Box,
    Button,
    Spinner,
    CompositeZIndex,
    Toast,
    Icon,
    FixedZIndex,
    Flex,
    Layer,
    IconButton,
    Text,
    TextArea,
} from "gestalt";

function DetailPost(props) {
    const token = JSON.parse(localStorage.getItem("token"));
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);
    const history = useHistory();

    // 게시물 관련
    const [data, setData] = useState();
    const [created, setCreated] = useState("");
    const [idx, setIdx] = useState(props.idx);
    const [otherPosts, setOtherPosts] = useState([]);

    // 댓글 관련
    const [currentComments, setCurrentComments] = useState("");

    // 로딩 관련
    const [loading, setLoading] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [recommendLoading, setRecommendLoading] = useState(false);

    // user
    const [isFollowed, setIsFollowed] = useState();
    const [isLiked, setIsLiked] = useState();
    const [isSaved, setIsSaved] = useState();

    // 무한스크롤
    const modalRef = useRef(null); // otherposts 클릭시 맨 위 고정 ref
    const [page, setPage] = useState(1);
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });
    const [changeScroll, setChangeScroll] = useState(false);

    // 토스트 관련
    const [showToast, setShowToast] = useState(false);
    const TOAST_ZINDEX = new FixedZIndex(999);
    const toastZIndex = new CompositeZIndex([TOAST_ZINDEX]);
    // CANCEL 버튼 함수
    const handleOut = () => {
        props.handleShouldShow(false);
    };

    // 모바일
    const isMobile = MediaQuery({
        query: "(max-width: 425px)",
    });

    const notMobile = MediaQuery({
        query: "(min-width: 426px)",
    });

    // 모달 하단 추천 게시물 fetch
    const getRecommendedPosts = useCallback(() => {
        setRecommendLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        axios
            .get(`${API_DOMAIN}/post/${idx}/recommend/?page=${page}`)
            .then((res) => {
                try {
                    console.log(res.data);
                    const fetchedData = res.data;
                    const mergedData = otherPosts.concat(...fetchedData);
                    setOtherPosts(mergedData);
                } catch (e) {
                    console.error(e);
                }
            });
        setRecommendLoading(false);
    }, [page, idx]);

    // 무한스크롤 trigger
    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !recommendLoading) {
            setPage((state) => state + 1);
        }
    }, [inView, recommendLoading]);

    useEffect(() => {
        getRecommendedPosts();
    }, [getRecommendedPosts]);

    useEffect(() => {
        modalRef.current.scrollIntoView({ block: "start" });
    }, [changeScroll]);

    // 게시물 fetch
    useEffect(() => {
        setLoading(true);
        setShowSpinner(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));

        if (token !== null) {
            fetch(`${API_DOMAIN}/post/${idx}/`, {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setData(data);
                    // 변환이 필요한 값들은 따로 저장
                    setIsLiked(data.is_login_user_liked);
                    setIdx(data.idx);
                    setIsFollowed(data.is_login_user_follow);
                    setCreated(moment(data.created_at).format("YYYY-MM-DD"));
                    setIsSaved(data.is_login_user_bookmark);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                        setShowSpinner(false);
                    }, 500);
                });
        }
        if (token === null) {
            return fetch(`${API_DOMAIN}/post/${idx}/`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    // 변환이 필요한 값들은 따로 저장
                    setIsLiked(data.is_login_user_liked);
                    setIdx(data.idx);
                    setIsFollowed(data.is_login_user_follow);
                    setCreated(moment(data.created_at).format("YYYY-MM-DD"));
                    setIsSaved(data.is_login_user_bookmark);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                        setShowSpinner(false);
                    }, 500);
                });
        }
    }, [idx, submit]);

    // 팔로우 핸들링
    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));

        if (token === null) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "로그인을 해주세요",
                showConfirmButton: false,
                timer: 1000,
            });
        } else {
            return fetch(`${API_DOMAIN}/account/follow/`, {
                method: "POST",
                headers: {
                    Authorization: `${token}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    follower: data.writer,
                }),
            }).then(() => {
                setIsFollowed(!isFollowed);
            });
        }
    };

    //댓글 작성
    const handleSubmitComment = async () => {
        try {
            if (currentComments == "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "댓글을 입력해주세요!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            if (currentComments.length > 100) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "최대 100자까지 작성 가능합니다.",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else if (token == undefined) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "로그인을 해주세요",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else {
                await dispatch(uploadCommentPost(idx, currentComments));
                setSubmit(!submit);
                setCurrentComments("");
            }
        } catch (e) {
            console.error(e);
        }
    };

    // 좋아요 핸들링
    const handleLikes = () => {
        try {
            if (token === null) {
                Swal.fire({
                    icon: "error",
                    title: "Opps...",
                    text: "먼저 로그인을 해주세요",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else {
                const postIdx = idx;
                dispatch(sendIsLiked(postIdx));
                setIsLiked(!isLiked);
            }
        } catch (e) {
            console.error(e);
        }
    };

    // 게시물 저장 핸들링
    const handleSave = () => {
        try {
            if (token === null) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "먼저 로그인을 해주세요",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else {
                const PostIdx = idx;
                dispatch(sendIsSaved(PostIdx));
                setIsSaved(!isSaved);
            }
        } catch (e) {
            console.error(e);
        }
    };

    // comment 제출 Enter 키 이식
    const onKeyDownTagManagement = ({ event: { keyCode } }) => {
        if (keyCode === 13 /* Enter */) {
            handleSubmitComment();
        }
    };

    // 게시물 삭제
    const handleDeletePost = async () => {
        dispatch(deletePost(idx));
        await Swal.fire({
            icon: "success",
            title: "Delete Complete",
            text: "게시물이 삭제되었습니다",
            showConfirmButton: false,
            timer: 1500,
        });
        window.location.reload();
    };

    // 댓글 삭제
    const handleCommentDelete = (commentIdx) => {
        try {
            dispatch(deleteComment(commentIdx));
            setSubmit(!submit);
        } catch (e) {
            console.error(e);
        }
    };

    // 로딩 스피너
    if (loading === true) {
        return (
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
        );
    }

    // 토스트
    const handleToast = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <ModalMainContainer ref={modalRef}>
            {data !== undefined && (
                <Box width="100%">
                    {showToast === true && (
                        <Layer zIndex={toastZIndex}>
                            <Box
                                dangerouslySetInlineStyle={{
                                    __style: {
                                        bottom: 50,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    },
                                }}
                                fit
                                paddingX={1}
                                position="fixed"
                            >
                                <ToastMainContainer
                                    initial={{
                                        y: 300,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                >
                                    <Toast
                                        text={
                                            <ToastContainer>
                                                <Text inline weight="bold">
                                                    정말 삭제하실 건가요?
                                                </Text>
                                            </ToastContainer>
                                        }
                                        button={
                                            <IconContainer>
                                                <IconButton
                                                    size="sm"
                                                    icon="trash-can"
                                                    onClick={handleDeletePost}
                                                    bgColor="darkGray"
                                                />
                                            </IconContainer>
                                        }
                                    />
                                </ToastMainContainer>
                            </Box>
                        </Layer>
                    )}
                    <Box>
                        <CancelContainer>
                            <IconButton
                                icon="cancel"
                                onClick={() => {
                                    handleOut();
                                }}
                            />
                        </CancelContainer>
                        {notMobile && (
                            <ModalWriterInfoContainer>
                                <Box>
                                    <Flex direction="row" alignItems="center">
                                        <ModalAvatar
                                            onClick={() => {
                                                window.location.href = `/my-page/${data.writer}`;
                                            }}
                                            src={data.writer_avatar}
                                        />
                                        <Flex direction="column">
                                            <Flex
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <Writer
                                                    onClick={() => {
                                                        window.location.href = `/my-page/${data.writer}`;
                                                    }}
                                                >
                                                    {data.writer}
                                                </Writer>

                                                {data.badge !== 0 && (
                                                    <BadgeDetail
                                                        badge={data.badge}
                                                    >
                                                        MUSE
                                                    </BadgeDetail>
                                                )}
                                            </Flex>

                                            <Flex direction="row">
                                                <Date>{created}</Date>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex direction="row">
                                        <Box marginEnd={3}>
                                            {data.is_writer === false ? (
                                                isFollowed === false ? (
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
                                                        <Icon
                                                            icon="check"
                                                            size="12"
                                                        />
                                                    </FollowButton>
                                                )
                                            ) : (
                                                <></>
                                            )}
                                        </Box>
                                        <Box marginEnd={3}>
                                            {isLiked === true ? (
                                                <IconButton
                                                    icon="heart"
                                                    bgColor="red"
                                                    onClick={handleLikes}
                                                />
                                            ) : (
                                                <IconButton
                                                    icon="heart"
                                                    bgColor="lightGray"
                                                    onClick={handleLikes}
                                                />
                                            )}
                                        </Box>
                                        <Box marginEnd={3}>
                                            {isSaved === true ? (
                                                <IconButton
                                                    icon="folder"
                                                    bgColor="red"
                                                    onClick={handleSave}
                                                />
                                            ) : (
                                                <IconButton
                                                    icon="folder"
                                                    bgColor="lightGray"
                                                    onClick={handleSave}
                                                />
                                            )}
                                        </Box>
                                        {data.is_writer === true && (
                                            <Box marginEnd={3}>
                                                <IconButton
                                                    icon="trash-can"
                                                    bgColor="lightGray"
                                                    // onClick={handleDeletePost}
                                                    onClick={() => {
                                                        handleToast();
                                                    }}
                                                />
                                            </Box>
                                        )}
                                    </Flex>
                                </Box>
                            </ModalWriterInfoContainer>
                        )}
                        {isMobile && (
                            <ModalWriterInfoContainerMobile>
                                <Box>
                                    <Flex direction="row" alignItems="center">
                                        <ModalAvatar src={data.writer_avatar} />
                                        <Flex direction="column">
                                            <Flex
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <Writer>{data.writer}</Writer>
                                                {data.badge !== 0 && (
                                                    <BadgeDetail
                                                        badge={data.badge}
                                                    >
                                                        MUSE
                                                    </BadgeDetail>
                                                )}
                                            </Flex>

                                            <Flex direction="row">
                                                <Date>{created}</Date>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box marginTop={3}>
                                    <Flex direction="row">
                                        <Box marginEnd={3}>
                                            {data.is_writer === false ? (
                                                isFollowed === false ? (
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
                                                        <Icon
                                                            icon="check"
                                                            size="12"
                                                        />
                                                    </FollowButton>
                                                )
                                            ) : (
                                                <></>
                                            )}
                                        </Box>
                                        <Box marginEnd={3}>
                                            {isLiked === true ? (
                                                <IconButton
                                                    icon="heart"
                                                    bgColor="red"
                                                    onClick={handleLikes}
                                                />
                                            ) : (
                                                <IconButton
                                                    icon="heart"
                                                    bgColor="lightGray"
                                                    onClick={handleLikes}
                                                />
                                            )}
                                        </Box>
                                        <Box marginEnd={3}>
                                            {isSaved === true ? (
                                                <IconButton
                                                    icon="folder"
                                                    bgColor="red"
                                                    onClick={handleSave}
                                                />
                                            ) : (
                                                <IconButton
                                                    icon="folder"
                                                    bgColor="lightGray"
                                                    onClick={handleSave}
                                                />
                                            )}
                                        </Box>
                                        {data.is_writer === true && (
                                            <Box marginEnd={3}>
                                                <IconButton
                                                    icon="trash-can"
                                                    bgColor="lightGray"
                                                    onClick={handleDeletePost}
                                                />
                                            </Box>
                                        )}
                                    </Flex>
                                </Box>
                            </ModalWriterInfoContainerMobile>
                        )}
                    </Box>
                    <ModalImageContainer>
                        <ModalImage src={data.image} alt="" />
                    </ModalImageContainer>
                    <ModalInfoContainer>
                        <Box width="100%" marginBottom={8}>
                            <Flex
                                width="100%"
                                height="100%"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Title>{data.title}</Title>
                            </Flex>
                        </Box>

                        <Content>{data.content}</Content>
                        <Box width="100%" overflow="hidden">
                            <Url
                                onClick={() => {
                                    window.location.href = `${data.ref_url}`;
                                }}
                            >
                                {data.ref_url}
                            </Url>
                            <Box width="100%">
                                <Flex justifyContent="center">
                                    {data.hashtag.map((tag) => (
                                        <Hashtag
                                            onClick={() => {
                                                history.push(
                                                    `/search?q=${tag}`
                                                );
                                            }}
                                        >
                                            <HashtagName>#{tag}</HashtagName>
                                        </Hashtag>
                                    ))}
                                </Flex>
                            </Box>
                        </Box>
                    </ModalInfoContainer>

                    <ModalCommentContainer>
                        {data.comment.map((comment) => (
                            <React.Fragment key={comment.idx}>
                                <Box
                                    marginTop={2}
                                    borderStyle="sm"
                                    rounding={4}
                                    padding={2}
                                >
                                    <Flex
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="between"
                                    >
                                        <Box>
                                            <Flex
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <Avatar
                                                    src={`${comment.writer_avatar}`}
                                                    onClick={() => {
                                                        window.location.href = `/my-page/${comment.writer}`;
                                                    }}
                                                />
                                                <Box>
                                                    <CommentWriter
                                                        onClick={() => {
                                                            window.location.href = `/my-page/${comment.writer}`;
                                                        }}
                                                    >
                                                        {comment.writer}
                                                    </CommentWriter>

                                                    <Comment>
                                                        {comment.comment}
                                                    </Comment>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        {comment.is_writer === true ? (
                                            <Flex justifyContent="end">
                                                <IconButton
                                                    icon="trash-can"
                                                    onClick={() =>
                                                        handleCommentDelete(
                                                            comment.idx
                                                        )
                                                    }
                                                />
                                            </Flex>
                                        ) : (
                                            <></>
                                        )}
                                    </Flex>
                                </Box>
                            </React.Fragment>
                        ))}

                        {token !== undefined ? (
                            <>
                                <Box paddingY={4} width="100%">
                                    <TextArea
                                        id="comment"
                                        placeholder="댓글 작성"
                                        rows="2"
                                        onChange={({ value }) =>
                                            setCurrentComments(value)
                                        }
                                        onKeyDown={onKeyDownTagManagement}
                                        value={currentComments}
                                    />
                                </Box>
                                <Flex justifyContent="end">
                                    <Box>
                                        <Button
                                            text="제출"
                                            onClick={handleSubmitComment}
                                        ></Button>
                                    </Box>
                                </Flex>
                            </>
                        ) : (
                            <>
                                <Box paddingY={2} width="100%">
                                    <TextArea
                                        disabled
                                        placeholder="댓글 작성"
                                        rows="2"
                                        onChange={({ currentComments }) =>
                                            setCurrentComments(currentComments)
                                        }
                                    />
                                </Box>
                                <Flex justifyContent="end">
                                    <Box>
                                        <Button
                                            text="제출"
                                            onClick={handleSubmitComment}
                                        />
                                    </Box>
                                </Flex>
                            </>
                        )}
                    </ModalCommentContainer>
                    <Box marginTop={4}>
                        <StackGrid
                            columnWidth={300}
                            gutterWidth={8}
                            duration={0}
                            monitorImagesLoaded={true}
                            style={{ width: "100%" }}
                        >
                            {otherPosts.map((otherPost, idx) => (
                                <React.Fragment key={idx}>
                                    {otherPosts.length - 1 === idx ? (
                                        <ListItem ref={ref}>
                                            <OtherPostsImg
                                                src={`${otherPost.image}`}
                                                onClick={() => {
                                                    setIdx(otherPost.idx);
                                                    setPage(1);
                                                    setChangeScroll(
                                                        !changeScroll
                                                    );
                                                    setOtherPosts([]);
                                                }}
                                            />
                                        </ListItem>
                                    ) : (
                                        <ListItem>
                                            <OtherPostsImg
                                                src={`${otherPost.image}`}
                                                onClick={() => {
                                                    setIdx(otherPost.idx);
                                                    setOtherPosts([]);
                                                    setChangeScroll(
                                                        !changeScroll
                                                    );
                                                    setPage(1);
                                                    console.log(idx);
                                                }}
                                            />
                                        </ListItem>
                                    )}
                                </React.Fragment>
                            ))}
                        </StackGrid>
                    </Box>
                </Box>
            )}
        </ModalMainContainer>
    );
}

function DetailPostPreview(props) {
    const [shouldShow, setShouldShow] = React.useState(false);
    const handleShouldShow = (out) => {
        setShouldShow(out);
    };
    const HEADER_ZINDEX = new FixedZIndex(998);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <>
                <ReactModal
                    onDismiss={onDismiss}
                    footer={
                        <>
                            <DetailPost
                                handleShouldShow={handleShouldShow}
                                idx={props.idx}
                                image={props.image}
                                title={props.title}
                                writer={props.writer}
                                avatar={props.avatar}
                                badge={props.badge}
                            />
                        </>
                    }
                    size={900}
                ></ReactModal>
            </>
        );
    };

    return (
        <React.Fragment>
            {props.rect === "rect" ? (
                <CardContainerRect color="transparent">
                    <ImageContainerRect onClick={() => setShouldShow(true)}>
                        <Image
                            src={`${props.image}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        />
                    </ImageContainerRect>
                    <InfoContainer>
                        <WriterContainer>
                            <Avatar src={props.avatar} alt="" />
                            <PostWriter
                                onClick={() => {
                                    window.location.href = `/my-page/${props.writer}`;
                                }}
                            >
                                {props.writer}
                            </PostWriter>
                            {props.badge !== 0 && (
                                <BadgePreview badge={props.badge}>
                                    MUSE
                                </BadgePreview>
                            )}
                        </WriterContainer>
                        <PostStatusContainerRect>
                            <LikesIcon />
                            <CustomSpan>{props.likes}</CustomSpan>
                            <EyeIcon />
                            <CustomSpan>{props.views}</CustomSpan>
                        </PostStatusContainerRect>
                    </InfoContainer>
                </CardContainerRect>
            ) : (
                <CardContainer color="transparent">
                    <ImageContainer onClick={() => setShouldShow(true)}>
                        <Image
                            src={`${props.image}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <WriterContainer>
                            <Avatar src={props.avatar} alt="" />
                            <PostWriter
                                onClick={() => {
                                    window.location.href = `/my-page/${props.writer}`;
                                }}
                            >
                                {props.writer}
                            </PostWriter>
                            {props.badge !== 0 && (
                                <BadgePreview badge={props.badge}>
                                    MUSE
                                </BadgePreview>
                            )}
                        </WriterContainer>
                        <PostStatusContainerRect>
                            <LikesIcon />
                            <CustomSpan>{props.likes}</CustomSpan>
                            <EyeIcon />
                            <CustomSpan>{props.views}</CustomSpan>
                        </PostStatusContainerRect>
                    </InfoContainer>
                </CardContainer>
            )}

            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

function Card(props) {
    return (
        <DetailPostPreview
            idx={props.idx}
            title={props.title}
            image={props.image}
            liked={props.liked}
            avatar={props.avatar}
            writer={props.writer}
            views={props.views}
            rect={props.rect}
            likes={props.likes}
            badge={props.badge}
        />
    );
}

export default Card;
