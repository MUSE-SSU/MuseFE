import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "../../../components";
import axios from "axios";
import StackGrid from "react-stack-grid";
import {
    MainContainer,
    ListItem,
    ToggleButtonName,
    ToggleContainer,
    DropdownContainer,
} from "./style";
import { motion } from "framer";
import { Button, Flex, Dropdown, FixedZIndex } from "gestalt";
import "gestalt/dist/gestalt.css";

// 현재 || 이전 콘테스트 선택 토글
function ToggleButton(props) {
    return (
        <ToggleContainer>
            <div
                name="Switch"
                style={{
                    width: 60,
                    height: 30,
                    backgroundColor: "#0057ff",
                    borderRadius: 50,
                    padding: 10,
                    cursor: "pointer",
                    // Flexbox
                    display: "flex",
                    justifyContent: props.isOn ? "flex-end" : "flex-start",
                    alignItems: "center",
                }}
                href="#/action-4"
                onClick={props.handleContest}
            >
                <motion.div
                    name="Handle"
                    style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 50,
                    }}
                    // Animation
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                />
            </div>
            {props.contestType === true ? (
                <ToggleButtonName>Current Contest</ToggleButtonName>
            ) : (
                <ToggleButtonName>Past Contest</ToggleButtonName>
            )}
        </ToggleContainer>
    );
}
function ContestContainer(props) {
    const [posts, setPosts] = useState([]);
    const [label, setLabel] = useState("인기순");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState("likes");
    const [contestType, setContestType] = useState(true);
    const [isOn, setIsOn] = useState(false);

    // 드롭다운 state
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const anchorRef = React.useRef(null);
    const DROPDOWN_ZINDEX = new FixedZIndex(10);

    //무한스크롤
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });

    //무한스크롤 getPosts
    const getPosts = useCallback(() => {
        setLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        let contestT = "cur-contest";
        if (contestType == false) {
            contestT = "past-contest";
        }
        axios
            .get(
                `${API_DOMAIN}/post/?type=${contestT}&page=${page}&order=${options}`
            )
            .then((res) => {
                try {
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
                } catch (e) {
                    console.error(e);
                }
            });
        setLoading(false);
    }, [page, options, contestType]);

    //정렬선택
    const likesOrder = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        setOptions("likes");
        setLabel("인기순");
        setOpen(false);
    };

    const viewsOrder = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        setOptions("views");
        setLabel("조회수순");
        setOpen(false);
    };

    const recentOrder = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        setOptions("recent");
        setLabel("최신순");
        setOpen(false);
    };

    const handleContest = () => {
        setPosts([]);
        setPage(1);
        setIsOn(!isOn);
        setContestType(!contestType);
    };

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage((state) => state + 1);
        }
    }, [inView, loading]);
    return (
        <MainContainer>
            <DropdownContainer>
                <ToggleButton
                    isOn={isOn}
                    contestType={contestType}
                    handleContest={handleContest}
                />
                <Flex justifyContent="center">
                    <Button
                        accessibilityControls="action-variant-dropdown-example"
                        accessibilityExpanded={open}
                        accessibilityHaspopup
                        iconEnd="arrow-down"
                        onClick={() => setOpen((prevVal) => !prevVal)}
                        ref={anchorRef}
                        selected={open}
                        size="lg"
                        text={selected ? selected.label : "인기순"}
                    />
                    {open && (
                        <Dropdown
                            zIndex={DROPDOWN_ZINDEX}
                            anchor={anchorRef.current}
                            id="action-variant-dropdown-example"
                            onDismiss={() => setOpen(false)}
                        >
                            <Dropdown.Item
                                onSelect={likesOrder}
                                option={{ value: "인기순", label: "인기순" }}
                                selected={selected}
                            />
                            <Dropdown.Item
                                onSelect={viewsOrder}
                                option={{
                                    value: "조회수순",
                                    label: "조회수순",
                                }}
                                selected={selected}
                            />
                            <Dropdown.Item
                                onSelect={recentOrder}
                                option={{ value: "최신순", label: "최신순" }}
                                selected={selected}
                            />
                        </Dropdown>
                    )}
                </Flex>
            </DropdownContainer>

            <StackGrid
                columnWidth={300}
                gutterWidth={4}
                duration={0}
                monitorImagesLoaded={true}
                style={{ width: "100%" }}
            >
                {posts.map((post, idx) => (
                    <React.Fragment key={idx}>
                        {posts.length - 1 === idx ? (
                            <ListItem ref={ref}>
                                <Card
                                    image={post.image}
                                    title={post.title}
                                    idx={post.idx}
                                    liked={post.liked}
                                    avatar={post.writer_avatar}
                                    writer={post.writer}
                                    views={post.views}
                                    likes={post.likes}
                                    badge={post.badge}
                                />
                            </ListItem>
                        ) : (
                            <ListItem>
                                <Card
                                    image={post.image}
                                    title={post.title}
                                    idx={post.idx}
                                    liked={post.liked}
                                    avatar={post.writer_avatar}
                                    writer={post.writer}
                                    views={post.views}
                                    likes={post.likes}
                                    badge={post.badge}
                                />
                            </ListItem>
                        )}
                    </React.Fragment>
                ))}
            </StackGrid>
        </MainContainer>
    );
}

export default ContestContainer;
