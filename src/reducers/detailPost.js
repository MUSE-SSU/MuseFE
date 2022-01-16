import { DETAIL_POST, IS_LIKED } from "../constants/actionTypes";
export const detailPost = (state = { writerAvatar: null }, action) => {
    switch (action.type) {
        case DETAIL_POST:
            return {
                ...state,
                idx: action.payload.idx,
                title: action.payload.title,
                image: action.payload.image,
                hashTag: action.payload.hashtag,
                content: action.payload.content,
                writer: action.payload.writer,
                comments: action.payload.comment,
                isLiked: action.payload.is_login_user_liked,
                writerAvatar: action.payload.writer_avatar,
                likes: action.payload.likes,
            };
        default:
            return state;
    }
};
