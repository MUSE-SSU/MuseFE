import { USER_INFO } from "../constants/actionTypes";
import * as api from "../api";

export const userInfo = () => async (dispatch) => {
    try {
        const response = await api.getUserInfo();
        dispatch({ type: USER_INFO, payload: response });
    } catch (e) {
        console.log(e);
    }
};
