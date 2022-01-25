import styled from "styled-components";

export const IconContainer = styled.div`
    display: block;
    z-index: 100;
    position: fixed;
    right: 0;
    bottom: 0;
    @media (max-width: 425px) {
        margin: 96px 12px 96px 12px;
    }
    margin: ${(props) =>
        props.name === "cur-contest" ? `24px` : `96px 24px 96px 24px`};
`;
