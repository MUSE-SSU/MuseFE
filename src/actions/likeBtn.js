import { IS_LIKED } from "../constants/actionTypes";
import * as api from "../api/index";

export const sendIsLiked = (postIdx) => async () => {
    try {
        await api.sendIsLiked(postIdx);
    } catch (e) {
        console.error(e);
    }
};
