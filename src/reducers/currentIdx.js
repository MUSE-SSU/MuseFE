import { CURRENT_IDX } from "../constants/actionTypes";

export const currentIdx = (state = { currentIdxData: 0 }, action) => {
    switch (action.type) {
        case CURRENT_IDX:
            const currentIdx = action.payload;
            console.log(currentIdx);
            return { ...state, currentIdxData: currentIdx };
        default:
            return { ...state };
    }
};
