import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUploadPost } from "../../../actions/post";
import { useMediaQuery as MediaQuery } from "react-responsive";
import { GlobalToast } from "../../../components";
import {
    InputText,
    InputFile,
    SubmitButton,
    InputForm,
    ImagePreview,
    ImagePreviewContainer,
    ImagePreviewSkeleton,
    ImagePreviewSkeletonPlusIcon,
    InputPre,
    InputTextarea,
    InfoContainer,
    InfoContainerSection1,
    InfoContainerSection2,
    IconContainer,
    MobileInfoContainer,
    MobileInputForm,
    MobileImagePreview,
    MobileImagePreviewContainer,
    MobileImagePreviewSkeleton,
    MobileImagePreviewSkeletonPlusIcon,
    MobileInfoContainerSection1,
    MobileInputPre,
    HashtagContainer,
    HashtagMainContainer,
} from "./style";

import Swal from "sweetalert2";
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
    Spinner,
    Toast,
    Tag,
} from "gestalt";
function Input() {
    const isMobile = MediaQuery({
        query: "(max-width: 425px)",
    });
    const notMobile = MediaQuery({
        query: "(min-width: 426px) and (max-width: 2560px)",
    });

    const [badge, setBadge] = useState("");
    const [handle, setHandle] = useState();
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [hashtag, setHashtag] = useState([]);
    const [tmpHashtag, setTmpHashtag] = useState("");

    const [imagePreview, setImagePreview] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const [loading, setLoading] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const tag = "reference";

    const hiddenFileInput = useRef(null);

    const onChangeImageUrl = (e) => {
        e.preventDefault();
        setImageUrl(e.target.value);
    };

    const onChangeHashtag = (e) => {
        //해시태그 작성 -> 엔터누르면 다음 인덱스로 넘어감?
        setTmpHashtag(e.target.value);
    };
    const onKeyPressEnter = (e) => {
        if (hashtag.length >= 3) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "해시태그는 최대 3개입니다",
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (e.key === "Enter" && tmpHashtag !== "") {
            setHashtag([...hashtag, tmpHashtag]);
            setTmpHashtag("");
        }
    };
    const onRemoveHashtagWithKey = (e) => {
        if (e.keyCode === 8 && tmpHashtag === "") {
            setHashtag(
                hashtag.filter((hash, idx) => idx !== hashtag.length - 1)
            );
        }
    };
    const onRemoveHashtag = (currentIdx) => {
        setHashtag(hashtag.filter((hash, idx) => idx !== currentIdx));
        console.log(hashtag);
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

    const handleSubmit = async () => {
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
                setLoading(true);
                setShowSpinner(true);
                await dispatch(getUploadPost(data));

                window.location.reload();
            }
        } catch (e) {
            console.error(e);
        }
    };

    //hashtag 관리
    // const KeyCodes = {
    //     enter: 13,
    //     backSpace: 8,
    // };
    // const trigger = [KeyCodes.enter];
    // const deleteTrigger = [KeyCodes.backSpace];
    // const handleAddition = (hash) => {
    //     if (showHashtag.length < 3) {
    //         setShowHashtag([...showHashtag, hash]);
    //         setHashtag([...hashtag, hash.text]);
    //     } else {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: "해시태그는 최대 3개입니다",
    //             showConfirmButton: false,
    //             timer: 1500,
    //         });
    //     }
    // };

    return (
        <>
            {isMobile && (
                <Box width="100%" overflow="hidden">
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                    >
                        <MobileInputForm
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {imagePreview != null ? (
                                <MobileImagePreviewContainer>
                                    <MobileImagePreview
                                        src={imagePreview}
                                        alt=""
                                    />
                                </MobileImagePreviewContainer>
                            ) : (
                                <MobileImagePreviewSkeleton
                                    onClick={handleHiddenInputFile}
                                    onChange={onChangeImage}
                                >
                                    <MobileImagePreviewSkeletonPlusIcon />
                                </MobileImagePreviewSkeleton>
                            )}
                            <MobileInfoContainer>
                                <MobileInfoContainerSection1>
                                    <InputText
                                        type="text"
                                        name="title"
                                        maxLength="20"
                                        onChange={onChangeTitle}
                                        placeholder="*제목"
                                        autocomplete="off"
                                    />
                                    <InputFile
                                        type="file"
                                        name="images"
                                        onChange={onChangeImage}
                                        ref={hiddenFileInput}
                                    />

                                    <InputText
                                        type="url"
                                        name="이미지주소"
                                        onChange={onChangeImageUrl}
                                        placeholder="이미지 URL"
                                        min="0"
                                        step="1"
                                        autocomplete="off"
                                    />
                                    <MobileInputPre>
                                        <InputTextarea
                                            name="Text1"
                                            cols="90"
                                            Rows="4"
                                            maxLength="100"
                                            onChange={onChangeContent}
                                            placeholder="내용"
                                            autocomplete="off"
                                        />
                                    </MobileInputPre>
                                    {hashtag.length === 0 ? (
                                        <></>
                                    ) : (
                                        <HashtagMainContainer>
                                            {hashtag.map((hash, idx) => (
                                                <HashtagContainer>
                                                    <Tag
                                                        text={hash}
                                                        onRemove={() =>
                                                            onRemoveHashtag(idx)
                                                        }
                                                    />
                                                </HashtagContainer>
                                            ))}
                                        </HashtagMainContainer>
                                    )}
                                    <InputText
                                        type="text"
                                        value={tmpHashtag}
                                        name="해시태그"
                                        onChange={onChangeHashtag}
                                        onKeyDown={onRemoveHashtagWithKey}
                                        onKeyPress={onKeyPressEnter}
                                        placeholder="해시태그 입력 후 엔터"
                                        min="0"
                                        step="1"
                                        autocomplete="off"
                                    />
                                </MobileInfoContainerSection1>
                                <InfoContainerSection2>
                                    {loading === false ? (
                                        <SubmitButton
                                            type="button"
                                            onClick={handleSubmit}
                                        >
                                            제출
                                        </SubmitButton>
                                    ) : (
                                        <Box>
                                            <Flex
                                                width="100%"
                                                height="100%"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Spinner show={showSpinner} />
                                            </Flex>
                                        </Box>
                                    )}
                                </InfoContainerSection2>
                            </MobileInfoContainer>
                        </MobileInputForm>
                    </Flex>
                </Box>
            )}
            {notMobile && (
                <Box>
                    <Box marginBottom={8} overflow="hidden" marginTop={8}>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            gap="6"
                        >
                            <InputForm
                                onSubmit={handleSubmit}
                                encType="multipart/form-data"
                            >
                                {imagePreview != null ? (
                                    <ImagePreviewContainer>
                                        <ImagePreview
                                            src={imagePreview}
                                            alt=""
                                        />
                                    </ImagePreviewContainer>
                                ) : (
                                    <ImagePreviewSkeleton
                                        onClick={handleHiddenInputFile}
                                        onChange={onChangeImage}
                                    >
                                        <ImagePreviewSkeletonPlusIcon />
                                    </ImagePreviewSkeleton>
                                )}
                                <InfoContainer>
                                    <InfoContainerSection1>
                                        <InputText
                                            type="text"
                                            name="title"
                                            onChange={onChangeTitle}
                                            maxLength="20"
                                            placeholder="*제목"
                                            autocomplete="off"
                                        />
                                        <InputFile
                                            type="file"
                                            name="images"
                                            onChange={onChangeImage}
                                            ref={hiddenFileInput}
                                        />
                                        <InputText
                                            type="url"
                                            name="이미지주소"
                                            onChange={onChangeImageUrl}
                                            placeholder="이미지 URL"
                                            min="0"
                                            step="1"
                                            autocomplete="off"
                                        />
                                        <InputPre>
                                            <InputTextarea
                                                name="Text1"
                                                cols="90"
                                                Rows="4"
                                                maxLength="90"
                                                onChange={onChangeContent}
                                                placeholder="내용"
                                                autocomplete="off"
                                            />
                                        </InputPre>
                                        {hashtag.length === 0 ? (
                                            <></>
                                        ) : (
                                            <HashtagMainContainer>
                                                {hashtag.map((hash, idx) => (
                                                    <HashtagContainer>
                                                        <Tag
                                                            text={hash}
                                                            onRemove={() =>
                                                                onRemoveHashtag(
                                                                    idx
                                                                )
                                                            }
                                                        />
                                                    </HashtagContainer>
                                                ))}
                                            </HashtagMainContainer>
                                        )}
                                        <InputText
                                            type="text"
                                            value={tmpHashtag}
                                            name="해시태그"
                                            onChange={onChangeHashtag}
                                            onKeyDown={onRemoveHashtagWithKey}
                                            onKeyPress={onKeyPressEnter}
                                            placeholder="해시태그 입력 후 엔터"
                                            min="0"
                                            step="1"
                                            autocomplete="off"
                                        />
                                    </InfoContainerSection1>
                                    <InfoContainerSection2>
                                        {loading === false ? (
                                            <SubmitButton
                                                type="button"
                                                onClick={handleSubmit}
                                            >
                                                제출
                                            </SubmitButton>
                                        ) : (
                                            <Box height="40px" marginTop={9}>
                                                <Flex
                                                    width="100%"
                                                    height="100%"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Spinner
                                                        show={showSpinner}
                                                    />
                                                </Flex>
                                            </Box>
                                        )}
                                    </InfoContainerSection2>
                                </InfoContainer>
                            </InputForm>
                        </Flex>
                    </Box>
                </Box>
            )}
        </>
    );
}

function PostButton() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(998);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal onDismiss={onDismiss} footer={<Input />} size="md"></Modal>
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
            <IconContainer>
                <IconButton
                    icon="add"
                    onClick={handleShowModal}
                    bgColor="darkGray"
                    size="xl"
                />
            </IconContainer>
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default PostButton;
