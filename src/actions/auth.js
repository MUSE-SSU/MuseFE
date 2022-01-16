import { AUTH, LOG_OUT } from "../constants/actionTypes";
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

export const logOut = () => async (dispatch) => {
    try {
        dispatch({ type: LOG_OUT });
    } catch (e) {
        console.error(e);
    }
};
