import {
    UPDATE_USER,
    PROFILE_IMAGE_UPLOAD,
    CHECK_NICKNAME_DUPLICATION,
} from "../constants/actionTypes";
import * as api from "../api";

export const updateUser = (formData) => {
    try {
        api.updateUser(formData);
    } catch (e) {
        console.error(e);
    }
};
