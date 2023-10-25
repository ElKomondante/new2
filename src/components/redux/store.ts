
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherPost } from './action-creators/posts-action-creators';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { postsReducer, userReducer } from './reducers';
import { watchUser } from './action-creators/user-action-creators';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
    yield all([
        watcherPost(),
        watchUser(),
    ])
}
const store = createStore(combineReducers({
    posts: postsReducer,
    user: userReducer,
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


const hadleClick = () =>{
    const state= store.getState();
    console.log(state);
    localStorage.setItem('prevState', JSON.stringify(state));
}

store.subscribe(hadleClick)

export { store };