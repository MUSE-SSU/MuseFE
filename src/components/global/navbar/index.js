import React, { useState, useEffect, useMemo } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import * as actionType from "../../../constants/actionTypes";
import { userInfo } from "../../../actions/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery as MediaQuery } from "react-responsive";
import { RulesModal, LoginModal } from "../../../components";
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
    CustomDropdown,
    SearchIcon,
    AvatarIcon,
    BurgerIcon,
    DropdownMenu,
    Avatar,
    CustomNavLink,
} from "./style";

function Navbar() {
    const isLogged = useSelector((state) => state.authReducer.authData);
    const getUserAvatar = useSelector((state) => state.userInfo.avatar);
    const getUserNickname = useSelector((state) => state.userInfo.nickname);
    //반응형 대응
    const isDesktop = MediaQuery({
        query: "(min-width: 1024px",
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
    const dispatch = useDispatch();
    const logOutBtn = () => {
        dispatch({ type: actionType.LOG_OUT });
    };

    useEffect(() => {
        dispatch(userInfo());
    }, []);

    // 드롭다운 state
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const anchorRef = React.useRef(null);
    const DROPDOWN_ZINDEX = new FixedZIndex(10);
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
                    <NavContainerTablet>
                        <NavContainerLeft>
                            <CustomDropdown className="shadow-none">
                                <CustomDropdown.Toggle id="dropdown-menu-align-end">
                                    <BurgerIcon />
                                </CustomDropdown.Toggle>
                                <CustomDropdown.Menu>
                                    <CustomDropdown.Item>
                                        <Link to="/Muse">
                                            <DropdownMenu>MUSE</DropdownMenu>
                                        </Link>
                                    </CustomDropdown.Item>
                                    <CustomDropdown.Item>
                                        <Link to="/reference">
                                            <DropdownMenu>
                                                Reference
                                            </DropdownMenu>
                                        </Link>
                                    </CustomDropdown.Item>
                                    <CustomDropdown.Item>
                                        <Link to="/reference">
                                            <DropdownMenu>
                                                reference
                                            </DropdownMenu>
                                        </Link>
                                    </CustomDropdown.Item>
                                </CustomDropdown.Menu>
                            </CustomDropdown>
                        </NavContainerLeft>
                        <Link to="/">
                            <Logo>MUSE</Logo>
                        </Link>
                        <NavContainerRight>
                            <SearchIcon size={24} />

                            {isLogged == false || null ? (
                                <NavItem>
                                    <Link to="auth">로그인</Link>
                                </NavItem>
                            ) : (
                                <CustomDropdown className="shadow-none">
                                    <CustomDropdown.Toggle id="dropdown-menu-align-end">
                                        <AvatarIcon />
                                    </CustomDropdown.Toggle>

                                    <CustomDropdown.Menu>
                                        <CustomDropdown.Item>
                                            <DropdownMenu>
                                                마이페이지
                                            </DropdownMenu>
                                        </CustomDropdown.Item>
                                        <CustomDropdown.Item
                                            href="#/action-1"
                                            onClick={logOutBtn}
                                        >
                                            <DropdownMenu>
                                                로그아웃
                                            </DropdownMenu>
                                        </CustomDropdown.Item>
                                    </CustomDropdown.Menu>
                                </CustomDropdown>
                            )}
                        </NavContainerRight>
                    </NavContainerTablet>
                </Container>
            )}

            {isMobile && (
                <Container>
                    <NavContainerMobile>
                        <NavContainerLeft>
                            <CustomDropdown className="shadow-none">
                                <CustomDropdown.Toggle id="dropdown-menu-align-end">
                                    <BurgerIcon />
                                </CustomDropdown.Toggle>

                                <CustomDropdown.Menu>
                                    <CustomDropdown.Item>
                                        <DropdownMenu>
                                            <Link
                                                to="/Muse"
                                                activeClassName="active"
                                            >
                                                MUSE
                                            </Link>
                                        </DropdownMenu>
                                    </CustomDropdown.Item>
                                    <CustomDropdown.Item>
                                        <DropdownMenu>
                                            <Link to="/reference">
                                                Reference
                                            </Link>
                                        </DropdownMenu>
                                    </CustomDropdown.Item>
                                    <CustomDropdown.Item>
                                        <DropdownMenu>
                                            <Link to="/Contest">CONTEST</Link>
                                        </DropdownMenu>
                                    </CustomDropdown.Item>
                                </CustomDropdown.Menu>
                            </CustomDropdown>
                        </NavContainerLeft>
                        <Link to="/">
                            <Logo>MUSE</Logo>
                        </Link>
                        <NavContainerRight>
                            {isLogged == false || null ? (
                                <NavItem>
                                    <Link to="auth">로그인</Link>
                                </NavItem>
                            ) : (
                                <CustomDropdown className="shadow-none">
                                    <CustomDropdown.Toggle id="dropdown-menu-align-end">
                                        <AvatarIcon />
                                    </CustomDropdown.Toggle>

                                    <CustomDropdown.Menu>
                                        <CustomDropdown.Item>
                                            <DropdownMenu>
                                                마이페이지
                                            </DropdownMenu>
                                        </CustomDropdown.Item>
                                        <CustomDropdown.Item
                                            href="#/action-1"
                                            onClick={logOutBtn}
                                        >
                                            <DropdownMenu>
                                                로그아웃
                                            </DropdownMenu>
                                        </CustomDropdown.Item>
                                    </CustomDropdown.Menu>
                                </CustomDropdown>
                            )}
                        </NavContainerRight>
                    </NavContainerMobile>
                </Container>
            )}
        </div>
    );
}

export default Navbar;
