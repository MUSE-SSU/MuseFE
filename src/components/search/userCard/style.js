import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 2px 3px 3px 2px rgba(156, 156, 156, 0.64);
    -webkit-box-shadow: 2px 3px 3px 2px rgba(156, 156, 156, 0.64);
    max-width: 300px;
    height: auto;
    overflow: hidden;
`;
export const InfoContainer = styled.div`
    width: 240px;
    margin-left: 12px;
    display: block;
    flex-direction: column;
    overflow: hidden;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 48px;
    height: 48px;
`;

export const Nickname = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 600;
`;

export const Introduce = styled.p`
    font-size: var(--g-text-font-size-3);
    text-overflow: ellipsis ellipsis;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;
`;
