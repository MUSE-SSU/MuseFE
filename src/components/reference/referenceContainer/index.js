import React, { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "../../../components";
import { GetPosts } from "../../../api";
import { Button, Flex, Dropdown, FixedZIndex, Box, Spinner } from "gestalt";
import "gestalt/dist/gestalt.css";
import StackGrid from "react-stack-grid";
import { DropdownContainer, ListItem, MainContainer } from "./style";

function ReferenceContainer(props) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [showSpinner, setShowSpinner] = useState(true);
    const [options, setOptions] = useState("recent");
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });
    const [error, setError] = useState();
    // 드롭다운 state
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({
        value: "최신순",
        label: "최신순",
    });
    const anchorRef = useRef(null);
    const DROPDOWN_ZINDEX = new FixedZIndex(10);

    // 게시물 불러오기
    const getPosts = useCallback(async () => {
        setLoading(true);
        setShowSpinner(true);
        const type = props.type;
        GetPosts(type, page, options, posts, setPosts, setError);
        if (error === "POST COUNT LIMIT") {
            return;
        }
        setLoading(false);
        setShowSpinner(false);
    }, [page, options]);

    // 정렬 선택
    const orderItems = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        if (item.value === "최신순") {
            setOptions("recent");
        } else if (item.value === "조회수순") {
            setOptions("views");
        } else if (item.value === "인기순") {
            setOptions("likes");
        }
        setOpen(false);
    };

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니고, 마지막이 아니면
        if (inView && !loading && error === undefined) {
            setPage((state) => state + 1);
        }
    }, [inView, loading, error]);

    return (
        <MainContainer>
            <DropdownContainer>
                <Flex justifyContent="center">
                    <Button
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
                            onDismiss={() => setOpen(false)}
                        >
                            <Dropdown.Item
                                onSelect={orderItems}
                                option={{
                                    value: "인기순",
                                    label: "인기순",
                                }}
                                selected={selected}
                            />
                            <Dropdown.Item
                                onSelect={orderItems}
                                option={{
                                    value: "조회수순",
                                    label: "조회수순",
                                }}
                                selected={selected}
                            />
                            <Dropdown.Item
                                onSelect={orderItems}
                                option={{
                                    value: "최신순",
                                    label: "최신순",
                                }}
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
                                    thumb={post.thumb_img}
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
                                    thumb={post.thumb_img}
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
            {loading === true && (
                <Box height="3vh" width="100%">
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
        </MainContainer>
    );
}

export default ReferenceContainer;
