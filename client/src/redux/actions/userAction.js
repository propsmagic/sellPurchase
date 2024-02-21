import { ActionTypes } from "../constants/action-types";

export const getAllUserPosts = (posts)=>{
    return{
        type: ActionTypes.GET_ALL_USER_POSTS,
        payload: posts,
    }
}