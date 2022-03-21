import { CURRENT_IDX } from "../constants/actionTypes";

export const currentIdx = (state = { currentIdxData: 0 }, action) => {
    switch (action.type) {
        case CURRENT_IDX:
            const currentIdx = action.payload;
            return { ...state, currentIdxData: currentIdx };
        default:
            return { ...state };
    }
};
