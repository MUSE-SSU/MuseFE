import React, { useState, useEffect } from "react";
import "gestalt/dist/gestalt.css";
import {
    Box,
    Button,
    Checkbox,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
} from "gestalt";
import {
    Avatar,
    NicknameInput,
    NicknameLabel,
    SubmitButton,
    SubmitButtonContainer,
    InputContainer,
    ModalName,
    Form,
    Pre,
    Textarea,
    DeleteButton,
    AvatarContainer,
    NicknameContainer,
    NicknameDuplicateButton,
    InstagramInput,
    InstagramContainer,
} from "./style";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
function Input(ownerInfo) {
    const [originalNickname, setOriginalNickname] = useState(
        ownerInfo.nickname
    );
    const [originalAvatar, setOriginalAvatar] = useState(ownerInfo.avatar);
    const [changedNickname, setChangedNickname] = useState(null);
    const [changedAvatar, setChangedAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [introduce, setIntroduce] = useState(ownerInfo.selfIntroduce);
    const [instagram, setInstagram] = useState(ownerInfo.instagram);
    const [deleteAvatarButton, setDeleteAvatarButton] = useState(false);
    const [duplicationData, setDuplicationData] = useState(null);
    const introducePlaceholder = "자기소개를 해주세요!";
    const instagramPlaceholder = "@instagram ID 를 적어서 자신을 홍보하세요!";
    const MUSE_DOMAIN = process.env.REACT_APP_MUSE_DOMAIN;

    const dispatch = useDispatch();
    useEffect(() => {
        console.log(ownerInfo.instagram);
        console.log(ownerInfo.nickname);
    }, []);
    const handleDuplication = (e) => {
        e.preventDefault();
        const nicknameDuplicationFormData = new FormData();
        nicknameDuplicationFormData.append("nickname", changedNickname);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/account/check_nickname/`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
            },
            body: nicknameDuplicationFormData,
        })
            .then((res) => res.json())
            .then((data) => {
                setDuplicationData(data.result);
                if (data.result === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "사용 가능한 닉네임입니다.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                if (data.result === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "이미 존재하는 닉네임입니다.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const onChangeNickname = (e) => {
        e.preventDefault();
        setChangedNickname(e.target.value);
    };

    const onChangeInstagram = (e) => {
        e.preventDefault();
        setInstagram(e.target.value);
    };

    const onChangeAvatar = (e) => {
        e.preventDefault();
        setChangedAvatar(e.target.files[0]);
        const imgTarget = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imgTarget);
        fileReader.onload = function (e) {
            setAvatarPreview(e.target.result);
        };
    };

    const onChangeIntroduce = (e) => {
        e.preventDefault();
        setIntroduce(e.target.value);
    };

    const deleteAvatar = (e) => {
        e.preventDefault();
        setDeleteAvatarButton(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userProfileFormData = new FormData();
        if (changedNickname !== null) {
            userProfileFormData.append("nickname", changedNickname);
        }

        userProfileFormData.append("self_introduce", introduce);

        if (deleteAvatarButton === true) {
            userProfileFormData.append("avatar", "default_avatar.png");
        }
        if (changedAvatar !== null) {
            userProfileFormData.append("avatar", changedAvatar);
        }
        userProfileFormData.append("insta_id", instagram);

        try {
            if (duplicationData === true && changedNickname !== null) {
                const token = JSON.parse(localStorage.getItem("token"));
                const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
                return fetch(`${API_DOMAIN}/account/${originalNickname}/`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `${token}`,
                    },
                    body: userProfileFormData,
                })
                    .then((res) => res.json())
                    .finally((data) => {
                        console.log(data);
                        if (changedNickname == "") {
                            console.log(originalNickname);
                            window.location.href = `${MUSE_DOMAIN}/my-page/${originalNickname}`;
                        } else if (
                            changedNickname != "" ||
                            changedNickname != undefined
                        ) {
                            window.location.href = `${MUSE_DOMAIN}/my-page/${changedNickname}`;
                        }
                    });
            }
            if (changedNickname === null && duplicationData === null) {
                const token = JSON.parse(localStorage.getItem("token"));
                const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
                return fetch(`${API_DOMAIN}/account/${originalNickname}/`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `${token}`,
                    },
                    body: userProfileFormData,
                })
                    .then((res) => res.json())
                    .finally(() => {
                        window.location.href = `${MUSE_DOMAIN}/my-page/${originalNickname}`;
                    });
            } else {
                return Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "중복검사를 완료해주세요.",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (e) {
            console.error(e);
        }
    };
    if (instagram === null) {
        setInstagram("");
    }
    if (introduce === null) {
        setIntroduce("");
    }
    return (
        <>
            <form>
                <InputContainer>
                    <ModalName>프로필 수정</ModalName>
                    <Form>
                        <label htmlFor="input-file">
                            {avatarPreview == null ? (
                                <AvatarContainer>
                                    {deleteAvatarButton == false ? (
                                        <Avatar src={ownerInfo.avatar} />
                                    ) : (
                                        <Avatar src="https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/default_avatar.png" />
                                    )}
                                    <DeleteButton onClick={deleteAvatar}>
                                        삭제
                                    </DeleteButton>
                                </AvatarContainer>
                            ) : (
                                <AvatarContainer>
                                    <Avatar src={avatarPreview} />
                                    <DeleteButton onClick={deleteAvatar}>
                                        삭제
                                    </DeleteButton>
                                </AvatarContainer>
                            )}
                        </label>
                        <input
                            type="file"
                            id="input-file"
                            style={{ display: "none" }}
                            onChange={onChangeAvatar}
                        />
                        <div>
                            <NicknameLabel>Nickname</NicknameLabel>
                            <NicknameContainer>
                                <NicknameInput
                                    type="text"
                                    placeholder={ownerInfo.nickname}
                                    onChange={onChangeNickname}
                                />
                                <NicknameDuplicateButton
                                    onClick={handleDuplication}
                                >
                                    중복검사
                                </NicknameDuplicateButton>
                            </NicknameContainer>
                            <NicknameLabel>Instagram ID</NicknameLabel>
                            <InstagramContainer>
                                {ownerInfo.instagram === null ? (
                                    <InstagramInput
                                        type="text"
                                        placeholder={instagramPlaceholder}
                                        onChange={onChangeInstagram}
                                    />
                                ) : (
                                    <InstagramInput
                                        type="text"
                                        onChange={onChangeInstagram}
                                        value={instagram}
                                    />
                                )}
                            </InstagramContainer>
                        </div>
                        <div>
                            <NicknameLabel>Introduce</NicknameLabel>
                            <Pre>
                                {ownerInfo.selfIntroduce !== null ? (
                                    <Textarea
                                        value={introduce}
                                        onChange={onChangeIntroduce}
                                    />
                                ) : (
                                    <Textarea
                                        placeholder={introducePlaceholder}
                                        onChange={onChangeIntroduce}
                                    />
                                )}
                            </Pre>
                        </div>
                    </Form>
                    <SubmitButtonContainer>
                        <SubmitButton type="submit" onClick={handleSubmit}>
                            제출
                        </SubmitButton>
                    </SubmitButtonContainer>
                </InputContainer>
            </form>
        </>
    );
}

function NicknameUpdateButton(props) {
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                onDismiss={onDismiss}
                footer={
                    <Input
                        nickname={props.nickname}
                        avatar={props.avatar}
                        selfIntroduce={props.selfIntroduce}
                        instagram={props.instagram}
                    />
                }
                size="sm"
            ></Modal>
        );
    };

    return (
        <React.Fragment>
            <Button
                size="sm"
                text="프로필 수정"
                onClick={() => setShouldShow(true)}
            />
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default NicknameUpdateButton;
