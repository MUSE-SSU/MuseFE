import styled from "styled-components";
import { Dropdown } from "gestalt";

export const MainContainer = styled.div`
    padding: 24px;
    max-width: 1440px;
    @media (max-width: 375px) {
        padding: 12px;
    }
`;
export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0 12px 0;
`;

export const ListItem = styled.div``;

export const GestaltDropdown = styled(Dropdown)`
    position: relative;
    z-index: 1000;
`;

export const ToggleContainer = styled.div`
    display: flex !important;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const ToggleButtonName = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 1em;
    margin-left: 1em;
`;
