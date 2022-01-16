import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
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

export const CustomDropdown = styled(Dropdown)`
    button {
        background-color: var(--g-color-blue);
        width: 36px;
    }

    .btn-success {
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
    }
    .btn-success:hover {
        background-color: var(--g-color-blue);
    }
    #dropdown-menu-align-end {
        width: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        color: var(--g-olor-blue);
    }
    .dropdown-menu {
        min-width: 120px;
        background-color: white;
    }
    .dropdown-item {
        color: black;
        display: flex;
        justify-content: center;
        font-family: "Helvetica";
        font-weight: 600;
        &:hover {
            background-color: var(--g-color-blue);
        }
    }
    .dropdown-toggle::after {
        display: none;
    }
    .btn-check:focus + &,
    &:focus {
        background-color: transparent;
        box-shadow: none;
    }
    .btn-check:focus + .btn-primary,
    .btn-primary:focus {
        box-shadow: none;
    }
    .btn-check:checked + .btn-primary:focus,
    .btn-check:active + .btn-primary:focus,
    .btn-primary:active:focus,
    .btn-primary.active:focus,
    .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: none;
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
