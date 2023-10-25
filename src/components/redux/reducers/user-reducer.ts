import { ACTIVATION_REGISTRATION, SET_USER_INFO } from "../action-types";
import { IUserState} from "../../../types"
import { Action } from "@remix-run/router";
import { stat } from "fs";

const initialState={
    user:null,
}

const getInitialState=( )=>{
    const cacheState= localStorage.getItem('prevState');
    if (cacheState){
        const jsState= JSON.parse(cacheState);
        return jsState.user
    }
    return initialState
}

const userReducer=(state: IUserState = getInitialState(), action: any)=>{
    console.log(state)
    switch (action.type){
        case SET_USER_INFO:{
            return({
                user:action.user
            })
        }
        default:{
            return state;
        }
    }
}
export { 
    userReducer,
    initialState,
    getInitialState
}

// jo_nick@gmailvn.com
// Watananon
// 1osw4Gktzs51lAH