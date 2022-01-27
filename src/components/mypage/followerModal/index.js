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
import { Avatar, FollowerListUl, FollowButton } from "./style";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FollowerLi } from "../../../components";

function FollowerListModal(props) {
    const anchorRef = React.useRef(null);
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
    const [getSubmit, setGetSubmit] = useState(props.submit);
    useEffect(() => {
        console.log(props.isOwner);
    }, []);
    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                accessibilityModalLabel="follwerList"
                onDismiss={onDismiss}
                size="sm"
                heading="팔로워"
            >
                <Box paddingX={8} paddingY={4}>
                    <FollowingList
                        followerParams={props.followerParams}
                        followerCount={props.followerCount}
                        followerLists={props.followerLists}
                        isOwner={props.isOwner}
                        submit={props.submit}
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
                    text={"팔로워" + "\xa0" + props.followerCount + "명"}
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

export default FollowerListModal;

function FollowingList(props) {
    const [followers, setFollowers] = useState([]);
    const [submit, setSubmit] = useState(props.submit);
    useEffect(() => {
        setFollowers(props.followerLists);
    }, []);
    return (
        <FollowerListUl>
            {followers.map((follower) => (
                <>
                    <FollowerLi
                        followerParams={props.followerParams}
                        followerCount={props.followerCount}
                        nickname={follower.following}
                        avatar={follower.avatar}
                        isOwner={props.isOwner}
                    />
                </>
            ))}
        </FollowerListUl>
    );
}
