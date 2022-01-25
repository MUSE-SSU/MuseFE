import { DETAIL_POST } from "../constants/actionTypes";
import * as api from "../api/index";

export const getUploadPost = (data) => async () => {
    try {
        api.uploadPost(data);
    } catch (e) {
        console.error(e);
    }
};

export const getDetailPost = (postIdxUrl) => async (dispatch) => {
    try {
        const response = await api.detailPost(postIdxUrl);
        dispatch({ type: DETAIL_POST, payload: response });
    } catch (e) {
        console.error(e);
    }
};

export const uploadCommentPost = (idx, currentComments) => async () => {
    try {
        await api.CommentUpload(idx, currentComments);
    } catch (e) {
        console.error(e);
    }
};

export const updatePost = (postIdx, formData) => async () => {
    try {
        await api.updatePost(postIdx, formData);
    } catch (e) {
        console.error(e);
    }
};

export const deletePost = (postIdx) => async () => {
    try {
        await api.deletePost(postIdx);
    } catch (e) {
        console.error(e);
    }
};

export const sendIsLiked = (postIdx) => async () => {
    try {
        await api.sendIsLiked(postIdx);
    } catch (e) {
        console.error(e);
    }
};

export const sendIsSaved = (postIdx) => async () => {
    try {
        await api.sendIsSaved(postIdx);
    } catch (e) {
        console.error(e);
    }
};

export const deleteComment = (commentIdx) => async () => {
    try {
        await api.deleteComment(commentIdx);
    } catch (e) {
        console.error(e);
    }
};

export const updateComment = (commentIdx, comment) => async () => {
    try {
        await api.updateComment(commentIdx, comment);
    } catch (e) {
        console.error(e);
    }
};
