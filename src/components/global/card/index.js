import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery as MediaQuery } from "react-responsive";
import "react-router-modal/css/react-router-modal.css";
import Swal from "sweetalert2";
import { sendIsLiked, sendIsSaved } from "../../../actions/post";
import Loader from "react-loader-spinner";
import StackGrid from "react-stack-grid";
import {
    getDetailPost,
    uploadCommentPost,
    updatePost,
    deletePost,
    updateComment,
    deleteComment,
} from "../../../actions/post";
import moment from "moment";
import {
    CardContainer,
    DropdownContainer,
    Image,
    ImageContainerRect,
    PostWriter,
    LikesIcon,
    InfoContainer,
    EyeIcon,
    PostStatusContainer,
    PostStatusContainerRect,
    WriterContainer,
    CustomSpan,
    ImageContainer,
    ModalImage,
    ModalImageContainer,
    Comment,
    Writer,
    Date,
    CancelContainer,
    ModalAvatar,
    ReactModal,
    ModalHeading,
    ModalWriterInfoContainer,
    Title,
    OtherPostsImg,
    CommentWriter,
    Avatar,
    LoadingBack,
    ListItem,
    BadgePreview,
    BadgeDetail,
    ModalMainContainer,
    ModalCommentContainer,
    ModalInfoContainer,
    Content,
    Url,
    ModalWriterInfoContainerMobile,
} from "./style";
import { useHistory } from "react-router-dom";
import {
    Box,
    Button,
    Checkbox,
    Spinner,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
    IconButton,
    TextArea,
    Badge,
    Icon,
    Dropdown,
} from "gestalt";

function DetailPost(props) {
    const token = JSON.parse(localStorage.getItem("token"));
    const dispatch = useDispatch();
    const history = useHistory();
    const getUserInfo = useSelector((state) => state.userInfo);
    const [submit, setSubmit] = useState(false);
    //게시물 관련
    const [url, setUrl] = useState("");
    const [created, setCreated] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const [hashtags, setHashtags] = useState();
    const [likesCount, setLikesCount] = useState();
    const [idx, setIdx] = useState(props.idx);
    const [imagePreview, setImagePreview] = useState();
    //댓글 관련
    const [currentComments, setCurrentComments] = useState("");
    const [comments, setComments] = useState([]);
    //로딩 관련
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [otherPosts, setOtherPosts] = useState([]);

    const [updateContent, setUpdateContent] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateHashtag, setUpdateHashtag] = useState("");
    const [modalSize, setModalSize] = useState("lg");
    //user
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState();
    const [isLiked, setIsLiked] = useState();
    const [isSaved, setIsSaved] = useState();
    const [isWriter, setIsWriter] = useState();
    const [badge, setBadge] = useState(0);
    const [writerAvatar, setWriterAvatar] = useState();

    //무한스크롤
    const [page, setPage] = useState(1);
    const [recommendLoading, setRecommendLoading] = useState(false);
    const [options, setOptions] = useState("likes");
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });
    const modalRef = useRef(null);
    const [changeScroll, setChangeScroll] = useState(false);

    //드롭다운
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null, []);
    const anchorRef = React.useRef(null);
    const DROPDOWN_ZINDEX = new FixedZIndex(999);

    //나가기
    const handleOut = () => {
        props.handleShouldShow(false);
    };

    //모바일
    const isMobile = MediaQuery({
        query: "(max-width: 425px)",
    });

    const notMobile = MediaQuery({
        query: "(min-width: 426px)",
    });

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
        console.log(changeScroll);
    }, [changeScroll]);

    useEffect(() => {
        setLoading(true);
        setShowSpinner(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        if (token !== null) {
            return fetch(`${API_DOMAIN}/post/${idx}/`, {
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsLiked(data.is_login_user_liked);
                    setTitle(data.title);
                    setImage(data.image);
                    setImagePreview(data.image);
                    setUrl(data.ref_url);
                    setIsLoginUserFollowed(data.is_login_user_follow);
                    setHashtags(data.hashtag);
                    setIdx(data.idx);
                    setWriter(data.writer);
                    setContent(data.content);
                    setIsWriter(data.is_writer);
                    setLikesCount(data.likes);
                    setWriterAvatar(data.writer_avatar);
                    setComments(data.comment);
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
                    console.log(data);
                    setIsLiked(data.is_login_user_liked);
                    setTitle(data.title);
                    setImage(data.image);
                    setUrl(data.ref_url);
                    setImagePreview(data.image);
                    setIsLoginUserFollowed(data.is_login_user_follow);
                    setHashtags(data.hashtag);
                    setIdx(data.idx);
                    setWriter(data.writer);
                    setContent(data.content);
                    setIsWriter(data.is_writer);
                    setLikesCount(data.likes);
                    setWriterAvatar(data.writer_avatar);
                    setComments(data.comment);
                    setCreated(moment(data.created_at).format("YYYY-MM-DD"));
                    setIsSaved(data.is_login_user_bookmark);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                        setShowSpinner(false);
                        window.scrollTo(0, 0);
                    }, 500);
                });
        }
    }, [idx, submit]);

    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        return fetch(`${API_DOMAIN}/account/follow/`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: writer,
            }),
        }).then(() => {
            setIsLoginUserFollowed(!isLoginUserFollowed);
            console.log(isLoginUserFollowed);
        });
    };
    // 게시물 업데이트 관련
    // const handleClose = () => {
    //     setShow(false);
    //     setUpdateContent("");
    //     setUpdateTitle(null);
    //     setImagePreview(null);
    //     setModalSize("lg");
    // };
    // const handleShow = () => setShow(true);

    // const onChangeTitle = (e) => {
    //     setUpdateTitle(e.target.value);
    // };
    // const onChangeContent = (e) => {
    //     setUpdateContent(e.target.value);
    // };

    // const onChangeHashtag = (e) => {
    //     setUpdateHashtag(e.target.value);
    // };

    // const onClickToUpdate = async () => {
    //     const postIdx = idx;
    //     const formData = new FormData();
    //     if (updateContent == "") {
    //         formData.append("content", content);
    //     } else {
    //         formData.append("content", updateContent);
    //     }
    //     if (updateTitle == "") {
    //         formData.append("title", title);
    //     } else {
    //         formData.append("title", updateTitle);
    //     }
    //     if (updateHashtag == "") {
    //         formData.append("hashtag", hashtags);
    //     } else {
    //         formData.append("hashtag", updateHashtag);
    //     }

    //     try {
    //         await dispatch(updatePost(formData, postIdx));
    //         await Swal.fire({
    //             icon: "success",
    //             title: "Change Complete",
    //             text: "게시물이 수정되었습니다",
    //             showConfirmButton: false,
    //             timer: 1500,
    //         });
    //         window.location.reload();
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    //댓글 작성
    const handleSubmitComment = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));

            if (currentComments == "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "댓글을 입력해주세요!",
                    showConfirmButton: false,
                    timer: 1500,
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

    const onChangeComment = (e) => {
        setCurrentComments(e.target.value);
        console.log(currentComments);
    };

    const handleLikes = () => {
        try {
            const postIdx = idx;
            dispatch(sendIsLiked(postIdx));
            setIsLiked(!isLiked);
            handleLikesCount();

            console.log(isLiked);
        } catch (e) {
            console.error(e);
        }
    };

    const handleSave = () => {
        try {
            const PostIdx = idx;
            dispatch(sendIsSaved(PostIdx));
            setIsSaved(!isSaved);
            console.log("saved");
        } catch (e) {
            console.error(e);
        }
    };

    const handleLikesCount = () => {
        if (isLiked == true) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
    };

    const onKeyDownTagManagement = ({ event: { keyCode } }) => {
        if (keyCode === 13 /* Enter */) {
            handleSubmitComment();
        }
    };

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

    const handleCommentDelete = (commentIdx) => {
        try {
            dispatch(deleteComment(commentIdx));
            setSubmit(!submit);
        } catch (e) {
            console.error(e);
        }
    };

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

    return (
        <ModalMainContainer ref={modalRef}>
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
                                <ModalAvatar src={props.avatar} />
                                <Flex direction="column">
                                    <Flex direction="row" alignItems="center">
                                        <Writer>{writer}</Writer>
                                        {props.badge !== 0 && (
                                            <BadgeDetail badge={props.badge}>
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
                                    {isWriter === false ? (
                                        isLoginUserFollowed === false ? (
                                            <Button
                                                text="팔로우"
                                                onClick={handleFollow}
                                            ></Button>
                                        ) : (
                                            <Button
                                                onClick={handleFollow}
                                                text="팔로잉"
                                                color="red"
                                            ></Button>
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
                                {isWriter === true && (
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
                    </ModalWriterInfoContainer>
                )}
                {isMobile && (
                    <ModalWriterInfoContainerMobile>
                        <Box>
                            <Flex direction="row" alignItems="center">
                                <ModalAvatar src={props.avatar} />
                                <Flex direction="column">
                                    <Flex direction="row" alignItems="center">
                                        <Writer>{writer}</Writer>
                                        {props.badge !== 0 && (
                                            <BadgeDetail badge={props.badge}>
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
                                    {isWriter === false ? (
                                        isLoginUserFollowed === false ? (
                                            <Button
                                                text="팔로우"
                                                onClick={handleFollow}
                                            ></Button>
                                        ) : (
                                            <Button
                                                onClick={handleFollow}
                                                text="팔로잉"
                                                color="red"
                                            ></Button>
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
                                {isWriter === true && (
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
                <ModalImage src={image} alt="" />
            </ModalImageContainer>
            <ModalInfoContainer>
                <Box>
                    <Title>{title}</Title>
                </Box>
                <Content>{content}</Content>
                <Url
                    onClick={() => {
                        window.location.href = `${url}`;
                    }}
                >
                    {url}
                </Url>
            </ModalInfoContainer>

            <ModalCommentContainer>
                {comments.map((comment) => (
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
                                    <Flex direction="row" alignItems="center">
                                        <Avatar
                                            src={`${comment.writer_avatar}`}
                                        />
                                        <Box>
                                            <CommentWriter>
                                                {comment.writer}
                                            </CommentWriter>
                                            <Comment>{comment.comment}</Comment>
                                        </Box>
                                    </Flex>
                                </Box>
                                {comment.is_writer === true ? (
                                    <Flex justifyContent="end">
                                        <IconButton
                                            icon="trash-can"
                                            onClick={() =>
                                                handleCommentDelete(comment.idx)
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
                    columnWidth={260}
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
                                            setChangeScroll(!changeScroll);
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
                                            setChangeScroll(!changeScroll);
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
        </ModalMainContainer>
    );
}

function DetailPostPreview(props) {
    const history = useHistory();
    const [shouldShow, setShouldShow] = React.useState(false);
    const handleShouldShow = (out) => {
        setShouldShow(out);
    };
    const HEADER_ZINDEX = new FixedZIndex(10);
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
            <CardContainer color="transparent">
                {props.rect === "rect" ? (
                    <ImageContainerRect onClick={() => setShouldShow(true)}>
                        <Image
                            src={`${props.image}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        />
                    </ImageContainerRect>
                ) : (
                    <ImageContainer onClick={() => setShouldShow(true)}>
                        <Image
                            src={`${props.image}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        />
                    </ImageContainer>
                )}
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
