import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { motion } from "framer";
import { Button, Modal } from "gestalt";
import "gestalt/dist/gestalt.css";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0 16px 0;
`;
export const NavContainerDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92vw;
    max-width: 1440px;
    height: 6vh;
    background-color: #fff;
`;
export const NavContainerTablet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94vw;
    height: 80px;
    background-color: #fff;
`;

export const NavContainerMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96vw;
    height: 80px;
    background-color: #fff;
`;

export const NavContainerLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12%;
    //flex-basis: 256px; item 3개일때임
`;
export const NavContainerRight = styled(NavContainerLeft)`
    justify-content: flex-end;
`;

export const NavItem = styled(motion.div)`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    font-family: R-FLEX-BLACK;
    font-weight: 900;
    border-radius: 36px;
    &:hover {
        color: var(--g-color-blue);
    }
`;

export const Logo = styled(motion.div)`
    font-family: R-FLEX-BLACK;
    font-size: 36px;
    color: var(--g-color-blue);
`;

export const SearchIcon = styled(BiSearch)`
    margin-right: 24px;
    font-size: 24px;
    &:hover {
        color: var(--g-color-blue);
    }
    @media (max-width: 767px) {
        margin-right: 12px;
    }
`;
export const BurgerIcon = styled(GiHamburgerMenu)`
    font-size: 24px;
    &:hover {
        color: var(--color-blue);
    }
`;
export const AvatarIcon = styled(CgProfile)`
    font-size: 24px;
    &:hover {
        color: var(--g-color-blue);
    }
`;

export const DropdownMenu = styled.p`
    font-weight: 600;
    margin: 0;
    font-size: 1em;
`;

export const Avatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
`;

export const AgreeModal = styled(Modal)``;
