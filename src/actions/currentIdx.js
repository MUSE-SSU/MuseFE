import { CURRENT_IDX } from "../constants/actionTypes";

export const currentIdx = (getCurrentIdx) => async (dispatch) => {
    try {
        dispatch({ type: CURRENT_IDX, payload: getCurrentIdx });
    } catch (e) {
        console.error(e);
    }
};
