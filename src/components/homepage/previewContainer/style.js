import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { motion } from "framer";

export const MainContainer = styled.div`
    padding: 36px;
    @media (max-width: 479px) {
        padding: 12px;
    }
    @media (max-width: 767px) and (min-width: 480px) {
        padding: 18px;
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        padding: 24px;
    }
    @media (max-width: 1439px) and (min-width: 1024px) {
        padding: 30px;
    }
`;
export const DropDownContainer = styled.div`
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: flex-end;
`;
export const GridContainer = styled.div`
    display: grid;
    margin-top: 12px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const ListItem = styled.div``;
export const CustomDropdown = styled(Dropdown)`
    position: relative;
    margin: 12px 0 12px 0;
    .btn {
        border-radius: 24px;
    }
    .btn-primary {
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
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
        min-width: auto;
        background-color: white;
    }
    .dropdown-item {
        display: flex;
        justify-content: center;
        font-weight: 600;
        &:hover {
            background-color: var(--g-color-blue);
        }
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

export const PreviewH1 = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 2.5em;
    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

export const PreviewInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 0 0;
`;

export const PreviewH2 = styled(motion.h2)`
    font-family: R-FLEX-BLACK;
    font-size: 1.5em;
    cursor: pointer;
`;
