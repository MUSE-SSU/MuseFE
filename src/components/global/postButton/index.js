import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUploadPost } from "../../../actions/post";
import * as style from "./style";
import Swal from "sweetalert2";
import "./style.css";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
    Toast,
} from "gestalt";
function Input() {
    const getUserInfo = () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(`${API_DOMAIN}/account/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: `${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBadge(data.badge);
                return data;
            });
    };
    useEffect(() => {
        getUserInfo();
    }, []);
    const [badge, setBadge] = useState("");
    const [handle, setHandle] = useState();
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [hashtag, setHashtag] = useState([]);
    const [tmpHashtag, setTmpHashtag] = useState("");
    const [imagePreview, setImagePreview] = useState();
    const [imageUrl, setImageUrl] = useState("");
    const [hashs, setHashs] = useState([]);
    const tag = "reference";

    const hiddenFileInput = useRef(null);

    const onChangeImageUrl = (e) => {
        e.preventDefault();
        setImageUrl(e.target.value);
    };
    const handleClose = () => {
        setShow(false);
        setContent("");
        setTitle(null);
        setImagePreview(null);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const onChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
        const imgTarget = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imgTarget);
        fileReader.onload = function (e) {
            setImagePreview(e.target.result);
        };
    };

    const handleHiddenInputFile = () => {
        hiddenFileInput.current.click();
    };

    const handleSubmit = async (e) => {
        const data = new FormData();
        data.append("upload_type", tag);
        data.append("title", title);
        data.append("content", content);
        data.append("ref_url", imageUrl);
        data.append("image", image);
        data.append("hashtag", hashtag);

        try {
            if (title == null || "" || image == null || "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "형식을 채워주세요",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                await dispatch(getUploadPost(data));
                handleClose();
                history.go(0);
            }
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        console.log(hashtag);
    }, [hashtag]);

    //hashtag 관리
    const KeyCodes = {
        enter: 13,
    };
    const trigger = [KeyCodes.enter];

    const handleAddition = (hash) => {
        if (hashs.length < 3) {
            setHashs([...hashs, hash]);
            setHashtag([...hashtag, hash.text]);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "해시태그는 최대 3개입니다",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleDelete = (i) => {
        setHashs(hashs.filter((hash, index) => index !== i));
    };

    return (
        <>
            <Box paddingX={8} overflow="hidden">
                <Box marginBottom={8} marginTop={8}>
                    <Flex justifyContent="center"></Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        direction="row"
                        gap="6"
                    >
                        <style.CustomForm
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {imagePreview != null ? (
                                <style.ImgPreviewContainer>
                                    <style.ImgPreview
                                        src={imagePreview}
                                        alt=""
                                    />
                                </style.ImgPreviewContainer>
                            ) : (
                                <style.ImgPreviewSkeleton
                                    onClick={handleHiddenInputFile}
                                    onChange={onChangeImage}
                                >
                                    <style.ImgPreviewSkeletonPlusButton />
                                </style.ImgPreviewSkeleton>
                            )}
                            <style.InfoContainer>
                                <style.InfoContainerSection1>
                                    <style.CustomInput
                                        type="text"
                                        name="title"
                                        onChange={onChangeTitle}
                                        placeholder="*제목"
                                        autocomplete="off"
                                    />
                                    <style.CustomInputFile
                                        type="file"
                                        name="images"
                                        onChange={onChangeImage}
                                        ref={hiddenFileInput}
                                    />
                                    <style.ReactHashTags
                                        tags={hashs}
                                        delimiters={trigger}
                                        handleAddition={handleAddition}
                                        handleDelete={handleDelete}
                                        inline={false}
                                        placeholder="해시태그 입력 후 enter키를 눌러주세요"
                                    />
                                    <style.CustomInput
                                        type="url"
                                        name="이미지주소"
                                        onChange={onChangeImageUrl}
                                        placeholder="이미지 URL"
                                        min="0"
                                        step="1"
                                        autocomplete="off"
                                    />
                                    <style.Pre>
                                        <style.CustomTextarea
                                            name="Text1"
                                            cols="90"
                                            Rows="4"
                                            maxLength="90"
                                            onChange={onChangeContent}
                                            placeholder="내용"
                                            autocomplete="off"
                                        />
                                    </style.Pre>
                                </style.InfoContainerSection1>
                                <style.InfoContainerSection2>
                                    <style.CustomButton
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        제출
                                    </style.CustomButton>
                                </style.InfoContainerSection2>
                            </style.InfoContainer>
                        </style.CustomForm>
                    </Flex>
                    <Box marginTop={3}></Box>
                </Box>
            </Box>
        </>
    );
}

function PostButton() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(59);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    useEffect(() => {
        console.log("hi");
    }, []);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal onDismiss={onDismiss} footer={<Input />} size="lg"></Modal>
        );
    };

    const handleShowModal = () => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token !== null || undefined) {
            setShouldShow(true);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "로그인을 해주세요.",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <React.Fragment>
            <style.IconContainer>
                <IconButton
                    icon="add"
                    onClick={handleShowModal}
                    bgColor="darkGray"
                    size="xl"
                />
            </style.IconContainer>
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default PostButton;
