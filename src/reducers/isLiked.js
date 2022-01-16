import { IS_LIKED } from "../constants/actionTypes";
export const isLiked = (state = {}, action) => {
    switch (action.type) {
        case IS_LIKED:
            return { ...state, isLikedNow: action.payload.is_press_like };
        default:
            return state;
    }
};
