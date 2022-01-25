import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUploadPost } from "../../../actions/post";
import {
    CustomForm,
    InfoContainer,
    InfoContainerSection1,
    InfoContainerSection2,
    CustomButton,
    Pre,
    CustomInput,
    CustomInputFile,
    ImgPreview,
    ImgPreviewContainer,
    ImgPreviewSkeleton,
    ImgPreviewSkeletonPlusButton,
    CustomTextarea,
} from "./style";
import Swal from "sweetalert2";
import { WithContext as ReactHashTags } from "react-tag-input";
import "./style.css";
import {
    Box,
    Button,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Layer,
    Modal,
} from "gestalt";
function Input() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [imagePreview, setImagePreview] = useState();
    const [hashs, setHashs] = useState([]);
    const tag = "contest";

    // file input 버튼 스켈레톤에 이식
    const hiddenFileInput = useRef(null);

    // 모달 닫은 후 초기화
    const handleClose = () => {
        setShow(false);
        setContent(null);
        setTitle(null);
        setImagePreview(null);
    };

    // 제목 변경 감지
    const onChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    // 내용 변경 감지
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // 사진 변경 감지 및 미리보기 설정
    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
        const imgTarget = e.target.files[0];
        // 파일 읽기
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imgTarget);
        //파일을 읽었다면 실행하는 이벤트 핸들러
        fileReader.onload = function (e) {
            setImagePreview(e.target.result);
        };
    };

    // 스켈레톤에 Click 이벤트 핸들링
    const handleHiddenInputFile = () => {
        hiddenFileInput.current.click();
    };

    // Form 제출
    const handleSubmit = async (e) => {
        const data = new FormData();
        data.append("title", title);
        data.append("upload_type", tag);
        data.append("content", content);
        data.append("image", image);
        data.append("hashtag", hashtag);

        // 필수 내용 ( 제목 && 이미지 )
        try {
            if (title == null || "" || image == null || "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "내용을 채워주세요",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                handleClose();
                await dispatch(getUploadPost(data));
                history.go(0);
            }
        } catch (e) {
            console.error(e);
        }
    };

    // 해시태그 관련
    const KeyCodes = {
        enter: 13,
    };
    const trigger = [KeyCodes.enter];

    // 해시태그 추가
    const handleAddHash = (hash) => {
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
    // 해시태그 삭제
    const handleDeleteHash = (i) => {
        setHashs(hashs.filter((hash, index) => index !== i));
    };

    return (
        <>
            <Box overflow="hidden">
                <Box>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        direction="row"
                        gap="6"
                    >
                        <CustomForm
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {imagePreview != null ? (
                                <ImgPreviewContainer>
                                    <ImgPreview src={imagePreview} alt="" />
                                </ImgPreviewContainer>
                            ) : (
                                <ImgPreviewSkeleton
                                    onClick={handleHiddenInputFile}
                                    onChange={onChangeImage}
                                >
                                    <ImgPreviewSkeletonPlusButton />
                                </ImgPreviewSkeleton>
                            )}
                            <InfoContainer>
                                <InfoContainerSection1>
                                    <CustomInput
                                        type="text"
                                        name="title"
                                        onChange={onChangeTitle}
                                        placeholder="제목"
                                        autocomplete="off"
                                    />
                                    <CustomInputFile
                                        type="file"
                                        name="images"
                                        onChange={onChangeImage}
                                        ref={hiddenFileInput}
                                    />
                                    <ReactHashTags
                                        tags={hashs}
                                        delimiters={trigger}
                                        handleAddition={handleAddHash}
                                        handleDelete={handleDeleteHash}
                                        inline={false}
                                        placeholder="해시태그 입력 후 enter키를 눌러주세요"
                                    />
                                    <Pre>
                                        <CustomTextarea
                                            name="Text1"
                                            cols="90"
                                            Rows="4"
                                            maxLength="90"
                                            onChange={onChangeContent}
                                            placeholder="내용"
                                            autocomplete="off"
                                        />
                                    </Pre>
                                </InfoContainerSection1>
                                <InfoContainerSection2>
                                    <CustomButton
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        제출
                                    </CustomButton>
                                </InfoContainerSection2>
                            </InfoContainer>
                        </CustomForm>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}

function ContestPostButton() {
    // 모달 관련
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal onDismiss={onDismiss} footer={<Input />} size="lg"></Modal>
        );
    };

    // 로그인 확인 후 모달 진입
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
            <Button
                onClick={() => {
                    handleShowModal();
                }}
                text="콘테스트 참여하기"
                size="lg"
            />
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default ContestPostButton;
