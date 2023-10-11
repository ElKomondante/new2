
import { takeEvery, put } from "redux-saga/effects"
import { ACTIVATION_REGISTRATION, GET_USER_INFO, SIGN_IN, SIGN_UP,SET_USER_INFO } from "../action-types"
import { ISignUp,IRegistrationActivation,ISignIn, ITokenResponse,IUserInfo } from "../../../types"
import { getToken } from "../../../utils"

const activationRegistration = (activationInfo: IRegistrationActivation)=>({
    type: ACTIVATION_REGISTRATION,
    activationInfo,
})

const signUp=( signUpInfo: ISignUp)=>({
    type: SIGN_UP,
    signUpInfo
})

const SignIn=( SignInInfo: ISignIn)=>({
    type: SIGN_IN,
    SignInInfo
})


const getUserInfo = ()=>({
    type:GET_USER_INFO,
})


const setUserInfo = (user: IUserInfo | null)=>({
    type:SET_USER_INFO,
    user,
})

function* fetchActivationRegistration(action: any) {
	const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
		method: 'POST',
		headers: { 
            'Content-type': 'application/json' 
        },
    body: JSON.stringify(action.activationInfo),
})
console.log(response);
}


function* fetchSignUp(action: any){
    const response: Response = yield fetch ('https://studapi.teachmeskills.by/auth/users/',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.signUpInfo)
        })
    }


function* fetchSignIn(action:any){
    const response: Response = yield fetch ('https://studapi.teachmeskills.by/auth/jwt/create/',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.SignInInfo)
        })
        if (response.status === 200) {
            const { refresh, access}:ITokenResponse = yield response.json();
            console.log(refresh,access)
            localStorage.setItem('access',access)
            localStorage.setItem('refresh',refresh)
            yield put (getUserInfo())
        }
}


function* fetchUserInfo(){
    const token : string = yield getToken()
    const response: Response = yield fetch ('https://studapi.teachmeskills.by/auth/users/me/',{
            headers: {
                "Authorization": `Bearer  ${token}`
            },
        });
        const data: IUserInfo= yield response.json();
        yield put (setUserInfo(data))
        // window.location.pathname = '/all-post'
        }



function* watchUser(){
    yield takeEvery(ACTIVATION_REGISTRATION, fetchActivationRegistration)
    yield takeEvery(SIGN_UP, fetchSignUp)
    yield takeEvery(SIGN_IN, fetchSignIn)
    yield takeEvery(GET_USER_INFO, fetchUserInfo)
}


export{
    activationRegistration,
    watchUser,
    signUp,
    SignIn,
    getUserInfo,
    setUserInfo,
}
