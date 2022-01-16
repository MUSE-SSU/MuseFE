import { USER_INFO } from "../constants/actionTypes";

export const userInfo = (state = { nickname: null, avatar: null }, action) => {
    switch (action.type) {
        case USER_INFO:
            const nicknameData = action.payload.nickname;
            const avatarData = action.payload.avatar;
            const badgeData = action.payload.badge;
            return {
                ...state,
                nickname: nicknameData,
                avatar: avatarData,
                badge: badgeData,
            };
        default:
            return state;
    }
};
