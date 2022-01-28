import styled from "styled-components";

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 12px;
    display: block;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export const NicknameInput = styled.input`
    height: 48px;
    width: 70%;
    font-size: var(--g-text-font-size-4);
    color: var(--g-color-gray200);
    border-radius: 16px;
    border: none;
    background-color: var(--g-color-gray100);
    padding: 12px;

    &:focus {
        outline: none;
    }
`;

export const InstagramInput = styled(NicknameInput)`
    width: 70%;
`;

export const NicknameDuplicateButton = styled.button`
    margin-left: 12px;
    width: 72px;
    height: 48px;
    border-radius: 24px;
    background-color: var(--g-color-gray100);
    border: none;
    font-weight: 600;
`;
export const NicknameLabel = styled.label`
    font-weight: 600;
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-5);
    margin-right: 12px;
    display: block;
`;

export const SubmitButton = styled.button`
    border: none;
    height: 48px;
    width: 72px;
    font-weight: 900;
    font-size: var(--g-text-font-size-3);
    border-radius: 24px;
    &:hover {
        background-color: var(--g-color-blue);
        color: var(--g-color-white);
    }
`;

export const DeleteButton = styled.button`
    border: none;
    height: 24px;
    width: 48px;
    font-weight: 900;
    font-size: var(--g-text-font-size-2);
    background-color: #cc3300;
    border-radius: 24px;
    color: var(--g-color-white);
`;

export const SubmitButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    margin-top: 24px;
    margin-right: 48px;
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalName = styled.h1`
    font-weight: 900;
    font-size: var(--g-text-font-size-5);
    margin-bottom: 24px;
`;

export const InputDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    overflow: hidden;
`;

export const InputDetailTextContainer = styled.div`
    width: 100%;
`;

export const Textarea = styled.textarea`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    width: 70%;
    height: 96px;
    border: none;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
    padding: 16px;
    display: inline;
    font-size: var(--g-text-font-size-4);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
`;

export const Pre = styled.pre`
    justify-content: center;
`;

export const NicknameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    width: 100%;
`;

export const InstagramContainer = styled(NicknameContainer)``;
