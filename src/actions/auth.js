import { AUTH, LOG_OUT, CHECK_IS_FIRST } from "../constants/actionTypes";
import * as api from "../api/index";

export const kakaoLogin = (authorizeCodeFromKakao) => async (dispatch) => {
    try {
        const response = await api.kakaoLogin(authorizeCodeFromKakao);
        dispatch({ type: AUTH, payload: response });
    } catch (e) {
        console.error(e);
    }
};

export const kakaoRegister = (authorizeCodeFromKakao) => async (dispatch) => {
    try {
        const response = await api.kakaoRegister(authorizeCodeFromKakao);
        dispatch({ type: AUTH, payload: response });
    } catch (error) {
        console.error(error);
    }
};

export const checkIsFirst = () => async (dispatch) => {
    dispatch({ type: CHECK_IS_FIRST });
};
