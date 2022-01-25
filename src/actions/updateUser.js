import * as api from "../api";

export const updateUser = (formData) => {
    try {
        api.updateUser(formData);
    } catch (e) {
        console.error(e);
    }
};
