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
import { FollowingListUl, FollowingListUlContainer } from "./style";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FollowingLi } from "../../../components";

function FollowingListModal(props) {
    const anchorRef = React.useRef(null);
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                accessibilityModalLabel="follwerList"
                onDismiss={onDismiss}
                size="sm"
                heading="팔로잉"
            >
                <Box padding={8}>
                    <FollowingList
                        followingCount={props.followingCount}
                        followingTest={props.followingTest}
                        isOwner={props.isOwner}
                        followingLists={props.followingLists}
                    />
                </Box>
            </Modal>
        );
    };

    return (
        <React.Fragment>
            <Box>
                <Button
                    size="sm"
                    onClick={() => setShouldShow(true)}
                    text={"팔로잉" + "\xa0" + props.followingCount + "명"}
                    shouldFocus={false}
                    size="md"
                    margin={100}
                    ref={anchorRef}
                ></Button>
            </Box>
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default FollowingListModal;

function FollowingList(props) {
    const [followings, setFollowings] = useState([]);

    useEffect(() => {
        setFollowings(props.followingLists);
    }, [followings]);
    return (
        <FollowingListUlContainer>
            <FollowingListUl>
                {followings.map((following) => (
                    <FollowingLi
                        followingCount={props.followingCount}
                        followingTest={props.followingTest}
                        isOwner={props.isOwner}
                        nickname={following.follower}
                        avatar={following.avatar}
                    />
                ))}
            </FollowingListUl>
        </FollowingListUlContainer>
    );
}
