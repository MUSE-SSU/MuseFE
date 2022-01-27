import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import * as actionType from "../../../constants/actionTypes";
import { userInfo } from "../../../actions/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery as MediaQuery } from "react-responsive";
import { LoginModal } from "../../../components";
import { Button, Flex, Dropdown, FixedZIndex, Box, IconButton } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
    Container,
    NavContainerDesktop,
    NavContainerTablet,
    NavContainerMobile,
    NavContainerLeft,
    NavContainerRight,
    NavItem,
    Logo,
    Avatar,
} from "./style";

function Navbar() {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
    const MUSE_DOMAIN = process.env.REACT_APP_MUSE_DOMAIN;
    const isLogged = useSelector((state) => state.authReducer.authData);
    const getUserAvatar = useSelector((state) => state.userInfo.avatar);
    const getUserNickname = useSelector((state) => state.userInfo.nickname);
    //반응형 대응
    const isDesktop = MediaQuery({
        query: "(min-width: 1024px) and (max-width: 2560px)",
    });
    const isTablet = MediaQuery({
        query: "(min-width: 768px) and (max-width: 1023px)",
    });
    const isMobile = MediaQuery({
        query: "(max-width: 767px)",
    });

    const history = useHistory();
    const handleHistoryMyPage = () => {
        window.location.href = `/my-page/${getUserNickname}`;
    };

    const handleHistoryReference = () => {
        window.location.href = "/reference";
    };

    const handleHistoryContest = () => {
        window.location.href = "/contest";
    };

    const handleHistoryMuse = () => {
        window.location.href = "/muse";
    };
    const dispatch = useDispatch();
    const logOutBtn = () => {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_KEY}&logout_redirect_uri=${MUSE_DOMAIN}/redirect-logout`;
    };
    useEffect(() => {
        dispatch(userInfo());
    }, []);

    // 드롭다운 state
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const anchorRef = React.useRef(null);
    const DROPDOWN_ZINDEX = new FixedZIndex(10);

    //드롭다운 모바잃 state
    const [openMobileLeft, setOpenMobileLeft] = useState(false);
    const [selectedMobileLeft, setSelectedMobileLeft] = useState(null);
    const anchorRefMobileLeft = useRef(null);

    return (
        <div>
            {isDesktop && (
                <Container>
                    <NavContainerDesktop>
                        <NavContainerLeft>
                            <NavLink
                                to="/Muse"
                                activeStyle={{ color: "var(--g-color-blue" }}
                            >
                                <NavItem
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    MUSE
                                </NavItem>
                            </NavLink>
                            <NavLink
                                to="/reference"
                                activeStyle={{ color: "var(--g-color-blue" }}
                            >
                                <NavItem
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Reference
                                </NavItem>
                            </NavLink>
                            <NavLink
                                to="/Contest"
                                activeStyle={{ color: "var(--g-color-blue" }}
                            >
                                <NavItem
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Contest
                                </NavItem>
                            </NavLink>
                        </NavContainerLeft>
                        <Link to="/">
                            <Logo>MUSE</Logo>
                        </Link>
                        <NavContainerRight>
                            {isLogged == false || isLogged == null ? (
                                <LoginModal />
                            ) : (
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box marginEnd={4}>
                                        <Link to="/search">
                                            <IconButton
                                                icon="search"
                                                iconColor="black"
                                            />
                                        </Link>
                                    </Box>
                                    <Avatar
                                        src={getUserAvatar}
                                        ref={anchorRef}
                                        onClick={() =>
                                            setOpen((prevVal) => !prevVal)
                                        }
                                    />
                                    {open && (
                                        <Dropdown
                                            zIndex={DROPDOWN_ZINDEX}
                                            anchor={anchorRef.current}
                                            id="action-variant-dropdown-example"
                                            onDismiss={() => setOpen(false)}
                                        >
                                            <Dropdown.Item
                                                onSelect={handleHistoryMyPage}
                                                option={{
                                                    value: "조회수순",
                                                    label: "마이페이지",
                                                }}
                                                selected={selected}
                                            />
                                            <Dropdown.Item
                                                onSelect={logOutBtn}
                                                option={{
                                                    value: "최신순",
                                                    label: "로그아웃",
                                                }}
                                                selected={selected}
                                            />
                                        </Dropdown>
                                    )}
                                </Flex>
                            )}
                        </NavContainerRight>
                    </NavContainerDesktop>
                </Container>
            )}

            {isTablet && (
                <Container>
                    <NavContainerMobile>
                        <NavContainerLeft>
                            <NavLink
                                to="/Muse"
                                activeStyle={{ color: "var(--g-color-blue" }}
                            >
                                <NavItem
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    MUSE
                                </NavItem>
                            </NavLink>
                            <NavLink
                                to="/reference"
                                activeStyle={{ color: "var(--g-color-blue" }}
                            >
                                <NavItem
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Reference
                                </NavItem>
                            </NavLink>
                            <NavLink
                                to="/Contest"
                                activeStyle={{ color: "var(--g-color-blue" }}
                            >
                                <NavItem
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Contest
                                </NavItem>
                            </NavLink>
                        </NavContainerLeft>
                        <Link to="/">
                            <Logo>MUSE</Logo>
                        </Link>
                        <NavContainerRight>
                            {isLogged == false || isLogged == null ? (
                                <LoginModal />
                            ) : (
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box marginEnd={4}>
                                        <Link to="/search">
                                            <IconButton
                                                icon="search"
                                                iconColor="black"
                                            />
                                        </Link>
                                    </Box>
                                    <Avatar
                                        src={getUserAvatar}
                                        ref={anchorRef}
                                        onClick={() =>
                                            setOpen((prevVal) => !prevVal)
                                        }
                                    />
                                    {open && (
                                        <Dropdown
                                            zIndex={DROPDOWN_ZINDEX}
                                            anchor={anchorRef.current}
                                            id="action-variant-dropdown-example"
                                            onDismiss={() => setOpen(false)}
                                        >
                                            <Dropdown.Item
                                                onSelect={handleHistoryMyPage}
                                                option={{
                                                    value: "조회수순",
                                                    label: "마이페이지",
                                                }}
                                                selected={selected}
                                            />
                                            <Dropdown.Item
                                                onSelect={logOutBtn}
                                                option={{
                                                    value: "최신순",
                                                    label: "로그아웃",
                                                }}
                                                selected={selected}
                                            />
                                        </Dropdown>
                                    )}
                                </Flex>
                            )}
                        </NavContainerRight>
                    </NavContainerMobile>
                </Container>
            )}

            {isMobile && (
                <Container>
                    <NavContainerMobile>
                        <NavContainerLeft>
                            <IconButton
                                icon="menu"
                                ref={anchorRefMobileLeft}
                                onClick={() =>
                                    setOpenMobileLeft((prevVal) => !prevVal)
                                }
                            />
                            {openMobileLeft && (
                                <Dropdown
                                    zIndex={DROPDOWN_ZINDEX}
                                    anchor={anchorRefMobileLeft.current}
                                    id="action-variant-dropdown-example"
                                    onDismiss={() => setOpenMobileLeft(false)}
                                >
                                    <Dropdown.Item
                                        onSelect={handleHistoryMuse}
                                        option={{
                                            label: "Muse",
                                        }}
                                        selected={selectedMobileLeft}
                                    />
                                    <Dropdown.Item
                                        onSelect={handleHistoryReference}
                                        option={{
                                            label: "Reference",
                                        }}
                                        selected={selectedMobileLeft}
                                    />
                                    <Dropdown.Item
                                        onSelect={handleHistoryContest}
                                        option={{
                                            label: "Contest",
                                        }}
                                        selected={selectedMobileLeft}
                                    />
                                </Dropdown>
                            )}
                        </NavContainerLeft>
                        <Link to="/">
                            <Logo>MUSE</Logo>
                        </Link>
                        <NavContainerRight>
                            {isLogged == false || isLogged == null ? (
                                <LoginModal />
                            ) : (
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box marginEnd={4}>
                                        <Link to="/search">
                                            <IconButton
                                                icon="search"
                                                iconColor="black"
                                            />
                                        </Link>
                                    </Box>
                                    <Avatar
                                        src={getUserAvatar}
                                        ref={anchorRef}
                                        onClick={() =>
                                            setOpen((prevVal) => !prevVal)
                                        }
                                    />
                                    {open && (
                                        <Dropdown
                                            zIndex={DROPDOWN_ZINDEX}
                                            anchor={anchorRef.current}
                                            id="action-variant-dropdown-example"
                                            onDismiss={() => setOpen(false)}
                                        >
                                            <Dropdown.Item
                                                onSelect={handleHistoryMyPage}
                                                option={{
                                                    value: "조회수순",
                                                    label: "마이페이지",
                                                }}
                                                selected={selected}
                                            />
                                            <Dropdown.Item
                                                onSelect={logOutBtn}
                                                option={{
                                                    value: "최신순",
                                                    label: "로그아웃",
                                                }}
                                                selected={selected}
                                            />
                                        </Dropdown>
                                    )}
                                </Flex>
                            )}
                        </NavContainerRight>
                    </NavContainerMobile>
                </Container>
            )}
        </div>
    );
}

export default Navbar;
