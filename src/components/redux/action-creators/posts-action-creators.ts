import { IPostInfo,IPostsResponse,ICreatePost } from "../../../types";
import { LOAD_POSTS, SET_POSTS,ADD_POSTS } from "../action-types";
import { takeEvery, put } from 'redux-saga/effects'


const setPosts= (posts: IPostInfo[])=>({
    type: SET_POSTS,
    posts,
})

const loadPosts= ()=>({
    type: LOAD_POSTS,
})


const addPost = (postInfo: ICreatePost ) => ({
    type: ADD_POSTS,
    postInfo,
})

function* fetchPosts() {
    const resp: Response = yield fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=0')
    const data: IPostsResponse = yield resp.json();
    yield put(setPosts(data.results))
}
function* watcherPost() {
    yield takeEvery(LOAD_POSTS, fetchPosts)
}
export {
    setPosts,
    loadPosts,
    watcherPost,
    addPost,
}