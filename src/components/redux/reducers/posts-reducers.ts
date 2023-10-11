import { IPostInfo } from "../../../types"
import { SET_POSTS } from "../action-types";

const initialState = {
    posts: [] as IPostInfo[],
}
const postsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_POSTS: {
            return ({
                ...state,
                posts: action.posts
            })
        }
        default: {
            return state;
        }
    }
}

export { postsReducer }