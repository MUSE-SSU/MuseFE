import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userInfo } from "./userInfo";
import { currentIdx } from "./currentIdx";
import { detailPost } from "./detailPost";
import { isLiked } from "./isLiked";
export const reducers = combineReducers({
    authReducer,
    userInfo,
    currentIdx,
    detailPost,
    isLiked,
});
