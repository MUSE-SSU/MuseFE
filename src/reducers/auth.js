import { AUTH, LOG_OUT } from "../constants/actionTypes";
export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            if (action.payload.result == false) {
                console.log("회원가입 하세요");
                return { ...state, authData: false };
            } else if (action.payload.result == true) {
                localStorage.setItem(
                    "token",
                    JSON.stringify(action?.payload.token)
                );
                return { ...state, authData: true };
            }
        case LOG_OUT:
            localStorage.clear();
            console.log("로그아웃 완료");
            return { ...state, authData: false };
        default:
            if (localStorage.getItem("token") != null) {
                return { ...state, authData: true };
            }
            return state;
    }
};
